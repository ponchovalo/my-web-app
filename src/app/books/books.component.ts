import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {BookNuevoComponent} from './book-nuevo.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  bookData: Books[] = [];

  displayedColumns = ['titulo', 'descripcion', 'autor', 'precio'];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordenamiento!: MatSort;
  @ViewChild(MatPaginator) paginacion!: MatPaginator;

  constructor(private bookService: BooksService, private dialog: MatDialog){}

  hacerfiltro(filtro: any){
    this.dataSource.filter = filtro.value;
  }

  openDialog(){
    this.dialog.open(BookNuevoComponent);
  }


  ngOnInit(): void {
    this.dataSource.data = this.bookService.obtenerLibros();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.paginacion;
  }





}
