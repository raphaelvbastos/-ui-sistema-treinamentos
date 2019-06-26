import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuariomodel';
import { UsuariosService } from 'src/app/servicos/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = new Usuario();

  constructor(public us: UsuariosService) {
    // this.usuario = new Usuario();
  }

  ngOnInit() {
    this.usuario = this.us.getUsuarioSelecionado();
  }

}
