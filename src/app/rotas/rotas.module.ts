import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from "@angular/router";
import { PaginaCursoComponent } from '../paginas/pagina-curso/pagina-curso.component';
import { PaginaCursosComponent } from '../paginas/pagina-cursos/pagina-cursos.component';
import { LoginComponent } from '../paginas/login/login.component';
import { UsuariosComponent } from '../paginas/usuarios/usuarios.component';
import { UsuarioComponent } from '../paginas/usuario/usuario.component';
import { ErroComponent } from '../paginas/erro/erro.component';

const rotas: Routes = [
  { path: "cursos", component: PaginaCursosComponent },
  { path: "cursos/:id", component: PaginaCursoComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "erro", component: ErroComponent },
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
