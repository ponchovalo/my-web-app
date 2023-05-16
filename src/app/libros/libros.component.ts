import { Component } from "@angular/core";

@Component({
    selector:'app-libros',
    templateUrl:'./libros.component.html'
})

export class LibrosComponent{


    libroNvo = '';

    libros: string[] = [];

    onAgregarLibro(){
        this.libros.push(this.libroNvo);
        this.libroNvo = '';
    }

    elimLibro(libro:string){
        this.libros = this.libros.filter(p => p !== libro)
    }

}