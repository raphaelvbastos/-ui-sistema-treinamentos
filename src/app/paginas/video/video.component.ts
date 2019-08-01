import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { Subscription, of } from 'rxjs';
import { HttpRequest, HttpEventType, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { UploadService } from 'src/app/servicos/upload.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})


export class VideoComponent extends Crudobjeto {

  video = {
    "titulo": "",
    "url": "",
    "posicao": 0,
    "vistoPor": []
  };

  arquivo: any;
  uploadedFiles: Array<File>;
  cont: Array<any>;
  nomeArquivo = "";
  exibirTagVideo = false;
  exibirTagEmbebed = false;

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService, 
      public uni: UnidadesService, private _http: HttpClient, public uploadService: UploadService, public sanitize: DomSanitizer) {
    super(os, router, as, cursoService);
    this.objeto = this.video;
    this.nomeAPI = "cursos";
    this.tela = "/videos";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";
    this.uploadedFiles = new Array();
    this.as.permissaoAcesso("ADM", "Acesso Negado");   
  }

  tituloPagina = "VIDEO";

  sanitizarURL(url) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
  
  salvarNaUnidade() {
    if (this.uploadedFiles.length > 0) {
      this.objeto.url = "https://api-sistema-treinamento.herokuapp.com/download/" + this.upload();
    }

    if (Object.keys(this.objeto).indexOf("_id") > -1) {
      let pos = this.uni.getObjetoSelecionado().videos.findIndex(x => x._id == this.objeto._id);

      this.uni.getObjetoSelecionado().videos.splice(pos, 1);
      this.uni.getObjetoSelecionado().videos.push(this.objeto);

      pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();

    } else {
      this.uni.getObjetoSelecionado().videos.push(this.objeto);
      let pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();
    }

    this.os.nomeAPI = "cursos";
    this.os.atualizar(this.objeto).subscribe(
      (dados) => {
        this.router.navigate([this.tela]);
      });
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    this.nomeArquivo = element.target.files[0].name;
  }

  upload() {
    let formData = new FormData();
    this.cont = new Array();
    let nome = "";

    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.cont.push(this.uploadedFiles[i].name);
      formData.append("upload", this.uploadedFiles[i], new Date().getTime() + this.uploadedFiles[i].name);
      nome = formData.get("upload")["name"];
    }

    this.uploadService.upload(formData).subscribe(
      (dados) => {
        nome = formData.get("upload")["name"];
      });

      return nome;
  }

}