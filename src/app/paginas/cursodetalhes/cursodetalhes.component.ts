import { Component, OnInit, Input } from '@angular/core';
import { CursosService } from 'src/app/servicos/cursos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { Inscricaomodel } from 'src/app/modelos/inscricaomodel';
import * as jsPDF from 'jspdf';
import { Certificado } from 'src/app/modelos/certificado';


@Component({
  selector: 'app-cursodetalhes',
  templateUrl: './cursodetalhes.component.html',
  styleUrls: ['./cursodetalhes.component.css']
})
export class CursodetalhesComponent implements OnInit {

  @Input('rating') rating: number;
  @Input('starCount') starCount: number;
  @Input('color') color: string;

  curso: any;

  podeGerarCertificado = false;

  starColor = "primary";

  avaliacao = {
    "usuario": "",
    "nota": 0,
    "comentario": ""
  };

  mostrarFormAvaliacao = true;
  inscritoCurso = false;

  c = new Certificado();

  constructor(public cursoService: CursosService, public sanitize: DomSanitizer, public usuService: AutenticacaoService, public uniService: UnidadesService, public objService: ObjetosService, public router: Router) {
    // this.curso = this.cursoService.getObjetoSelecionado();

    this.starCount = 5;
    this.rating = 3;
    this.color = "primary";

    this.inicializar();


    // let cursoAtualizado = this.c.verificarConclusao(this.cursoService.getObjetoSelecionado(), this.usuService.getUsuario());

    // this.objService.nomeAPI = "cursos";
    // this.objService.atualizar(cursoAtualizado).subscribe(
    //   (dados) => {
    //     this.cursoService.setObjetoSelecionado(cursoAtualizado);
    //   });
  }

  ngOnInit() {
    // this.curso = this.cursoService.getObjetoSelecionado();
    // let logado = this.usuService.getUsuario();

    // let inscrito = false;

    // if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(x => x.usuario._id == logado._id) > -1) {
    //   inscrito = true;
    // } else {
    //   inscrito = false;
    // }

    // if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id) == -1) {
    //   this.mostrarFormAvaliacao = true;
    // } else {
    //   this.mostrarFormAvaliacao = false;
    // }

    this.inicializar();




    // let pos = this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id);

    // if(pos > -1) {
    //   this.mostrarFormAvaliacao = false;
    // } else {
    //   this.mostrarFormAvaliacao = true;
    // }



    // if(this.cursoService.getObjetoSelecionado().avaliacoes.length > 0) {
    //   this.mostrarFormAvaliacao = false;
    // }
  }


  inicializar() {
    this.curso = this.cursoService.getObjetoSelecionado();
    let logado = this.usuService.getUsuario();

    let inscrito = false;

    if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(x => x.usuario._id == logado._id) > -1) {
      inscrito = true;
    } else {
      inscrito = false;
    }

    this.inscritoCurso = inscrito;

