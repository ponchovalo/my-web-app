import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import {LoginData} from './login_data.model'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SeguridadService {
  seguridadCambio = new Subject<boolean>();
  private usuario!: Usuario | null;

  constructor(private router: Router){}

  registrarUsuario(usr:Usuario){
    this.usuario = {
      email: usr.email,
      usuarioid: Math.round(Math.random() * 10000).toString(),
      nombre: usr.nombre,
      apellido: usr.apellido,
      username: usr.username,
      password:usr.password
    };
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);

  }

  login(loginData: LoginData){
    this.usuario = {
      email: loginData.email,
      usuarioid: Math.round(Math.random() * 10000).toString(),
      nombre: '',
      apellido: '',
      username: '',
      password: loginData.password
    };
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  salirSesion(){
    this.usuario = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['/login']);
  }

  obtenerUsuario(){
    return {...this.usuario};
  }

  onSesion(){
    return this.usuario != null;
  }

}
