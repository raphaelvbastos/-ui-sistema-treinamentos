import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionarioresposta',
  templateUrl: './questionarioresposta.component.html',
  styleUrls: ['./questionarioresposta.component.css']
})
export class QuestionariorespostaComponent implements OnInit {

  questionario: any;
  listaQuestoes = new Array();
  totalAcertos = 0;
  percentual = 0;
  constructor(public cursoService: CursosService, public uni: UnidadesService, public usuService: AutenticacaoService, public objService: ObjetosService, public router: Router) { 
    this.questionario = this.objService.getObjetoSelecionado();
    this.questoesRespostas();
  }

  ngOnInit() {
  }

  questoesRespostas() {
    let logado = this.usuService.getUsuario();
    let listaQuestoes = new Array();
    let totalAcertos = 0;

    this.questionario.questoes.forEach(questao => {
      let obj = {
        "titulo": questao.pergunta,
        "respostaCerta": questao.alternativas.find(x => x.correta == true),
        "respostaAluno": questao.respostas.find(x => x.usuario._id == logado._id).resposta
      }

      listaQuestoes.push(obj);

      if(obj.respostaAluno.correta) {
        totalAcertos++;
      }
    });

    this.totalAcertos = totalAcertos;
    this.listaQuestoes = listaQuestoes;
    this.percentual = (totalAcertos/listaQuestoes.length) * 100;
  }

  marcarAlternativa(correta) {
    if(correta) {
      return "alternativaCorreta";
    }

    return "alternativaIncorreta";
  }

  refazer() {
    this.objService.setObjetoSelecionado(this.questionario);
    this.router.navigate(["/questionarioaluno"]);
  }

}
