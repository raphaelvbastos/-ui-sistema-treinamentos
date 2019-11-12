import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { RelatoriosService } from 'src/app/servicos/relatorios.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  usuario: any;
  cursos = new Array();
  cursosInscritos = new Array();
  listaCursos = new Array();


  constructor(public us: RelatoriosService, public os: ObjetosService) {
    this.usuario = this.us.getObjetoSelecionado();

    this.os.nomeAPI = "cursos";
    this.os.get().subscribe((dados) => {
      this.cursos = dados;

      this.montar();
    })
  }

  montar() {
    this.cursosInscritos = this.cursos.filter(x => x.inscricoes.findIndex(y => y.usuario._id == this.usuario._id) > -1);

    this.cursosInscritos.forEach(curso => {
      let relusuario = {
        "curso": "",
        "status": "",
        "videos": "",
        "aproveitamento": "",
        "gerouCertificado": "",
        "questionarios": []
      }
      relusuario.curso = curso.titulo;
      let insc = curso.inscricoes.find(y => y.usuario._id == this.usuario._id);
      relusuario.status = (insc.aprovado) ? "APROVADO" : "REPROVADO";
      relusuario.videos = insc.percentualAndamento;
      relusuario.aproveitamento = insc.percentualAcertos;
      relusuario.gerouCertificado = (insc.gerouCertificado) ? "SIM" : "NÃO";

      let listaQuestoes = new Array();
      let totalVideos = 0;
      let totalAssistidos = 0;
      let aprovadoQuestionarios = true;
      let aprovado = false;

      curso.unidades.forEach(unidade => {
        unidade.questionarios.forEach(questionario => {
          let quest = {
            "titulo": questionario.titulo,
            "questoes": 0,
            "corretas": 0,
            "aproveitamento": 0
          };
          questionario.questoes.forEach(questao => {

            questao.respostas.forEach(resposta => {
              if (resposta.usuario._id == this.usuario._id) {
                if (resposta.resposta.correta) {
                  quest.corretas++;
                }
              }
            });
          });

          quest.questoes = questionario.questoes.length;
          quest.aproveitamento = parseInt("" + (quest.corretas / quest.questoes) * 100);

          if(quest.aproveitamento < 70) {
            aprovadoQuestionarios = false;
          }

          relusuario.questionarios.push(quest);
          listaQuestoes.push(quest);
        });

        unidade.videos.forEach(video => {
          if(typeof video.vistoPor.find(y => y._id == this.usuario._id) != "undefined") {
            totalAssistidos++;
          }
        });

        totalVideos += unidade.videos.length;
      });

      if(totalAssistidos > 0) {
        let total = (totalAssistidos/totalVideos) * 100;
        relusuario.videos = "" + parseInt(total+"");
        
        if((totalAssistidos/totalVideos * 100) >= 70 && aprovadoQuestionarios) {
          aprovado = true;
        }
      } else {
        relusuario.videos = "0";
      }

      relusuario.status = (aprovado) ? "APROVADO" : "REPROVADO";
      

      // console.log(this.cursosInscritos);
      // console.log(totalVideos);
      // console.log(totalAssistidos);
      // console.log(relusuario);

      this.listaCursos.push(relusuario);
    });
  }

  definirEstilo(dado) {
    let classe = "";
    if (dado == "APROVADO" || dado == "SIM" || parseFloat(dado) >= 70) {
      classe = "relStatusAprovado";
    } else {
      classe = "relStatusReprovado";
    }

    return classe;
  }

  ngOnInit() {
  }

}
