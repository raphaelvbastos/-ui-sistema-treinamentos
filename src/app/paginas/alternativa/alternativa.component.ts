import { Component, OnInit } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { QuestionariosService } from 'src/app/servicos/questionarios.service';
import { QuestoesService } from 'src/app/servicos/questoes.service';

@Component({
  selector: 'app-alternativa',
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.css']
})

export class AlternativaComponent extends Crudobjeto {

  alternativa = {
    "alternativa": "",
    "correta": false
  };

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService,
    public uni: UnidadesService, public quest: QuestionariosService, public questao: QuestoesService) {
    super(os, router, as, cursoService);
    this.objeto = this.alternativa;
    this.nomeAPI = "cursos";
    this.tela = "/alternativas";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";
    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  tituloPagina = "Questão";


  salvarNaUnidade() {
    console.log(this.cursoService.getObjetoSelecionado());
    console.log(this.uni.getObjetoSelecionado());
    console.log(this.quest.getObjetoSelecionado());
    console.log(this.questao.getObjetoSelecionado());
    console.log(this.objeto);

    if (Object.keys(this.objeto).indexOf("_id") > -1) {

      // localizar a alternativa no array de alternativas do questionario
      let pos = this.questao.getObjetoSelecionado().alternativas.findIndex(x => x._id == this.objeto._id);

      if (pos > -1) {
        this.questao.getObjetoSelecionado().alternativas.splice(pos, 1);
        this.questao.getObjetoSelecionado().alternativas.push(this.objeto);
      }


      // localizar a questao no array de questoes do questionario
      pos = this.quest.getObjetoSelecionado().questoes.findIndex(x => x._id == this.questao.getObjetoSelecionado()._id);
      this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
      this.quest.getObjetoSelecionado().questoes.push(this.questao.getObjetoSelecionado());


      // localizar o questionario na unidade
      pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == this.quest.getObjetoSelecionado()._id);
      this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
      this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());

      // localizar unidade no curso
      pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);
      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      // this.objeto = this.cursoService.getObjetoSelecionado();

    } else {
      let pos = this.questao.getObjetoSelecionado().alternativas.findIndex(x => x.alternativa == this.objeto.alternativa);

      if(pos == -1) {
        this.questao.getObjetoSelecionado().alternativas.push(this.objeto);

        // localizar a questao no array de questoes do questionario
        let pos = this.quest.getObjetoSelecionado().questoes.findIndex(x => x._id == this.questao.getObjetoSelecionado()._id);
        this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
        this.quest.getObjetoSelecionado().questoes.push(this.questao.getObjetoSelecionado());
  
        // localizar o questionario na unidade
        pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == this.quest.getObjetoSelecionado()._id);
        this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
        this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
  
        // localizar unidade no curso
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
      }
      // this.objeto = this.cursoService.getObjetoSelecionado();
    }

    console.log(this.cursoService.getObjetoSelecionado());

    this.os.nomeAPI = "cursos";
    this.os.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
        this.router.navigate([this.tela]);
      });
  }
}

