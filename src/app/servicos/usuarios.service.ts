import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Usuario } from '../modelos/usuariomodel';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "https://api-sistema-treinamento.herokuapp.com";
  // url: string = "http://localhost:8080/";
  usuario: Usuario;

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + "/usuarios");
  }

  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + "/usuarios/" + id);
  }

  getUsuarioEmail(email): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + "/usuarios/email/" + email);
  }

  setUsuarioSelecionado(usu: Usuario) {
    this.usuario = usu;
  }

  getUsuarioSelecionado(): Usuario {
    return this.usuario;
  }

  incluirUsuario(u: Usuario): Observable<any> {
    return this.http.post(this.url + "/usuarios", u, this.cabecalhoJson);
  }

  atualizarUsuario(u: any) {
    return this.http.put(this.url + "/usuarios/" + u._id, u, this.cabecalhoJson);
  }

  excluirUsuario(u: any) {
    return this.http.delete(this.url + "/usuarios/" + u._id);
  }

}