    if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id) == -1) {
      this.mostrarFormAvaliacao = true;
    } else {
      this.mostrarFormAvaliacao = false;
    }

    if (inscrito) {
      let cursoAtualizado = this.c.verificarConclusao(this.cursoService.getObjetoSelecionado(), this.usuService.getUsuario());

      this.objService.nomeAPI = "cursos";
      this.objService.atualizar(cursoAtualizado).subscribe(
        (dados) => {
          this.cursoService.setObjetoSelecionado(cursoAtualizado);
        });

      let insc = cursoAtualizado.inscricoes.find(x => x.usuario._id == logado._id);

      this.podeGerarCertificado = insc.aprovado;
    }

  }

  mostrarFormComentario() {
    let inscrito = false;
    let logado = this.usuService.getUsuario();

    if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(x => x.usuario._id == logado._id) > -1) {
      inscrito = true;
    } else {
      inscrito = false;
    }

    if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id) == -1) {
      this.mostrarFormAvaliacao = true;
    } else {
      this.mostrarFormAvaliacao = false;
    }
  }

  sanitizarURL(url) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

  exibirVideo(url) {
    if (url.indexOf("https://api-sistema-treinamento.herokuapp") > - 1 || url.indexOf("http://localhost") > - 1) {
      return true;
    }

    return false;
  }

  exibirTagEmbebed(url) {
    if (url.indexOf("https://api-sistema-treinamento.herokuapp") > - 1 || url.indexOf("http://localhost") > - 1) {
      return false;
    }

    return true;
  }

  salvarAvaliacao() {
    this.avaliacao.usuario = this.usuService.getUsuario();
    this.avaliacao.nota = this.rating;

    this.cursoService.getObjetoSelecionado().avaliacoes.push(this.avaliacao);
    this.objService.nomeAPI = "cursos";
    this.objService.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
        this.mostrarFormAvaliacao = false;
        this.cursoService.setObjetoSelecionado(this.cursoService.getObjetoSelecionado());
      });
  }

  assistirVideo(video) {
    if (video.vistoPor.findIndex(x => x._id == this.usuService.getUsuario()._id) == -1) {
      video.vistoPor.push(this.usuService.getUsuario());

      let curso = this.cursoService.getObjetoSelecionado();

      curso.unidades.forEach(unidade => {
        let pos = unidade.videos.indexOf(vi => vi._id == video._id);
        if (pos > -1) {
          unidade.videos.splice(pos, 1);
          unidade.videos.push(video);
        }
      });

      this.objService.nomeAPI = "cursos";
      this.objService.atualizar(curso).subscribe((dados) => {
        this.cursoService.setObjetoSelecionado(curso);
      });
    }

    this.objService.nomeAPI = "videos";
    this.objService.setObjetoSelecionado(video);

    this.router.navigate(["/assistirvideo"]);
  }

  onRatingChanged(rating) {
    this.rating = rating;
  }

  inscritoNoCurso() {
    let logado = this.usuService.getUsuario();
    if (this.curso.inscricoes.findIndex(x => x.usuario._id == logado._id) > -1) {
      return true;
    }
    return false;
  }

  inscrever() {
    let inscricao = new Inscricaomodel();

    let curso = this.cursoService.getObjetoSelecionado();

    inscricao.usuario = this.usuService.getUsuario();

    curso.inscricoes.push(inscricao);

    this.objService.nomeAPI = "cursos";
    this.objService.atualizar(curso).subscribe(
      (dados) => {
        this.mostrarFormComentario();
        this.curso = curso;
      });
  }

  desinscrever() {
    let curso = this.cursoService.getObjetoSelecionado();
    let usuario = this.usuService.getUsuario();

    return (curso.inscricoes.find(x => x.usuario._id == usuario._id) != null);
  }

  sairCurso() {
    let curso = this.cursoService.getObjetoSelecionado();
    let usuario = this.usuService.getUsuario();
    let pos = curso.inscricoes.findIndex(x => x.usuario._id == usuario._id)
    curso.inscricoes.splice(pos, 1);

    this.objService.nomeAPI = "cursos";
    this.objService.atualizar(curso).subscribe(
      (dados) => {
        this.mostrarFormComentario();
        this.curso = curso;
      });

  }

  questionario(q) {
    this.objService.setObjetoSelecionado(q);
    this.router.navigate(["/questionarioaluno"]);
  }

  gerarPDF() {
    let curso = this.cursoService.getObjetoSelecionado();
    let usuario = this.usuService.getUsuario();

    let insc = curso.inscricoes.find(x => x.usuario._id == usuario._id);

    if (insc != null) {
      insc.gerouCertificado = true;

      let pos = curso.inscricoes.findIndex(x => x.usuario._id == usuario._id)
      curso.inscricoes.splice(pos, 1);
      curso.inscricoes.push(insc);

      this.objService.nomeAPI = "cursos";
      this.objService.atualizar(curso).subscribe(
        (dados) => {

          let documento = new jsPDF();
          documento.setFont("Courier");
          documento.setFontStyle("bold");
          documento.setFontSize(20);
          documento.text("CERTIFICADO DE PARTICIPAÇÃO", 50, 15);

          documento.setFontStyle("bold");
          documento.text(usuario.nome, 60, 30);

          documento.setFontSize(12);
          documento.text("finalizou o curso de " + curso.titulo + ", assistindo todos os videos e com " + insc.percentualAcertos + "% de", 10, 45);
          documento.text("aproveitamento nos exercicios.", 10, 55);
          documento.text("SISTREN - Sistema de treinamento on-line", 50, 80);

          documento.output("dataurlnewwindow");

        });
    }

    // let documento = new jsPDF();
    // documento.text("Relatório em PDF no Angular", 10, 10);
    // documento.output("dataurlnewwindow");


    // documento.setFillColor(50, 50, 50);
    // documento.rect(10, 20, 30, 8, "FD");
    // documento.rect(10, 28, 30, 8, "FD");
    // documento.rect(10, 36, 30, 8, "FD");
    // // documento.rect(40, 20, 160, 8, "s");
    // // documento.rect(40, 28, 160, 8, "s");
    // // documento.rect(40, 36, 160, 8, "s");

    // documento.setFontSize(12);
    // documento.setTextColor(255, 255, 255);
    // documento.text("Código", 12, 25);
    // documento.text("Nome", 12, 33);
    // documento.text("Preço", 12, 41);

    // documento.setFontStyle("normal");
    // documento.setTextColor(0, 0, 0);
    // documento.text("001", 42, 25);
    // documento.text("Notebook 14' i7 8GB 1TB", 42, 33);
    // documento.text("R$ 2400,00", 42, 41);


  }
}

enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}


