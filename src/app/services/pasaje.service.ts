import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes: Pasaje[]=[
    {
      id: 1,
      dniPasajero: 14362571,
      categoriaPasajero: "Adulto",
      fechaCompra: "2022-05-31",
      precioPasaje: 2000,
    },
    {
      id: 2,
      dniPasajero: 18377333,
      categoriaPasajero: "Adulto",
      fechaCompra: "2022-05-31",
      precioPasaje: 3000,
    }]
    
  constructor() {}

  addPasajero(pasaje: Pasaje):void{
    this.pasajes.push(pasaje);
  }

  getPasajeros(){
    return this.pasajes;
  }

  getPasajero(id: Number){
    return this.pasajes.find(x=>x.id === id);
  }

  deletePasajero(id: Number){
    let pasaje = this.pasajes.find(x=>x.id === id);
    let index = this.pasajes.indexOf(pasaje, 0);
    this.pasajes.splice(index,1);
  }
}
