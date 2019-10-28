import { Component, OnInit } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { QuestionariosService } from 'src/app/servicos/questionarios.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})

export class QuestionarioComponent extends Crudobjeto {

  questionario = {
    "titulo": "",
    "posicao": 0,
    "questoes": []
    };


  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService, 
      public uni: UnidadesService, public quest?: QuestionariosService) {
    super(os, router, as, cursoService);
    this.objeto = this.questionario;
    this.nomeAPI = "cursos";
    this.tela = "/questionarios";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";
    this.as.permissaoAcesso("ADM", "Acesso Negado");   
  }

  tituloPagina = "ARQUIVO";

  
  salvarNaUnidade() {

    if (Object.keys(this.objeto).indexOf("_id") > -1) {
      let pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == this.objeto._id);


      this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
      this.uni.getObjetoSelecionado().questionarios.push(this.objeto);

      pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();

    } else {
      this.uni.getObjetoSelecionado().questionarios.push(this.objeto);
      let pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();
    }

    this.os.nomeAPI = "cursos";
    this.os.atualizar(this.objeto).subscribe(
      (x) => {
        this.os.getObjeto(this.cursoService.getObjetoSelecionado()._id).subscribe(
          (dados) => {
            this.cursoService.setObjetoSelecionado(dados);
            this.router.navigate([this.tela]);
          }
        )
      });
  }
}