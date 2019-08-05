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
import { VideosComponent } from '../paginas/videos/videos.component';
import { VideoComponent } from '../paginas/video/video.component';
import { ArquivosComponent } from '../paginas/arquivos/arquivos.component';
import { ArquivoComponent } from '../paginas/arquivo/arquivo.component';
import { QuestionariosComponent } from '../paginas/questionarios/questionarios.component';
import { QuestionarioComponent } from '../paginas/questionario/questionario.component';
import { QuestoesComponent } from '../paginas/questoes/questoes.component';
import { QuestaoComponent } from '../paginas/questao/questao.component';
import { AlternativasComponent } from '../paginas/alternativas/alternativas.component';
import { AlternativaComponent } from '../paginas/alternativa/alternativa.component';
import { CursodetalhesComponent } from '../paginas/cursodetalhes/cursodetalhes.component';
import { AssistirvideoComponent } from '../paginas/assistirvideo/assistirvideo.component';

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
  { path: "videos", component: VideosComponent },
  { path: "video", component: VideoComponent },
  { path: "arquivos", component: ArquivosComponent },
  { path: "arquivo", component: ArquivoComponent },
  { path: "questionarios", component: QuestionariosComponent },
  { path: "questionario", component: QuestionarioComponent },
  { path: "questoes", component: QuestoesComponent },
  { path: "questao", component: QuestaoComponent },
  { path: "alternativas", component: AlternativasComponent },
  { path: "alternativa", component: AlternativaComponent },
  { path: "cursodetalhes", component: CursodetalhesComponent },
  { path: "assistirvideo", component: AssistirvideoComponent },
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
