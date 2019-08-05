import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistirvideo',
  templateUrl: './assistirvideo.component.html',
  styleUrls: ['./assistirvideo.component.css']
})
export class AssistirvideoComponent implements OnInit {

  video: any;
  exibirTagVideo = false;
  exibirTagEmbebed = false;

  constructor(public sanitize: DomSanitizer, public os: ObjetosService, public router: Router) { 
    this.video = this.os.getObjetoSelecionado();
    this.exibirVideo(this.video.url);
  }

  ngOnInit() {
    this.video = this.os.getObjetoSelecionado();
    this.exibirVideo(this.video.url);
  }

  sanitizarURL(url) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }


  exibirVideo(url) {
    if (url.indexOf("https://api-sistema-treinamento.herokuapp") > - 1 || url.indexOf("http://localhost") > - 1) {
      this.exibirTagVideo = true;
      this.exibirTagEmbebed = false;
    } else {
      this.exibirTagVideo = false;
      this.exibirTagEmbebed = true;
    }
  }

  voltar() {
    this.router.navigate(["/cursodetalhes"]);
  }
}
