import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  url: string = "https://api-sistema-treinamento.herokuapp.com/";

  // url: string = "http://localhost:8080/";
  objeto: any;
  nomeAPI: string;
  filtro: string;

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.url + this.nomeAPI);
  }

  getObjeto(id): Observable<any> {
    return this.http.get<any>(this.url + this.nomeAPI + "/" + id);
  }

  getObjetoFiltro(valor: string): Observable<any> {
    return this.http.get<any>(this.url  + this.nomeAPI + "/" + this.filtro + "/" + valor);
  }

  setObjetoSelecionado(usu: any) {
    this.objeto = usu;
  }

  getObjetoSelecionado(): any {
    return this.objeto;
  }

  incluir(u: any): Observable<any> {
    return this.http.post(this.url + this.nomeAPI, u, this.cabecalhoJson);
  }

  atualizar(u: any) {
    return this.http.put(this.url  + this.nomeAPI + "/" + u._id, u, this.cabecalhoJson);
  }

  excluir(u: any) {
    return this.http.delete(this.url  + this.nomeAPI + "/" + u._id);
  }
}
