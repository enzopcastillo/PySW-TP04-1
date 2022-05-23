import { Component, OnInit } from '@angular/core';
import { AhorcadoService } from 'src/app/services/ahorcado.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  pregunta: string = '';
  preguntas: string[] = [];
  aciertos: string[] = [];
  categoria: string = '';
  restartGameBtnShown = false;

  constructor(private ahorcadoService: AhorcadoService) { }

  ngOnInit(): void {
    this.ahorcadoService.getPreguntas().subscribe((response) =>{
      this.preguntas = response.items;
      this.categoria = response.categoria;
      this.nuevaPregunta();
    })
  }

  justClick() {
    const key = prompt('Enter a key') || '';
    this.acierto(key);
  }

  acierto(letra: string){
    if (!letra || this.aciertos.includes(letra)){
      return;
    }
    this.aciertos = [...this.aciertos, letra];
  }

  reset(){
    this.aciertos = [];
    this.nuevaPregunta();
    this.restartGameBtnShown = false;
  }

  nuevaPregunta(){
    const randomIndex = Math.floor(Math.random() * this.preguntas.length);
    this.pregunta = this.preguntas[randomIndex];
    console.log(this.pregunta);  
  }

  onGameFinished() {
    this.restartGameBtnShown = true;
  }
}
