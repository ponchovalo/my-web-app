import { Books } from './books.model'

export class BooksService {

  booksLista: Books[] = [
    {libroid: 1, titulo: 'Algoritmos', descripcion: 'libro basico', autor: 'Vaxi Drez', precio: 18},
    {libroid: 2, titulo: 'Angular', descripcion: 'libro intermedio', autor: 'Neli Arcilla', precio: 25},
    {libroid: 3, titulo: 'ASP.NET', descripcion: 'Master', autor: 'Juan Arevalo', precio: 30},
    {libroid: 4, titulo: 'Java', descripcion: 'Agile Libro', autor: 'John Ortiz', precio: 20}
  ];

  obtenerLibros(){
    return this.booksLista.slice();
  }

}
