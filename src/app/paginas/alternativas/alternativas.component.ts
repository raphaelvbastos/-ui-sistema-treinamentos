import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/servicos/objetos.service';
import { CrudListar } from 'src/app/modelos/crudmodel';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { CursosService } from 'src/app/servicos/cursos.service';
import { UnidadesService } from 'src/app/servicos/unidades.service';
import { QuestionariosService } from 'src/app/servicos/questionarios.service';
import { QuestoesService } from 'src/app/servicos/questoes.service';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.css']
})

export class AlternativasComponent extends CrudListar {

  tituloPagina = "Lista de Alternativas";
  // curso: any;

  // constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService,
  //   public cursoService: CursosService, public uni: UnidadesService, public quest: QuestionariosService, public questao: QuestoesService) {
  //   super(us, router, dialog, cursoService);

  //   if (typeof this.questao.getObjetoSelecionado() != "undefined") {
  //     this.us.nomeAPI = "cursos";

  //     let listaCursos = new Array();
  //     this.us.get().subscribe((dados) => {
  //       listaCursos = dados;

  //       let cursoSel = listaCursos.find(x => x._id === this.cursoService.getObjetoSelecionado()._id);

  //       this.cursoService.setObjetoSelecionado(cursoSel);

  //       let uniSel = cursoSel.unidades.find(x => x._id === this.uni.getObjetoSelecionado()._id);

  //       this.uni.setObjetoSelecionado(uniSel);

  //       let questionarioSel = uniSel.questionarios.find(x => x._id === this.quest.getObjetoSelecionado()._id);

  //       this.quest.setObjetoSelecionado(questionarioSel);

  //       let questaoSel = questionarioSel.questoes.find(x => x._id === this.questao.getObjetoSelecionado()._id);

  //       this.questao.setObjetoSelecionado(questaoSel);

  //       this.dadosSessao = this.questao.getObjetoSelecionado().alternativas;

  //       this.curso = this.cursoService.getObjetoSelecionado();

  //       this.atualizar();

  //       console.log(this.dadosSessao);
  //       this.tela = "/alternativa";
  //       this.displayedColumns = ['alternativa', 'correta', 'acoes'];
  //       this.cursoCampo = "unidades";

  //     });


  //     // this.dadosSessao = this.questao.getObjetoSelecionado().alternativas;
  //     // console.log(this.dadosSessao);
  //   }

  //   // this.curso = this.cursoService.getObjetoSelecionado();


  //   // this.tela = "/alternativa";
  //   // this.displayedColumns = ['alternativa', 'correta', 'acoes'];
  //   // this.cursoCampo = "unidades";


  //   this.as.permissaoAcesso("ADM", "Acesso Negado");
  // }

  constructor(public us: ObjetosService, public router: Router, public dialog: MatDialog, public as: AutenticacaoService,
    public cursoService: CursosService, public uni: UnidadesService, public quest: QuestionariosService, public questao: QuestoesService) {
    super(us, router, dialog, cursoService);

    this.us.nomeAPI = "cursos";

    this.listarAlternativas = true;

    // this.curso = this.cursoService.getObjetoSelecionado();

    // this.us.getObjeto(this.cursoService.getObjetoSelecionado()._id).subscribe(
    //   (dados) => {
    //     cursoAtualizado = dados;

    //     console.log(dados);

    //     // localizar unidade no curso
    //     let uniAtualizada = cursoAtualizado.unidades.find(x => x._id == this.uni.getObjetoSelecionado()._id);
    //     let questionarioAtualizado = uniAtualizada.questionarios.find(x => x._id == this.quest.getObjetoSelecionado()._id);
    //     let questaoAtualizada = questionarioAtualizado.questoes.find(x => x._id == this.questao.getObjetoSelecionado()._id);

    //     this.dadosSessao = questaoAtualizada.alternativas;

    //     this.curso = cursoAtualizado;

    //     this.cursoService.setObjetoSelecionado(cursoAtualizado);
    //     this.uni.setObjetoSelecionado(uniAtualizada);
    //     this.quest.setObjetoSelecionado(questionarioAtualizado);
    //     this.questao.setObjetoSelecionado(questaoAtualizada);


    //     this.tela = "/alternativa";
    //     this.displayedColumns = ['alternativa', 'correta', 'acoes'];
    //     this.cursoCampo = "unidades";


    //     this.as.permissaoAcesso("ADM", "Acesso Negado");

    //     console.log(this.dadosSessao);
    //   }
    // );

    // if (typeof this.questao.getObjetoSelecionado() != "undefined") {
    //   console.log(this.cursoService.getObjetoSelecionado()._id);





    //   this.dadosSessao = this.questao.getObjetoSelecionado().alternativas;
    // }


  }

  excluirNaUnidade(objeto) {
    // localizar a questao no array de questoes do questionario

    let pos = this.questao.getObjetoSelecionado().alternativas.findIndex(x => x._id == objeto._id);
    this.questao.getObjetoSelecionado().alternativas.splice(pos, 1);

    // localizar a questao no array de questoes do questionario
    pos = this.quest.getObjetoSelecionado().questoes.findIndex(x => x._id == this.questao.getObjetoSelecionado()._id);
    this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
    this.quest.getObjetoSelecionado().questoes.push(this.questao.getObjetoSelecionado());

    // localizar o questionario na unidade
    pos = this.uni.getObjetoSelecionado().questionarios.findIndex(x => x._id == this.quest.getObjetoSelecionado()._id);
    this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
    this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());

    // localizar unidade no curso
    pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(x => x._id == this.uni.getObjetoSelecionado()._id);
    this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
    this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());

    this.us.nomeAPI = "cursos";
    this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(
      (dados) => {
        this.atualizar();
      });
  }

  abrirDialogo(objeto: any): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '300px',
      data: "Tem certeza que deseja excluir?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirNaUnidade(objeto);
      }
    });
  }

  alternativas(questao) {
    this.questao.setObjetoSelecionado(questao);
    this.router.navigate(["/alternativas"]);
  }

  tipoAlternativa(opcao) {
    if (opcao == true) {
      return "SIM";
    } else {
      return "NÃO";
    }
  }
}
