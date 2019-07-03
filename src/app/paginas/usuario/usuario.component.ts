import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuariomodel';

import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { UsuariotipoService } from 'src/app/servicos/usuariotipo.service';
import { UsuarioTipo } from 'src/app/modelos/usuariotipomodel';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = new Usuario();
  tipoUsuario = [];

  constructor(public us: UsuariosService, public ut: UsuariotipoService, public router: Router, public as: AutenticacaoService) {
    this.usuario = new Usuario();
    this.ut.getTiposUsuario().subscribe((dados: any[]) => {
      this.tipoUsuario = dados;
    });
  }

  ngOnInit() {
    if (this.us.getUsuarioSelecionado() != null) {
      this.usuario = this.us.getUsuarioSelecionado();
    }
  }

  compareById(f1: any, f2: any): boolean {
    return f1 && f2 && f1._id === f2._id;
  }

  emailDuplicado() {
    // console.log(this.usuario.email);
    // this.usuario.email = "";
    return true;
  }

  ehAdministrador() {
    if(this.as.getUsuario() != null) {
      if(this.as.getUsuario().tipo.tipo == "Administrador") {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

  salvar() {
    if(Object.keys(this.usuario).indexOf("_id") == -1) {
      this.us.incluirUsuario(this.usuario).subscribe(
        (dados) => {
          this.router.navigate(["/usuarios"]);
        });
    } else {
      this.us.atualizarUsuario(this.usuario).subscribe(
        (dados) => {
          this.router.navigate(["/usuarios"]);
        });
    }
  }

}
