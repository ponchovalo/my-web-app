import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosComponent } from './libros/libros.component';

import { LibrosService } from './services/libros.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { InicioComponent } from './inicio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';
import { SeguridadService } from './seguridad/seguridad.service';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';
import {BookNuevoComponent} from './books/book-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibroComponent,
    LibrosComponent,
    RegistrarComponent,
    LoginComponent,
    InicioComponent,
    BarraComponent,
    MenuListaComponent,
    BooksComponent,
    BookNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [LibrosService, SeguridadService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
