import { Component, OnInit } from '@angular/core';
import { Autor } from './autor.model';
import { AutoresService } from './autores.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit{

  displayedColumns = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private autoresService: AutoresService){}


  ngOnInit(): void {
    this.autoresService.obtenerAutores();
    this.autoresService.obtenerActualListener()
      .subscribe((autores: Autor[]) => {
        this.dataSource.data = autores;
      });
  }


}
