import { OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { ConfirmacaoComponent } from "../paginas/confirmacao/confirmacao.component";

export class CrudListar implements OnInit, AfterViewInit {

    public dataSource = new MatTableDataSource<any>(); 

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns; 
    public tela;
  
    constructor(public us: any, public router: Router, public dialog: MatDialog) { 
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
  
    excluir(objeto: any) {
      this.us.setObjetoSelecionado(objeto);
      this.us.excluir(objeto).subscribe(
        (dados) => {
          this.atualizar();
        });
    }
  
    atualizar() {
      this.us.get().subscribe(
        (dados: any[]) => {
          this.dataSource.data = dados;
        }
      );
    }
  }