import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-libro',
    templateUrl:'./libro.component.html'
})

export class LibroComponent {

    @Input() tituloLibro: string = '';
    
    @Output() eliminarLibro = new EventEmitter();

    onClicked(){
        this.eliminarLibro.emit();
    }


}