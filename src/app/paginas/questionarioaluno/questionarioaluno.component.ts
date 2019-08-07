import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicos/cursos.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { UnidadesService } from 'src/app/servicos/unidades.service';

@Component({
  selector: 'app-questionarioaluno',
  templateUrl: './questionarioaluno.component.html',
  styleUrls: ['./questionarioaluno.component.css']
})
export class QuestionarioalunoComponent implements OnInit {

  questionario: any;
  respostas: any;
  valido = false;

  constructor(public cursoService: CursosService, public uni: UnidadesService, public usuService: AutenticacaoService, public objService: ObjetosService, public router: Router) {
    this.questionario = this.objService.getObjetoSelecionado();

    this.respostas = new Array();
    this.questionario.questoes.forEach(questao => {
      this.respostas[questao._id] = {
        "usuario": this.usuService.getUsuario(),
        "resposta": {}
      }

    });
  }

  ngOnInit() {
    this.questionario = this.objService.getObjetoSelecionado();
  }

  enviar() {
    this.questionario.questoes.forEach(questao => {
      let resposta = this.respostas[questao._id];

      let pos = questao.respostas.findIndex(x => x.usuario._id == resposta.usuario._id);
      if (pos > -1) {
        questao.respostas.splice(pos, 1);
      }
      questao.respostas.push(resposta);
    });


    let curso = this.cursoService.getObjetoSelecionado();

    curso.unidades.forEach(unidade => {
      let pos = unidade.questionarios.indexOf(vi => vi._id == this.questionario._id);
      if (pos > -1) {
        unidade.questionarios.splice(pos, 1);
        unidade.questionarios.push(this.questionario);
      }
    });

    // this.objService.nomeAPI = "cursos";
    this.objService.atualizar(curso).subscribe((dados) => {
      this.cursoService.setObjetoSelecionado(curso);

      this.objService.setObjetoSelecionado(this.questionario);

      this.router.navigate(["/questionarioresposta"]);
    });
  }

  validar() {
    let ok = true;

    for (const key in this.respostas) {
      if (this.respostas.hasOwnProperty(key)) {
        const element = this.respostas[key];
        console.log(element.resposta);
        if(typeof element.resposta.alternativa == "undefined") {
          ok = false;
        }
      }
    }

    this.valido = ok;
    
  }

  ultimaTentativa() {
    this.objService.setObjetoSelecionado(this.questionario);
    this.router.navigate(["/questionarioresposta"]);
  }

}
