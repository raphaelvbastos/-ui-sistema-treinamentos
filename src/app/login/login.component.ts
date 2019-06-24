import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = { email: '', senha: '' };
  showMsg: boolean = false;

  constructor(public as: AutenticacaoService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.as.login(this.usuario).subscribe(result => {
      if(result != null) {
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

}
