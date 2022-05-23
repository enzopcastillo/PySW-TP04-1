import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultJSONpath = 'assets/json/categorias.json';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  constructor(private http: HttpClient) {}

  getPreguntas(jsonPath: string = defaultJSONpath){
    return this.http.get<{categoria: string, items: string[]}>(jsonPath);
  }
}
