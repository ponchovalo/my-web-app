import { Component, Input, EventEmitter, Output } from "@angular/core";
import { LibrosService } from '../services/libros.service';

@Component({
    selector:'app-libro',
    templateUrl:'./libro.component.html',
    styleUrls:['./libro.component.css']
})

export class LibroComponent {

    constructor(private librosService: LibrosService){}

    //Se crea el input colocando el tipo e inizializando,
    //es una variable que se utilizara en el codigo html y que obtendra su valor del componente padre
    @Input() tituloLibro: string = '';

    //Se crea un nuevo evento de EventEmitter para despues madarlo llamar en el metodo que va a emitir el evento
    @Output() eliminarLibro = new EventEmitter();

    //Metodo que emite hacia el padre
    onClicked(){
        //this.eliminarLibro.emit();
        this.librosService.eliminarLibro(this.tituloLibro);
    }


}
