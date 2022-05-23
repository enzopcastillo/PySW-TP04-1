import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/pages/punto1/punto1.component';
import { Punto2Component } from './components/pages/punto2/punto2/punto2.component';
import { Punto2ImagenComponent } from './components/pages/punto2/punto2-imagen/punto2-imagen.component';
import { Punto2PalabraComponent } from './components/pages/punto2/punto2-palabra/punto2-palabra.component';
import { Punto2TecladoComponent } from './components/pages/punto2/punto2-teclado/punto2-teclado.component';
import { Punto3Component } from './components/pages/punto3/punto3.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    Punto2ImagenComponent,
    Punto2PalabraComponent,
    Punto2TecladoComponent,
    Punto3Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
