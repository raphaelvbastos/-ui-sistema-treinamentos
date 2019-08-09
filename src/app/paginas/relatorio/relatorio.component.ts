import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { UsuariosService } from 'src/app/servicos/usuarios.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  usuario: any;
  cursos = new Array();
  cursosInscritos = new Array();
  listaCursos = new Array();
  

  constructor(public us: UsuariosService, public os: ObjetosService) { 
    this.usuario = this.us.getObjetoSelecionado();

    this.os.nomeAPI = "cursos";
    this.os.get().subscribe( (dados) => {
      this.cursos = dados;

      this.montar();
    })
  }

  montar() {
    this.cursosInscritos = this.cursos.filter(x => x.inscricoes.findIndex(y => y.usuario._id == this.usuario._id) > -1);
    
    this.cursosInscritos.forEach(curso => {
      let relusuario = {
        "curso": "",
        "status": "",
        "videos": "",
        "aproveitamento": "",
        "gerouCertificado": ""
      }
      relusuario.curso = curso.titulo;
      let insc = curso.inscricoes.find(y => y.usuario._id == this.usuario._id);
      relusuario.status = (insc.aprovado) ? "APROVADO" : "REPROVADO";
      relusuario.videos = insc.percentualAndamento;
      relusuario.aproveitamento = insc.percentualAcertos;
      relusuario.gerouCertificado = (insc.gerouCertificado) ? "SIM" : "NÃO";

      this.listaCursos.push(relusuario);
    });
  }

  ngOnInit() {
  }

}
