import {Subject} from 'rxjs';

export class LibrosService {

  librosSubject = new Subject();
  private libros = ['Libro de Matematicas', 'Libro de Aritmetica', 'Grafico Revista']

  obtenerLibros(){
    return [...this.libros];
  }

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next('');
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubject.next('');
  }

}
