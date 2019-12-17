import { Component, OnInit } from '@angular/core';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
// export class CursoComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class CursoComponent extends Crudobjeto {

  curso = {
    "titulo": "",
    "nomeInstrutor": "",
    "palavrasChave": "",
    "categoria": {},
    "unidades": [],
    "avaliacoes": [],
    "inscricoes": []

  };

  categorias = [];

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
    super(os, router, as);
    this.objeto = this.curso;
    this.nomeAPI = "cursos";
    this.tela = "/cursos";
    this.filtro = "titulo";

    this.getCategorias();
    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  tituloPagina = "Lista de cursos";

  getCategorias() {
    this.os.nomeAPI = "cursocategoria";
    this.os.get().subscribe((dados: any[]) => {
      this.categorias = dados;
    });
  }

  preencher() {
    let cat = {
      _id: "5d2f52601c9d440000dd4ee6",
      nome: "FRONT-END"
    };

    this.curso.titulo = "Material Design";
    this.curso.nomeInstrutor = "Roger da Silva";
    this.curso.palavrasChave = "npm, angular";
    this.curso.categoria = cat;
  }
}
