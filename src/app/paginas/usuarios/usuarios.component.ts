import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UsuariosDataSource } from './usuarios-datasource';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuariomodel';
import { UsuarioTipo } from 'src/app/modelos/usuariotipomodel';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';

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

  constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.us.getUsuarios().subscribe(
      (dados: any[]) => {
        this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        this.dataSource.data = dados;
      }
    );
  }

  openDialog(objeto: any): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '300px',
      data: "Tem certeza que deseja excluir?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(objeto);
      }
    });
  }

  atualizar() {
    this.us.getUsuarios().subscribe(
      (dados: any[]) => {
        this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        this.dataSource.data = dados;
      }
    );
  }

  mostrarTipo(objeto: UsuarioTipo) {
    if (typeof objeto != "undefined") {
      return objeto.tipo;
    }

    return "-";
  }

  editar(objeto: any) {
    this.us.setUsuarioSelecionado(objeto);
    this.router.navigate(["/usuario"]);
  }

  excluir(objeto: any) {
    this.us.setUsuarioSelecionado(objeto);
    this.us.excluirUsuario(objeto).subscribe(
      (dados) => {
        this.atualizar();
      });
  }

  // objetoParaString(objeto) {
  //   this.us.setUsuarioSelecionado(objeto);
  //   return JSON.stringify(objeto);
  // }
}
