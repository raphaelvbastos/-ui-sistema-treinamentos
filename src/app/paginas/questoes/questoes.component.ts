import { Component, OnInit } from '@angular/core';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { QuestionariosService } from 'src/app/servicos/questionarios.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';
import { QuestoesService } from 'src/app/servicos/questoes.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
// export class QuestoesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class QuestoesComponent extends CrudListar {

  tituloPagina = "Lista de Questões";
  curso: any;

  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService, 
    public cursoService: CursosService, public uni: UnidadesService, public quest: QuestionariosService, public questao: QuestoesService) {
    super(us, router, dialog, cursoService);

    if(typeof this.quest.getObjetoSelecionado() != "undefined") {
      this.dadosSessao = this.quest.getObjetoSelecionado().questoes;
    }
    

    this.curso = this.cursoService.getObjetoSelecionado();

    this.us.nomeAPI = "cursos";
    this.tela = "/questao";
    this.displayedColumns = ['pergunta', 'alternativas', 'acoes'];
    this.cursoCampo = "unidades";


    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  excluirNaUnidade(objeto) {
    // localizar a questao no array de questoes do questionario
    let pos = this.quest.getObjetoSelecionado().questoes.findIndex(x => x._id == objeto._id);
    this.quest.getObjetoSelecionado().questoes.splice(pos, 1);

    // localizar o questionario na unidade
    pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == this.quest.getObjetoSelecionado()._id);
    this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
    this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());

    // localizar unidade no curso
    pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);
    this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
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

  alternativas(questao) {
    this.questao.setObjetoSelecionado(questao);
    this.router.navigate(["/alternativas"]);
  }
}
