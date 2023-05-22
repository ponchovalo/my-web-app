import { HttpClient } from "@angular/common/http";
import { Autor } from "./autor.model";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environments";
import { Subject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoresService{

  baseUrl = environment.baseUrl;
  private autoresLista: Autor[] = [];
  private autoresSubject = new Subject<Autor[]>;

  constructor(private http: HttpClient){}

  obtenerAutores(){
    this.http.get<Autor[]>(this.baseUrl + 'api/libreriaautor')
    .subscribe((data:Autor[]) => {
      this.autoresLista = data;
      this.autoresSubject.next([...this.autoresLista]);
    });
  }
  obtenerActualListener(){
    return this.autoresSubject.asObservable();
  }

}
