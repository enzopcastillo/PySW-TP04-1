export class Pasaje {
    id?: number;
    dniPasajero?: number;
    categoriaPasajero?: string;
    fechaCompra?: string;
    precioPasaje?: number;

    constructor(id?: number, dniPasajero?: number, categoriaPasajero?: string, fechaCompra?: string, precioPasaje?: number){
        this.id = id;
        this.dniPasajero = dniPasajero;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
        this.precioPasaje = precioPasaje
    }
}
