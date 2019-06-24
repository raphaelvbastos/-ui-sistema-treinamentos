import { Component, OnInit } from '@angular/core';
import { ServicoCursosService } from '../../servicos/servico-cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-curso',
  templateUrl: './pagina-curso.component.html',
  styleUrls: ['./pagina-curso.component.css']
})
export class PaginaCursoComponent implements OnInit {

  curso: any;
    constructor( public ps: ServicoCursosService, 
                 public rs: ActivatedRoute) {
        const id = this.rs.snapshot.paramMap.get("id");

        ps.getCurso(id).subscribe(
          (dados:any) => {
            this.curso = dados;
          }
        );
    }

    teste(elem) {
      console.log(elem);
    }

  ngOnInit() {
  }

}
