import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import KEY_CHARS from 'src/app/constants/letras';

interface IKey {
  value: string;
  guessed: boolean;
}

@Component({
  selector: 'app-punto2-teclado',
  templateUrl: './punto2-teclado.component.html',
  styleUrls: ['./punto2-teclado.component.css']
})
export class Punto2TecladoComponent implements OnInit {
  //letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  @Input() pregunta = '';
  @Output() keyPressed = new EventEmitter<string>();
  keys: IKey[] = [];

  constructor() {
    this.keys = KEY_CHARS.split('').map((key) => {
      return {
        value: key,
        guessed: false,
      };
    });
  }

  ngOnInit(): void {
  }

  onKeyClick(key: IKey): void {
    if (key.guessed) {
      return;
    }
    key.guessed = true;
    this.keyPressed.emit(key.value);
  }
}
