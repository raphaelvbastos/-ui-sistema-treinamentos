import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CrudListar } from 'src/app/modelos/crudmodel';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})

export class RelatoriosComponent extends CrudListar {
  tituloPagina = "Lista de usuários";
  usuarios = new Array();

  constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService) {
    super(us, router, dialog);
    this.tela = "/relatorio";
    this.displayedColumns = ['nome', 'acoes'];

    this.us.get().subscribe( (dados) => {
      this.usuarios = dados;
      this.dadosSessao = this.usuarios.filter(x => x.tipo.tipo == "Empregado");
      this.atualizar();
    });

    this.atualizar();

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  relatorio(usuario) {
    this.us.setObjetoSelecionado(usuario);
    this.router.navigate([this.tela]);
  }
}