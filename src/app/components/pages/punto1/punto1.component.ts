import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticias: Array<Noticia>;
  indice: number=0;
  noticia: Noticia = new Noticia();

  constructor() {
    this.noticias = new Array<Noticia>();
    this.noticias.push(new Noticia(1, 'Los Simuladores, La Pelicula', 'Pellentesque blandit est sit amet justo sagittis ultrices. Suspendisse tempus in libero non ullamcorper. Proin semper euismod pretium.', 'assets/images/slider1.png')),
    this.noticias.push(new Noticia(2, 'Elon Musk compra Twitter', 'Pellentesque blandit est sit amet justo sagittis ultrices. Suspendisse tempus in libero non ullamcorper. Proin semper euismod pretium.', 'assets/images/slider2.jpg')),
    this.noticias.push(new Noticia(3, 'Dolar imparable, a 205', 'Pellentesque blandit est sit amet justo sagittis ultrices. Suspendisse tempus in libero non ullamcorper. Proin semper euismod pretium.', 'assets/images/slider3.jpg')),
    this.noticias.push(new Noticia(4, 'River goleo 7 a 0', 'Pellentesque blandit est sit amet justo sagittis ultrices. Suspendisse tempus in libero non ullamcorper. Proin semper euismod pretium.', 'assets/images/slider4.jpg')),
    this.iniciar();
  }

  ngOnInit(): void {
  }

  iniciar(){
    if (this.indice < this.noticias.length){
      this.noticia = this. noticias[this.indice];
    }
  }

  anterior(){
    this.indice = this.indice -1;
    if (this.indice <= this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }
}
