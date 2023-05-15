import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarios = ['Luis', 'Fernando', 'Maria']

  usuario = ''

  onAgregarUsuario(){
    this.usuarios.push(this.usuario)
    this.usuario = '';
  }

}
