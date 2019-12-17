import { Component, OnInit } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { UploadService } from 'src/app/servicos/upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})

export class ArquivoComponent extends Crudobjeto {

  arquivoObjeto = {
    "titulo": "",
    "url": "",
    "posicao": 0
    };

  arquivo: any;
  uploadedFiles: Array<File>;
  cont: Array<any>;
  nomeArquivo = "";
  exibirTagVideo = false;
  exibirTagEmbebed = false;

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService, 
      public uni: UnidadesService, public uploadService: UploadService, public sanitize: DomSanitizer) {
    super(os, router, as, cursoService);
    this.objeto = this.arquivoObjeto;
    this.nomeAPI = "cursos";
    this.tela = "/arquivos";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";
    this.uploadedFiles = new Array();
    this.as.permissaoAcesso("ADM", "Acesso Negado");   
  }

  tituloPagina = "ARQUIVO";

  sanitizarURL(url) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
  
  salvarNaUnidade() {
    if (this.uploadedFiles.length > 0) {
      // this.objeto.url = "https://api-sistema-treinamento.herokuapp.com/download/" + this.upload();
      this.objeto.url = "https://www.unisim.cepetro.unicamp.br/sistren/" + this.upload();
    }

    if (Object.keys(this.objeto).indexOf("_id") > -1) {
      let pos = this.uni.getObjetoSelecionado().arquivos.findIndex(x => x._id == this.objeto._id);

      this.uni.getObjetoSelecionado().arquivos.splice(pos, 1);
      this.uni.getObjetoSelecionado().arquivos.push(this.objeto);

      pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);

      this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
      this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

      this.objeto = this.cursoService.getObjetoSelecionado();

    } else {
      this.uni.getObjetoSelecionado().arquivos.push(this.objeto);
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

    this.uploadService.upload(formData, nome).subscribe(
      (dados) => {
        nome = formData.get("upload")["name"];
      });

      return nome;
  }

  preencher() {   
    this.arquivoObjeto.titulo = "Apostila";
    this.arquivoObjeto.posicao = 1;
  }

}