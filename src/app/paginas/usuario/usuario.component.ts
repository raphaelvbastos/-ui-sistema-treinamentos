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
  emailValido = true;

  constructor(public us: UsuariosService, public ut: UsuariotipoService, public router: Router, public as: AutenticacaoService) {
    this.usuario = new Usuario();
    this.ut.getTiposUsuario().subscribe((dados: any[]) => {
      this.tipoUsuario = dados;
      
    });
  }

  ngOnInit() {
    if (this.us.getObjetoSelecionado() != null) {
      this.usuario = this.us.getObjetoSelecionado();
    }

    if(this.as.getUsuario().tipo.tipo == "Empregado") {
      this.usuario =  this.as.getUsuario();
    }
  }

  compareById(f1: any, f2: any): boolean {
    return f1 && f2 && f1._id === f2._id;
  }

  emailDuplicado() {
    let usuemail: Usuario;
    this.us.getUsuarioEmail(this.usuario.email).subscribe((dados: Usuario) => {
      usuemail = dados;

      if(usuemail != null) {
        this.emailValido = false;
        this.usuario.email = "";
      } else {
        this.emailValido = true;
      }
    });
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
    let tela = "/usuarios";
    if(!this.as.ehAdministrador()) {
      tela = "/login";
      let perfil = {"_id":"5d0a252f024766700740e08a","tipo":"Empregado","__v":0};
      this.usuario.tipo = perfil;
    }

    if(Object.keys(this.usuario).indexOf("_id") == -1) {
      this.us.incluir(this.usuario).subscribe(
        (dados) => {
          this.router.navigate([tela]);
        });
    } else {
      this.us.atualizar(this.usuario).subscribe(
        (dados) => {
          this.router.navigate([tela]);
        });
    }
  }

  preencher() {   
    let tipo = {
      _id: "5d0a252f024766700740e08a",
      tipo: "Empregado"
    };

    this.usuario.nome = "Danilo Souza";
    this.usuario.email = "d@gmail.com";
    this.usuario.senha = "123mudar";
    this.usuario.tipo = tipo;
  }


}
