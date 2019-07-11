import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuariomodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  showMsg: boolean = false;
  usuarioAutenticado = false;

  constructor(public as: AutenticacaoService, public router: Router) { 
    this.usuarioAutenticado = this.as.ehUsuarioAutenticado();
  }

  ngOnInit() {    
  }

  login() {
    this.as.login(this.usuario).subscribe(result => {
      if(result != null) {

       this.as.usuarioLogado.subscribe(users => this.usuario = users);
        
        this.router.navigate(["/cursos"]);
      } else {
        this.showMsg = true;
      }
      // if (result.success) {
      //   this.goTo('home');
      // }
    });
    // console.log(this.usuario.email);
    // console.log(this.usuario.senha);
  }

  logoff(): any {
    this.as.encerrarSessao();
    this.usuarioAutenticado = false;
  }

}
