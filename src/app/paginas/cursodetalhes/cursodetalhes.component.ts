import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicos/cursos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursodetalhes',
  templateUrl: './cursodetalhes.component.html',
  styleUrls: ['./cursodetalhes.component.css']
})
export class CursodetalhesComponent implements OnInit {

  curso: any;

  avaliacao = {
    "usuario": "",
    "nota": "",
    "comentario": ""
  };

  mostrarFormAvaliacao = true;

  constructor(public cursoService: CursosService, public sanitize: DomSanitizer, public usuService: AutenticacaoService, public uniService: UnidadesService, public objService: ObjetosService, public router: Router) {
    this.curso = this.cursoService.getObjetoSelecionado();
    console.log(this.curso);
  }

  ngOnInit() {
    this.curso = this.cursoService.getObjetoSelecionado();


    if(this.cursoService.getObjetoSelecionado().avaliacoes.length > 0) {
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
    this.cursoService.getObjetoSelecionado().avaliacoes.push(this.avaliacao);
    this.objService.nomeAPI = "cursos";
    this.objService.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
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
      this.objService.atualizar(curso);

      this.cursoService.setObjetoSelecionado(curso);
    }

    this.objService.nomeAPI = "videos";
    this.objService.setObjetoSelecionado(video);

    this.router.navigate(["/assistirvideo"]);
  }

}


