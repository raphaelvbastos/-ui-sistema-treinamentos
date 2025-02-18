import { Component, OnInit } from '@angular/core';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { Inscricaomodel } from 'src/app/modelos/inscricaomodel';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { CursosService } from 'src/app/servicos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
// export class CursosComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class CursosComponent extends CrudListar {

  tituloPagina = "Lista de cursos";
  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService, public cursoService: CursosService) {
    super(us, router, dialog);
    this.us.nomeAPI = "cursos";
    this.tela = "/curso";


    let logado = this.as.getUsuario();

    this.displayedColumns = ['titulo', 'nomeInstrutor', 'palavrasChaves', 'categoria', 'unidades', 'acessar', 'acoes'];

    if (logado.tipo.tipo == "Empregado") {
      this.displayedColumns = ['titulo', 'nomeInstrutor', 'palavrasChaves', 'categoria', 'acessar', 'acoes'];
    }

    this.as.permissaoAcesso("LOGADO", "Acesso Negado");
  }

  inscrever(curso) {
    let inscricao = new Inscricaomodel();

    inscricao.usuario = this.as.getUsuario();

    curso.inscricoes.push(inscricao);

    this.us.atualizar(curso).subscribe(
      (dados) => {
        this.atualizar();
      });
  }

  desinscrever(curso) {
    let usuario = this.as.getUsuario();

    return (curso.inscricoes.find(x => x.usuario._id == usuario._id) != null);

  }

  detalhes(curso) {
    this.cursoService.setObjetoSelecionado(curso);
    this.router.navigate(["/cursodetalhes"]);
  }

  unidades(uni) {
    // this.us.nomeAPI = "unidades";
    // this.uniServ.setObjetoSelecionado(uni);

    this.us.nomeAPI = "cursos";
    this.cursoService.setObjetoSelecionado(uni);
    this.router.navigate(["/unidades"]);
  }

  sairCurso(curso) {

    let usuario = this.as.getUsuario();
    let pos = curso.inscricoes.findIndex(x => x.usuario._id == usuario._id)
    curso.inscricoes.splice(pos, 1);

    this.us.atualizar(curso).subscribe(
      (dados) => {
        this.atualizar();
      });

  }
}
