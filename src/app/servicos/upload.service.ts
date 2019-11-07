import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: string = "https://api-sistema-treinamento.herokuapp.com";
  // url: string = "http://localhost:8080";
  // url = "https://sistema-treinamentos.herokuapp.com";

  cabecalhoJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  upload(arquivo: any, nome: string): Observable<any> {
    try {
      // return this.http.post(this.url + "/upload", arquivo);
      return this.http.post("https://www.unisim.cepetro.unicamp.br/api/v1/index.php/sistren/"+nome, arquivo);
    } catch (error) {
      console.log(error);
    }
    
  }

  // upload(arquivo: any): Observable<any> {
  //   try {
  //     return this.http.get(this.url + "/upload/teste", this.cabecalhoJson);
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }

}
