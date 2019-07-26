import { OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { ConfirmacaoComponent } from "../paginas/confirmacao/confirmacao.component";
import { CursosService } from "../servicos/cursos.service";

export class CrudListar implements OnInit, AfterViewInit {

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns;
  public tela;
  public dadosSessao = null;
  cursoCampo: string;

  constructor(public us: any, public router: Router, public dialog: MatDialog, public cursoService?: CursosService) {
  }

  ngOnInit() {
    this.atualizar();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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

  mostrarTipo(objeto: any) {
    if (typeof objeto != "undefined") {
      return objeto.tipo;
    }

    return "-";
  }

  editar(objeto: any) {
    this.us.setObjetoSelecionado(objeto);
    this.router.navigate([this.tela]);
  }

  novo(curso: any, tela: string) {
    this.cursoService.setObjetoSelecionado(curso);
    this.us.setObjetoSelecionado(null);
    this.router.navigate([tela]);
  }


  excluir(objeto: any) {
    this.us.setObjetoSelecionado(objeto);


    if (typeof this.cursoService != "undefined") {

      let curso = this.cursoService.getObjetoSelecionado();
      let pos = curso[this.cursoCampo].findIndex(x => x._id == objeto._id);
      curso[this.cursoCampo].splice(pos, 1);

      objeto = curso;

      this.us.atualizar(objeto).subscribe(
        (dados) => {
          this.atualizar();
        });
    } else {
      this.us.excluir(objeto).subscribe(
        (dados) => {
          this.atualizar();
        });
    }

  }

  atualizar() {
    if (this.dadosSessao == null) {
      this.us.get().subscribe(
        (dados: any[]) => {
          this.dataSource.data = dados;
        }
      );
    } else {
      this.dataSource.data = this.dadosSessao;
    }

  }
}