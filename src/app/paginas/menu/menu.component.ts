import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { Usuario } from '../../modelos/usuariomodel';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario = new Usuario();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public as: AutenticacaoService) { 
  }

  ngOnInit() {
    this.as.usuarioLogado.subscribe(users => this.usuario = users);
  }


}
