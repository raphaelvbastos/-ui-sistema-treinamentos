import { Component, OnInit } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CursosService } from 'src/app/servicos/cursos.service';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})

export class UnidadeComponent extends Crudobjeto {

  unidade = {
    "titulo": "",
    "posicao": 0,
    "videos": [],
    "arquivos": [],
    "questionarios": []
  };

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService: CursosService) {
    super(os, router, as, cursoService);
    this.objeto = this.unidade;
    this.nomeAPI = "cursos";
    this.tela = "/unidades";
    this.filtro = "titulo";
    this.cursoCampo = "unidades";

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  tituloPagina = "UNIDADE";

  salvarCurso() {
    this.cursoService.getObjetoSelecionado().unidades.push(this.objeto);
  }
}
