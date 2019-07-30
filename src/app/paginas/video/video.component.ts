import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { Subscription, of } from 'rxjs';
import { HttpRequest, HttpEventType, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, tap, last, catchError } from 'rxjs/operators';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { UploadService } from 'src/app/servicos/upload.service';

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

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService, public uni: UnidadesService, private _http: HttpClient, public uploadService: UploadService) {
    super(os, router, as, cursoService);
    this.objeto = this.video;
    this.nomeAPI = "cursos";
    this.tela = "/videos";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";

    this.as.permissaoAcesso("ADM", "Acesso Negado");

  }

  tituloPagina = "VIDEO";

  salvarNaUnidade() {
    if (this.uploadedFiles.length > 0) {
      this.objeto.url = "https://api-sistema-treinamento.herokuapp.com/arquivos/" + this.upload();
    }



    if (Object.keys(this.objeto).indexOf("_id") > -1) {
      let pos = this.uni.getObjetoSelecionado().videos.findIndex(x => x._id == this.objeto._id);

      this.uni.getObjetoSelecionado().videos.splice(pos, 1);
      this.uni.getObjetoSelecionado().videos.push(this.objeto);

      pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();
      // console.log(curso);

    } else {
      this.uni.getObjetoSelecionado().videos.push(this.objeto);
      let pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();
    }

    // this.os.nomeAPI = "cursos";
    // this.os.atualizar(this.objeto).subscribe(
    //   (dados) => {
    //     this.router.navigate([this.tela]);
    //   });


    // console.log(this.cursoService.getObjetoSelecionado());
    // console.log(this.uni.getObjetoSelecionado());
    console.log(this.objeto);
  }

  excluirNaUnidade(objeto) {
    let pos = this.uni.getObjetoSelecionado().videos.findIndex(x => x._id == objeto._id);
    this.uni.getObjetoSelecionado().videos.splice(pos, 1);

    pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

    this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
    this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

    console.log(this.cursoService.getObjetoSelecionado());

  }

  arquivo: any;

  uploadedFiles: Array<File>;
  cont: Array<any>;

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    
    let formData = new FormData();
    this.cont = new Array();

    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.cont.push(this.uploadedFiles[i].name);
      formData.append("nome", "AAAAAA");
      formData.append("upload", this.uploadedFiles[i], new Date().getTime() + this.uploadedFiles[i].name);
    }

    console.log(formData.get("upload"));
    this.uploadService.upload(formData).subscribe(
      (dados) => {
        return formData.get("upload")["name"];
        // this.router.navigate([this.tela]);
      });

    // console.log(formData.get("upload").name);

    // this.ts.upload(formData).subscribe(
    //   (dados) => {
    //     this.router.navigate(["/favorito"]);
    //   }
    // );
  }

}