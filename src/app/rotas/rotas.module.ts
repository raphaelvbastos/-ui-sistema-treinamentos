import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from "@angular/router";
import { PaginaCursoComponent } from '../paginas/pagina-curso/pagina-curso.component';
import { PaginaCursosComponent } from '../paginas/pagina-cursos/pagina-cursos.component';
import { LoginComponent } from '../paginas/login/login.component';
import { UsuariosComponent } from '../paginas/usuarios/usuarios.component';
import { UsuarioComponent } from '../paginas/usuario/usuario.component';
import { ErroComponent } from '../paginas/erro/erro.component';
import { CursoscategoriasComponent } from '../paginas/cursoscategorias/cursoscategorias.component';
import { CursoscategoriaComponent } from '../paginas/cursoscategoria/cursoscategoria.component';
import { CursosComponent } from '../paginas/cursos/cursos.component';
import { CursoComponent } from '../paginas/curso/curso.component';
import { UnidadesComponent } from '../paginas/unidades/unidades.component';
import { UnidadeComponent } from '../paginas/unidade/unidade.component';

const rotas: Routes = [
  { path: "cursos", component: CursosComponent },
  { path: "curso", component: CursoComponent },
  { path: "cursos/:id", component: PaginaCursoComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "cursoscategorias", component: CursoscategoriasComponent },
  { path: "cursoscategoria", component: CursoscategoriaComponent },
  { path: "unidades", component: UnidadesComponent },
  { path: "unidade", component: UnidadeComponent },
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
