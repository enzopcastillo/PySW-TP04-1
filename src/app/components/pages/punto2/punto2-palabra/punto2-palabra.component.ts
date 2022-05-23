import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-punto2-palabra',
  templateUrl: './punto2-palabra.component.html',
  styleUrls: ['./punto2-palabra.component.css']
})
export class Punto2PalabraComponent implements OnInit, OnChanges {
  @Input() pregunta: string = '';
  @Input() aciertos: string[] = [];
  caracteres: { value: string; guessed: boolean }[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['pregunta']?.currentValue &&
      changes?.['pregunta'].currentValue !== changes?.['pregunta'].previousValue
    ) {
      this.caracteres = this.pregunta
        .split('')
        .map((char) => ({ value: char, guessed: false }));
    }
    const guessesCurrentValue = changes?.['aciertos']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['aciertos'].previousValue
    ) {
      const guessedChar = [...changes['aciertos'].currentValue].pop();
      this.caracteres = this.caracteres.map((char) => {
        if (char.value.toLowerCase() === guessedChar.toLowerCase()) {
          return { ...char, guessed: true };
        }
        return char;
      });
    }
  }

  ngOnInit(): void {
  }

}
