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

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + "/usuarios");
  }

  getObjeto(id): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + "/usuarios/" + id);
  }

  getUsuarioEmail(email): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + "/usuarios/email/" + email);
  }

  setObjetoSelecionado(usu: Usuario) {
    this.usuario = usu;
  }

  getObjetoSelecionado(): Usuario {
    return this.usuario;
  }

  incluir(u: Usuario): Observable<any> {
    return this.http.post(this.url + "/usuarios", u, this.cabecalhoJson);
  }

  atualizar(u: any) {
    return this.http.put(this.url + "/usuarios/" + u._id, u, this.cabecalhoJson);
  }

  excluir(u: any) {
    return this.http.delete(this.url + "/usuarios/" + u._id);
  }

}
