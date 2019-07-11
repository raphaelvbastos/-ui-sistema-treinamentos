import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  public mensagem: string;

  constructor() { }

  setMensagem(msg: any) {
    this.mensagem = msg;
  }

  getMensagem(): any {
    return this.mensagem;
  }
}
