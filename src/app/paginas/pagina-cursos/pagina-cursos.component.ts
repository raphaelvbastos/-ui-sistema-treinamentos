import { Component, OnInit } from '@angular/core';
import { ServicoCursosService } from '../../servicos/servico-cursos.service'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.component.html',
  styleUrls: ['./pagina-cursos.component.css']
})
export class PaginaCursosComponent implements OnInit {
  cursos: any[];
  constructor(public ps: ServicoCursosService, public as: AutenticacaoService) {

    this.as.canActivate();
    // this.projetos = ps.getProjetos();
    ps.getCursos().subscribe(
      (dados: any[]) => {
        this.cursos = dados;
      }
    );
  }

  ngOnInit() {
  }

}
