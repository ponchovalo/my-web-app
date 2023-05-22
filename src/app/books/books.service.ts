import { Books } from './books.model'
import { Subject } from 'rxjs';

export class BooksService {

  booksLista: Books[] = [
    {libroid: 1, titulo: 'Algoritmos', descripcion: 'libro basico', autor: 'Vaxi Drez', precio: 18},
    {libroid: 2, titulo: 'Angular', descripcion: 'libro intermedio', autor: 'Neli Arcilla', precio: 25},
    {libroid: 3, titulo: 'ASP.NET', descripcion: 'Master', autor: 'Juan Arevalo', precio: 30},
    {libroid: 4, titulo: 'Java', descripcion: 'Agile Libro', autor: 'John Ortiz', precio: 20}
  ];

  bookSubject = new Subject<Books>();

  obtenerLibros(){
    return this.booksLista.slice();
  }

  guardarLibro(book: Books){
    this.booksLista.push(book);
    this.bookSubject.next(book);
  }

}
