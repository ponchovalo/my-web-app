import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MatDatepicker } from '@angular/material/datepicker';
import { BooksService } from './books.service';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Autor } from '../autores/autor.model';
import { AutoresService } from '../autores/autores.service';


@Component({
  selector: 'app-book-nuevo',
  templateUrl: './book-nuevo.component.html'
})
export class BookNuevoComponent implements OnInit{
  selectAutor?: string;
  selectAutorTexto: string = '';
  fechaPublicacion: string = '';
  @ViewChild(MatDatepicker) picker?: MatDatepicker<Date>;

  autores: Autor[] = [];

  constructor(private bookService: BooksService, private dialogRef: MatDialog, private autoresService: AutoresService){}

  ngOnInit(): void {
    //this.autores = this.autoresService.obtenerAutores();
  }

  selected(event: MatSelectChange | any){
    this.selectAutorTexto = (event.source.selected as MatOption).viewValue;
  }

  guardarLibro(form: NgForm){
    if(form.valid){
      this.bookService.guardarLibro({
        libroid: 1,
        titulo: form.value.titulo,
        descripcion: form.value.descripcion,
        autor: this.selectAutorTexto,
        precio: form.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion)
      });
      this.dialogRef.closeAll();
    }else{
      return
    }

  }

}
