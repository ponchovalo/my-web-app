import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean | undefined;
  usuarioSubcription: Subscription | undefined

  constructor(private seguridadService: SeguridadService){}

  ngOnInit(): void {
    this.usuarioSubcription = this.seguridadService.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status;
    });
  }

  cerrarSesion(){
    this.seguridadService.salirSesion();
  }


  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.usuarioSubcription?.unsubscribe();
  }

}
