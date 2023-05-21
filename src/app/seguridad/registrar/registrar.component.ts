import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(private seguridadService: SeguridadService){}

  registrarUsuario(form:NgForm){
    this.seguridadService.registrarUsuario({
      email: form.value.email,
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      username: form.value.username,
      password:form.value.password,
      usuarioid: ''
    })
  }

}


