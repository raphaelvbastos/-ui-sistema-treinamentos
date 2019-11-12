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
          quest.aproveitamento = (quest.corretas / quest.questoes) * 100;

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
        relusuario.videos = "" + (totalAssistidos/totalVideos) * 100;
      } else {
        relusuario.videos = "0";
      }

      

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
