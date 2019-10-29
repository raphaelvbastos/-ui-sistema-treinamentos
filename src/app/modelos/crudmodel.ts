import { OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { ConfirmacaoComponent } from "../paginas/confirmacao/confirmacao.component";
import { CursosService } from "../servicos/cursos.service";
import { AutenticacaoService } from "../servicos/autenticacao.service";
import { QuestoesService } from "../servicos/questoes.service";
import { QuestionariosService } from "../servicos/questionarios.service";
import { UnidadesService } from "../servicos/unidades.service";

export class CrudListar implements OnInit, AfterViewInit {

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns;
  public tela;
  public dadosSessao = null;
  public listarAlternativas = false;
  cursoCampo: string;
  curso: any;

  constructor(public us: any, public router: Router, public dialog: MatDialog, public cursoService?: CursosService, public as?: AutenticacaoService,
    public uni?: UnidadesService, public quest?: QuestionariosService, public questao?: QuestoesService) {
  }

  ngOnInit() {
    if (!this.listarAlternativas) {
      this.atualizar();
    } else {
      this.atualizarAlternativas();
    }

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openDialog(objeto: any): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '300px',
      data: "Tem certeza que deseja excluir?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(objeto);
      }
    });
  }

  mostrarTipo(objeto: any) {
    if (typeof objeto != "undefined") {
      return objeto.tipo;
    }

    return "-";
  }

  editar(objeto: any) {
    this.us.setObjetoSelecionado(objeto);
    this.router.navigate([this.tela]);
  }

  novo(curso: any, tela: string) {
    this.cursoService.setObjetoSelecionado(curso);
    this.us.setObjetoSelecionado(null);
    this.router.navigate([tela]);
  }


  excluir(objeto: any) {
    this.us.setObjetoSelecionado(objeto);


    if (typeof this.cursoService != "undefined") {

      let curso = this.cursoService.getObjetoSelecionado();

      if (typeof this.cursoCampo != "undefined") {
        let pos = curso[this.cursoCampo].findIndex(x => x._id == objeto._id);
        curso[this.cursoCampo].splice(pos, 1);

        objeto = curso;

        this.us.atualizar(objeto).subscribe(
          (dados) => {
            this.atualizar();
          });
      } else {
        this.us.excluir(objeto).subscribe(
          (dados) => {
            this.atualizar();
          });
      }

    } else {
      this.us.excluir(objeto).subscribe(
        (dados) => {
          this.atualizar();
        });
    }

  }

  atualizar() {
    if (this.dadosSessao == null) {
      this.us.get().subscribe(
        (dados: any[]) => {
          this.dataSource.data = dados;
        }
      );
    } else {
      this.dataSource.data = this.dadosSessao;
    }

  }

  atualizarAlternativas() {

    this.us.nomeAPI = "cursos";

    let cursoAtualizado = null;

    this.listarAlternativas = true;


    this.us.getObjeto(this.cursoService.getObjetoSelecionado()._id).subscribe(
      (dados) => {
        cursoAtualizado = this.cursoService.getObjetoSelecionado();

        this.curso = cursoAtualizado;

        // localizar unidade no curso
        let uniAtualizada = cursoAtualizado.unidades.find(x => x._id == this.uni.getObjetoSelecionado()._id);
        let questionarioAtualizado = uniAtualizada.questionarios.find(x => x._id == this.quest.getObjetoSelecionado()._id);

        if (typeof this.questao.getObjetoSelecionado()._id == "undefined") {
          this.questao.setObjetoSelecionado(questionarioAtualizado.questoes[questionarioAtualizado.questoes.length - 1]);
        }

        let questaoAtualizada = questionarioAtualizado.questoes.find(x => x._id == this.questao.getObjetoSelecionado()._id);

        if (questaoAtualizada != null) {
          this.dadosSessao = questaoAtualizada.alternativas;
          this.questao.setObjetoSelecionado(questaoAtualizada);
          this.dataSource.data = this.dadosSessao;
        }



        this.cursoService.setObjetoSelecionado(cursoAtualizado);
        this.uni.setObjetoSelecionado(uniAtualizada);
        this.quest.setObjetoSelecionado(questionarioAtualizado);



        this.tela = "/alternativa";
        this.displayedColumns = ['alternativa', 'correta', 'acoes'];
        this.cursoCampo = "unidades";

        this.as.permissaoAcesso("ADM", "Acesso Negado");

      }
    );
  }
}