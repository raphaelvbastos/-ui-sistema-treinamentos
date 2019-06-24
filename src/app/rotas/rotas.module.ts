import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from "@angular/router";
import { PaginaCursoComponent } from '../paginas/pagina-curso/pagina-curso.component';
import { PaginaCursosComponent } from '../paginas/pagina-cursos/pagina-cursos.component';
import { LoginComponent } from '../paginas/login/login.component';

const rotas: Routes = [
  { path: "cursos", component: PaginaCursosComponent },
  { path: "cursos/:id", component: PaginaCursoComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule],
  declarations: []
})

export class RotasModule { }
