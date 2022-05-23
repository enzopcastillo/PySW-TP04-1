import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-punto2-imagen',
  templateUrl: './punto2-imagen.component.html',
  styleUrls: ['./punto2-imagen.component.css']
})
export class Punto2ImagenComponent implements OnInit, OnChanges {
  ahorcado1 = 'assets/images/ahorcado1.jpg'  
  ahorcado2 = 'assets/images/ahorcado2.jpg'  
  ahorcado3 = 'assets/images/ahorcado3.jpg'  
  ahorcado4 = 'assets/images/ahorcado4.jpg'  
  ahorcado5 = 'assets/images/ahorcado5.jpg'  
  ahorcado6 = 'assets/images/ahorcado6.jpg'  
  ahorcado7 = 'assets/images/ahorcado7.jpg'

  errores_maximos = 7;
  errores_restantes;
  exito: boolean = false;
  @Input() aciertos: string[] = [];
  @Input() pregunta: string = '';
  @Output() gameFinished = new EventEmitter<boolean>();

  constructor() {
    this.errores_restantes = this.errores_maximos;
  }

  ngOnChanges(changes: SimpleChanges): void {
     if (
      changes?.['pregunta']?.currentValue &&
      changes?.['pregunta'].currentValue !== changes?.['pregunta'].previousValue
    ) {
      this.errores_restantes = this.errores_maximos;
      this.exito = false;
    }
    const guessesCurrentValue = changes?.['aciertos']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['aciertos'].previousValue
    ) {
      const char = [...guessesCurrentValue].pop();
      this.checkAcierto(char);
    }
  }

  checkAcierto(letra: string){
    let ganamos = true;
    this.errores_restantes -= this.checkError(letra);
    for (let i = 0; i < this.pregunta.length; i++) {
      if (
        !this.aciertos.find(
          (acierto) => acierto.toLowerCase() === this.pregunta[i].toLowerCase()
        )
      ) {
        ganamos = false;
        break;
      }
    }
    this.exito = ganamos;
    if (this.exito || this.errores_restantes === 0) {
      this.gameFinished.emit(this.exito);
      console.log('Juego terminado.')
    }
  }

  checkError(letter: string) {
    for (let i = 0; i < this.pregunta.length; i++) {
      if (this.pregunta[i].toLowerCase() === letter.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }

  ngOnInit(): void {
  }

}
