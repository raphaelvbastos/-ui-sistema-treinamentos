import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from "@angular/router";
import { PaginaCursoComponent } from '../pagina-curso/pagina-curso.component';
import { PaginaCursosComponent } from '../pagina-cursos/pagina-cursos.component';

const rotas: Routes = [
  {path: "cursos", component: PaginaCursosComponent},
  {path: "cursos/:id", component: PaginaCursoComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class RotasModule { }
