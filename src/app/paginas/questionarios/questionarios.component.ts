import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';
import { QuestionariosService } from 'src/app/servicos/questionarios.service';

@Component({
  selector: 'app-questionarios',
  templateUrl: './questionarios.component.html',
  styleUrls: ['./questionarios.component.css']
})

export class QuestionariosComponent extends CrudListar {

  tituloPagina = "Lista de Questionários";
  curso: any;

  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService, 
    public cursoService: CursosService, public uni: UnidadesService, public quest: QuestionariosService) {
    super(us, router, dialog, cursoService);

    if(typeof this.uni.getObjetoSelecionado() != "undefined") {
      this.dadosSessao = this.uni.getObjetoSelecionado().questionarios;
    }
    

    this.curso = this.cursoService.getObjetoSelecionado();

    this.us.nomeAPI = "cursos";
    this.tela = "/questionario";
    this.displayedColumns = ['titulo', 'questoes', 'posicao', 'acoes'];
    this.cursoCampo = "unidades";


    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  excluirNaUnidade(objeto) {
    let pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == objeto._id);
    this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);

    pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

    this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
    let unidade = this.uni.getObjetoSelecionado();
    this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

    this.us.nomeAPI = "cursos";
    this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
        this.atualizar();
      });
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

  questoes(questionario) {
    this.quest.setObjetoSelecionado(questionario);
    this.router.navigate(["/questoes"]);
  }
}