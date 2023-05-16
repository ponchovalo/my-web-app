import { Component } from "@angular/core";

@Component({
    selector:'app-libros',
    templateUrl:'./libros.component.html'
})

export class LibrosComponent{

    libros: string[] = [];

    // onAgregarLibro(){
    //     this.libros.push(this.libroNvo);
    //     this.libroNvo = '';
    // }

    guardarLibro(f:any){
        if(f.valid){
            this.libros.push(f.value.nombreLibro)
        }else{
            console.log('no escribiste nada')
        }
    }

    elimLibro(libro:string){
        this.libros = this.libros.filter(p => p !== libro)
    }

}