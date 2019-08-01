import { Component, OnInit } from '@angular/core';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CursosService } from 'src/app/servicos/cursos.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent extends CrudListar {

  tituloPagina = "Lista de unidades";
  curso: any;

  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService, public cursoService: CursosService, public uni: UnidadesService) {
    super(us, router, dialog, cursoService);

    if(typeof this.cursoService.getObjetoSelecionado() != "undefined") {
      this.dadosSessao = this.cursoService.getObjetoSelecionado().unidades;
    }
    

    this.curso = this.cursoService.getObjetoSelecionado();
    // console.log(this.cursoService.getObjetoSelecionado());

    this.us.nomeAPI = "cursos";
    this.tela = "/unidade";
    this.displayedColumns = ['titulo', 'posicao', 'videos', 'arquivos', 'questionarios', 'acoes'];
    this.cursoCampo = "unidades";


    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  videos(unidade) {
    this.uni.setObjetoSelecionado(unidade);
    this.router.navigate(["/videos"]);
  }

  questionarios(unidade) {
    this.uni.setObjetoSelecionado(unidade);
    this.router.navigate(["/questionarios"]);
  }

  arquivos(unidade) {
    this.uni.setObjetoSelecionado(unidade);
    this.router.navigate(["/arquivos"]);
  }

}


