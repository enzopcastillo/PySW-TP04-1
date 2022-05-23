export class Noticia {
    id?:number;
    titulo?:string;
    descripcion?:string;
    img?:string;

    constructor(id?:number, titulo?:string, descripcion?:string, img?:string){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}
