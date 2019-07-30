import { Component, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
// export class VideosComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



export class VideosComponent extends CrudListar {

  tituloPagina = "Lista de Videos";
  curso: any;

  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService, public cursoService: CursosService, public uni: UnidadesService) {
    super(us, router, dialog, cursoService);

    if(typeof this.uni.getObjetoSelecionado() != "undefined") {
      this.dadosSessao = this.uni.getObjetoSelecionado().videos;
    }
    

    this.curso = this.cursoService.getObjetoSelecionado();

    this.us.nomeAPI = "cursos";
    this.tela = "/video";
    this.displayedColumns = ['titulo', 'posicao', 'url', 'acoes'];
    this.cursoCampo = "unidades";


    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  excluirNaUnidade(objeto) {
    let pos = this.uni.getObjetoSelecionado().videos.findIndex(x => x._id == objeto._id);
    this.uni.getObjetoSelecionado().videos.splice(pos, 1);

    pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

    this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
    let unidade = this.uni.getObjetoSelecionado();
    this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

    this.us.nomeAPI = "cursos";
    this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
        this.atualizar();
      });

    // console.log(this.cursoService.getObjetoSelecionado());
  }

  abrirDialogo(objeto: any): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '300px',
      data: "Tem certeza que deseja excluir?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirNaUnidade(objeto);
      }
    });
  }

  // editarNoCurso(objeto: any) {
  //   this.us.setObjetoSelecionado(objeto);
  //   this.router.navigate([this.tela]);
  // }

  // editar(objeto: any) {
  //   this.us.setObjetoSelecionado(objeto);
  //   this.router.navigate([this.tela]);
  // }
 
}
