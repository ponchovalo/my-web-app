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
    if(this.usuario === ""){
      return
    }else{
      this.usuarios.push(this.usuario)
      this.usuario = '';
      console.log(this.usuarios)
    }
  }
}
