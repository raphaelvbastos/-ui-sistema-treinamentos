import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { UsuariosDataSource } from './usuarios-datasource';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuariomodel';
import { UsuarioTipo } from 'src/app/modelos/usuariotipomodel';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';
import { extend } from 'webdriver-js-extender';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { MensagemService } from 'src/app/servicos/mensagem.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
// export class UsuariosComponent implements OnInit {
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   dataSource: UsuariosDataSource;


//   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
//   displayedColumns = ['nome', 'email', 'tipo', 'editar', 'excluir'];

//   constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog) {
//   }

//   ngOnInit() {
//     this.us.getUsuarios().subscribe(
//       (dados: any[]) => {
//         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
//         this.dataSource.data = dados;
//         this.dataSource.sort = this.sort;
//       }
//     );
//   }

//   ngAfterViewInit(): void {
//     this.us.getUsuarios().subscribe(
//       (dados: any[]) => {
//         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
//         this.dataSource.data = dados;
//         this.dataSource.sort = this.sort;
//       }
//     );
//   }

//   openDialog(objeto: any): void {
//     const dialogRef = this.dialog.open(ConfirmacaoComponent, {
//       width: '300px',
//       data: "Tem certeza que deseja excluir?"
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.excluir(objeto);
//       }
//     });
//   }

//   atualizar() {
//     this.us.getUsuarios().subscribe(
//       (dados: any[]) => {
//         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
//         this.dataSource.data = dados;
//       }
//     );
//   }

//   mostrarTipo(objeto: UsuarioTipo) {
//     if (typeof objeto != "undefined") {
//       return objeto.tipo;
//     }

//     return "-";
//   }

//   editar(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.router.navigate(["/usuario"]);
//   }

//   excluir(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.us.excluirUsuario(objeto).subscribe(
//       (dados) => {
//         this.atualizar();
//       });
//   }



//   public doFilter = (value: string) => {
//     this.dataSource.filter = value.trim().toLocaleLowerCase();
//   }

// }




export class UsuariosComponent extends CrudListar {
  tituloPagina = "Lista de usuários";
  constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService) {
    super(us, router, dialog);
    this.tela = "/usuario";
    this.displayedColumns = ['nome', 'email', 'tipo', 'acoes'];

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }
}



// export class UsuariosComponent implements OnInit, AfterViewInit {

//   public displayedColumns = ['nome', 'email', 'tipo', 'acoes'];
//   public dataSource = new MatTableDataSource<Usuario>(); 

//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog) { }

//   ngOnInit() {
//     this.atualizar();
//   }

//   ngAfterViewInit(): void {
//      this.dataSource.sort = this.sort;
//      this.dataSource.paginator = this.paginator;
//   }

//   public doFilter = (value: string) => {
//     this.dataSource.filter = value.trim().toLocaleLowerCase();
//   }

//   openDialog(objeto: any): void {
//     const dialogRef = this.dialog.open(ConfirmacaoComponent, {
//       width: '300px',
//       data: "Tem certeza que deseja excluir?"
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.excluir(objeto);
//       }
//     });
//   }

//   mostrarTipo(objeto: UsuarioTipo) {
//     if (typeof objeto != "undefined") {
//       return objeto.tipo;
//     }

//     return "-";
//   }

//   editar(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.router.navigate(["/usuario"]);
//   }

//   excluir(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.us.excluirUsuario(objeto).subscribe(
//       (dados) => {
//         this.atualizar();
//       });
//   }

//   atualizar() {
//     this.us.getUsuarios().subscribe(
//       (dados: any[]) => {
//         this.dataSource.data = dados;
//       }
//     );
//   }
// }
