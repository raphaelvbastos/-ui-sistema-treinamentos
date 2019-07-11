import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/servicos/mensagem.service';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {
  public mensagem: string;

  constructor(public ms: MensagemService) { 
    this.mensagem = this.ms.getMensagem();
  }

  ngOnInit() {
  }

}
