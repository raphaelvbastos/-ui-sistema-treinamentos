import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { Crudobjeto } from 'src/app/modelos/crudobjeto';

@Component({
  selector: 'app-cursoscategoria',
  templateUrl: './cursoscategoria.component.html',
  styleUrls: ['./cursoscategoria.component.css']
})


export class CursoscategoriaComponent extends Crudobjeto {

  categoria = {
    "nome": ""
  };

  constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
    super(os, router, as);
    this.objeto = this.categoria;
    this.nomeAPI = "cursocategoria";
    this.tela = "/cursoscategorias";
    this.filtro = "nome";

    this.as.permissaoAcesso("ADM", "Acesso Negado");
  }

  tituloPagina = "Lista de usuários";
}

// export class CursoscategoriaComponent implements OnInit {

//   categoriaValida = true;
//   categoria = {
//     "nome": ""
//   };
//   constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
//     this.os.nomeAPI = "cursocategoria";
//   }

//   ngOnInit() {
//     if (this.os.getObjetoSelecionado() != null) {
//       this.categoria = this.os.getObjetoSelecionado();
//     }
//   }

//   categoriaDuplicada() {
//     let categoriaCurso: any;
//     this.os.filtro = "nome";
//     this.os.getObjetoFiltro(this.categoria.nome).subscribe((dados: any) => {
//       categoriaCurso = dados;

//       if (categoriaCurso != null) {
//         this.categoriaValida = false;
//         this.categoria.nome = "";
//       } else {
//         this.categoriaValida = true;
//       }
//     });
//   }

//   salvar() {
//     let tela = "/cursoscategorias";

//     if (Object.keys(this.categoria).indexOf("_id") == -1) {
//       this.os.incluir(this.categoria).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     } else {
//       this.os.atualizar(this.categoria).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     }
//   }

// }

// export class UsuarioComponent implements OnInit {

//   usuario = new Usuario();
//   tipoUsuario = [];
//   emailValido = true;

//   constructor(public us: UsuariosService, public ut: UsuariotipoService, public router: Router, public as: AutenticacaoService) {
//     this.usuario = new Usuario();
//     this.ut.getTiposUsuario().subscribe((dados: any[]) => {
//       this.tipoUsuario = dados;
//     });
//   }

//   ngOnInit() {
//     if (this.us.getObjetoSelecionado() != null) {
//       this.usuario = this.us.getObjetoSelecionado();
//     }
//   }

//   compareById(f1: any, f2: any): boolean {
//     return f1 && f2 && f1._id === f2._id;
//   }

//   emailDuplicado() {
//     let usuemail: Usuario;
//     this.us.getUsuarioEmail(this.usuario.email).subscribe((dados: Usuario) => {
//       usuemail = dados;

//       if(usuemail != null) {
//         this.emailValido = false;
//         this.usuario.email = "";
//       } else {
//         this.emailValido = true;
//       }
//     });
//   }

//   ehAdministrador() {
//     if(this.as.getUsuario() != null) {
//       if(this.as.getUsuario().tipo.tipo == "Administrador") {
//         return true;
//       }
//       return false;
//     } else {
//       return false;
//     }
//   }

//   salvar() {
//     let tela = "/usuarios";
//     if(!this.as.ehAdministrador()) {
//       tela = "/login";
//       let perfil = {"_id":"5d0a252f024766700740e08a","tipo":"Empregado","__v":0};
//       this.usuario.tipo = perfil;
//     }

//     if(Object.keys(this.usuario).indexOf("_id") == -1) {
//       this.us.incluir(this.usuario).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     } else {
//       this.us.atualizar(this.usuario).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     }
//   }

// }

