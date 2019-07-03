import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariotipoService {

  url: string = "https://api-sistema-treinamento.herokuapp.com";
  // url: string = "http://localhost:8080/";
  usuarioTipo: any;

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  getTiposUsuario(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/usuariotipo");
  }

  getTipoUsuario(id): Observable<any> {
    return this.http.get<any>(this.url + "/usuariotipo/"+id);
  }

  setUsuarioSelecionado(usu: any) {
    this.usuarioTipo = usu;
  }

  getUsuarioSelecionado(): any {
    return this.usuarioTipo;
  }

}
