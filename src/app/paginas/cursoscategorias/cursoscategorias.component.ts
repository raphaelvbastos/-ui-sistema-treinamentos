import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CrudListar } from 'src/app/modelos/crudmodel';

@Component({
  selector: 'app-cursoscategorias',
  templateUrl: './cursoscategorias.component.html',
  styleUrls: ['./cursoscategorias.component.css']
})
// export class CursoscategoriasComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



export class CursoscategoriasComponent extends CrudListar {

  tituloPagina = "Lista de categorias";
  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService) {
    super(us, router, dialog);
    this.us.nomeAPI = "cursocategoria";
    this.tela = "/cursoscategoria";
    this.displayedColumns = ['nome', 'acoes'];

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }
}