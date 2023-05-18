import { Component, OnInit, OnDestroy } from "@angular/core";
import { LibrosService } from "../services/libros.service";
import { Subscription } from "rxjs";

@Component({
    selector:'app-libros',
    templateUrl:'./libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy{

  libros:any = [];
  //Agregamos el servicio en el contructor
  //En el constructor no se debe incluir manejo de DATA
  constructor(private libroService: LibrosService){}
  private libroSubscription: Subscription = new Subscription;

  ngOnInit(){
    this.libros = this.libroService.obtenerLibros();
    this.libroSubscription = this.libroService.librosSubject.subscribe( () => {
      this.libros = this.libroService.obtenerLibros();
    })
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

  guardarLibro(f:any){
      if(f.valid){
          this.libroService.agregarLibro(f.value.nombreLibro);
          f.reset();
      }else{
          console.log('no escribiste nada')
          f.reset();
      }
  }

  elimLibro(libro:string){

  }

}
