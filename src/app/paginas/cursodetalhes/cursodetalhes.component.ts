import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicos/cursos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cursodetalhes',
  templateUrl: './cursodetalhes.component.html',
  styleUrls: ['./cursodetalhes.component.css']
})
export class CursodetalhesComponent implements OnInit {

  curso: any;

  constructor(public cursoService: CursosService, public sanitize: DomSanitizer) {
    this.curso = this.cursoService.getObjetoSelecionado();
  }

  ngOnInit() {
    this.curso = this.cursoService.getObjetoSelecionado();
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

}


