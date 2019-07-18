import { Component, OnInit } from '@angular/core';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

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

  tituloPagina = "Lista de categorias";
  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService) {
    super(us, router, dialog);
    this.us.nomeAPI = "cursos";
    this.tela = "/curso";
    this.displayedColumns = ['titulo', 'nomeInstrutor', 'palavrasChaves', 'categoria', 'acoes'];

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }
}
