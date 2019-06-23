import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicoCursosService {

  url: string = "https://api-sistema-treinamento.herokuapp.com";
  // url: string = "http://localhost:8080/";

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/cursos");
  }

  getCurso(id): Observable<any> {
    return this.http.get<any>(this.url + "/cursos/"+id);
  }
}
