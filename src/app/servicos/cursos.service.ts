import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  objeto: any;
  
  constructor() { }

  setObjetoSelecionado(usu: any) {
    this.objeto = this.ordernar(usu);
  }

  getObjetoSelecionado(): any {
    return this.objeto;
  }

  ordernar(curso) {
    // ordenar unidade
    curso.unidades.sort(function (a, b) {
      return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
    });

    // ordenar videos
    curso.unidades.forEach(uni => {
      uni.videos.sort(function (a, b) {
        return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
      });
    });

    // ordenar arquivos
    curso.unidades.forEach(uni => {
      uni.arquivos.sort(function (a, b) {
        return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
      });
    });

    // ordenar questionarios
    curso.unidades.forEach(uni => {
      uni.questionarios.sort(function (a, b) {
        return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
      });
    });

    return curso;
  }
  
}
