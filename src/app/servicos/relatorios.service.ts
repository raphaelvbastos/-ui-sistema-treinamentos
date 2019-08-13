import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RelatoriosService {

  url: string = "https://api-sistema-treinamento.herokuapp.com";
  // url: string = "http://localhost:8080/";
  usuario: any;

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/usuarios/tipo/Empregado");
  }

  setObjetoSelecionado(usu: any) {
    this.usuario = usu;
  }

  getObjetoSelecionado(): any {
    return this.usuario;
  }

}