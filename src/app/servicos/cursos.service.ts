import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  objeto: any;
  
  constructor() { }

  setObjetoSelecionado(usu: any) {
    this.objeto = usu;
  }

  getObjetoSelecionado(): any {
    return this.objeto;
  }
  
}
