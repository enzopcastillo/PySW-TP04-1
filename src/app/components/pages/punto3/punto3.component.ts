import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasajef!: FormGroup;
  pasajes: Array<Pasaje>;
  
  constructor(private fb:FormBuilder, private pasajeService:PasajeService) {
    this.pasajes = [];
    this.pasajef = this.fb.group({
      id: ['', Validators.required],
      dniPasajero: ['', Validators.required],
      categoriaPasajero: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      precioPasaje: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.pasajes = this.pasajeService.getPasajeros();
  }

  ngAdd(form){
    let pasaje: Pasaje = {
      id: form.value.id,
      dniPasajero: form.value.dniPasajero,
      categoriaPasajero: form.value.categoriaPasajero,
      fechaCompra: form.value.fechaCompra,
      precioPasaje: form.value.precioPasaje,
    }
    this.pasajeService.addPasajero(pasaje);
    this.pasajef.reset();
  }

  ngDelete(id: Number){
    this.pasajeService.deletePasajero(id);
  }

  /*
  ngSelect(id: Number){
    this.pasajes = this.pasajeService.getPasajero(id);
    this.pasajes = this.pasajeService.getPasajero(id);
  }
  */
 }
