import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SeguridadRouter {

  constructor(private seguridadService: SeguridadService, private router: Router){};

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.seguridadService.onSesion()){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
