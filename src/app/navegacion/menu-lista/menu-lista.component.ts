import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean | undefined;
  usuarioSubcription: Subscription | undefined;
  constructor(private seguridadService: SeguridadService){}

  ngOnInit(): void {
    this.usuarioSubcription = this.seguridadService.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status;
    });
  }

  onCerrarMenu(){
    this.menuToggle.emit();
  }

  cerrarSesionMenu(){
    this.onCerrarMenu()
    this.seguridadService.salirSesion();
  }

  ngOnDestroy(): void {
    this.usuarioSubcription?.unsubscribe();
  }
}
