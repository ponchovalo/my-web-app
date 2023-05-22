import { Autor } from "./autor.model";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AutoresService{

  private autoresLista: Autor[] = [
    {autorId: 1, nombre: 'Ildefonso', apellido: 'Valenzuela', gradoAcademico: 'Licenciatura'},
    {autorId: 1, nombre: 'Vaxi', apellido: 'Derz', gradoAcademico: 'Ingenieria'},
    {autorId: 1, nombre: 'Nestor', apellido: 'Lopez', gradoAcademico: 'Master'},
    {autorId: 1, nombre: 'Roberto', apellido: 'Arcilla', gradoAcademico: 'Ingenieria en Sistemas'}
  ]

  obtenerAutores(){
    return this.autoresLista.slice();
  }

}
