import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UsuariosDataSource } from './usuarios-datasource';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuariomodel';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsuariosDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'email', 'tipo', 'editar', 'excluir'];

  constructor(public us: UsuariosService, public router: Router) {
  }

  ngOnInit() {
    this.us.getUsuarios().subscribe(
      (dados: any[]) => {
        this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        this.dataSource.data = dados;
      }
    );  
  }

  editar(objeto: any) {
    this.us.setUsuarioSelecionado(objeto);
    this.router.navigate(["/usuario"]);
  }

  excluir(id: string) {
    console.log(id);
  }

  // objetoParaString(objeto) {
  //   this.us.setUsuarioSelecionado(objeto);
  //   return JSON.stringify(objeto);
  // }
}
