(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _paginas_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginas/menu/menu.component */ "./src/app/paginas/menu/menu.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _paginas_painel_painel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginas/painel/painel.component */ "./src/app/paginas/painel/painel.component.ts");
/* harmony import */ var _paginas_tabela_tabela_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paginas/tabela/tabela.component */ "./src/app/paginas/tabela/tabela.component.ts");
/* harmony import */ var _paginas_pagina_cursos_pagina_cursos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./paginas/pagina-cursos/pagina-cursos.component */ "./src/app/paginas/pagina-cursos/pagina-cursos.component.ts");
/* harmony import */ var _paginas_pagina_curso_pagina_curso_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paginas/pagina-curso/pagina-curso.component */ "./src/app/paginas/pagina-curso/pagina-curso.component.ts");
/* harmony import */ var _rotas_rotas_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rotas/rotas.module */ "./src/app/rotas/rotas.module.ts");
/* harmony import */ var _paginas_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paginas/login/login.component */ "./src/app/paginas/login/login.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _paginas_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./paginas/usuarios/usuarios.component */ "./src/app/paginas/usuarios/usuarios.component.ts");
/* harmony import */ var _paginas_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./paginas/usuario/usuario.component */ "./src/app/paginas/usuario/usuario.component.ts");
/* harmony import */ var _paginas_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./paginas/confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
/* harmony import */ var _paginas_erro_erro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./paginas/erro/erro.component */ "./src/app/paginas/erro/erro.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _paginas_cursoscategorias_cursoscategorias_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./paginas/cursoscategorias/cursoscategorias.component */ "./src/app/paginas/cursoscategorias/cursoscategorias.component.ts");
/* harmony import */ var _paginas_cursoscategoria_cursoscategoria_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./paginas/cursoscategoria/cursoscategoria.component */ "./src/app/paginas/cursoscategoria/cursoscategoria.component.ts");
/* harmony import */ var _paginas_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paginas/cursos/cursos.component */ "./src/app/paginas/cursos/cursos.component.ts");
/* harmony import */ var _paginas_curso_curso_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paginas/curso/curso.component */ "./src/app/paginas/curso/curso.component.ts");
/* harmony import */ var _paginas_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./paginas/unidades/unidades.component */ "./src/app/paginas/unidades/unidades.component.ts");
/* harmony import */ var _paginas_unidade_unidade_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./paginas/unidade/unidade.component */ "./src/app/paginas/unidade/unidade.component.ts");
/* harmony import */ var _paginas_videos_videos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./paginas/videos/videos.component */ "./src/app/paginas/videos/videos.component.ts");
/* harmony import */ var _paginas_video_video_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./paginas/video/video.component */ "./src/app/paginas/video/video.component.ts");
/* harmony import */ var _paginas_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./paginas/arquivos/arquivos.component */ "./src/app/paginas/arquivos/arquivos.component.ts");
/* harmony import */ var _paginas_arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./paginas/arquivo/arquivo.component */ "./src/app/paginas/arquivo/arquivo.component.ts");
/* harmony import */ var _paginas_questionarios_questionarios_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./paginas/questionarios/questionarios.component */ "./src/app/paginas/questionarios/questionarios.component.ts");
/* harmony import */ var _paginas_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./paginas/questionario/questionario.component */ "./src/app/paginas/questionario/questionario.component.ts");
/* harmony import */ var _paginas_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./paginas/questoes/questoes.component */ "./src/app/paginas/questoes/questoes.component.ts");
/* harmony import */ var _paginas_questao_questao_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./paginas/questao/questao.component */ "./src/app/paginas/questao/questao.component.ts");
/* harmony import */ var _paginas_alternativas_alternativas_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./paginas/alternativas/alternativas.component */ "./src/app/paginas/alternativas/alternativas.component.ts");
/* harmony import */ var _paginas_alternativa_alternativa_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./paginas/alternativa/alternativa.component */ "./src/app/paginas/alternativa/alternativa.component.ts");
/* harmony import */ var _paginas_cursodetalhes_cursodetalhes_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./paginas/cursodetalhes/cursodetalhes.component */ "./src/app/paginas/cursodetalhes/cursodetalhes.component.ts");
/* harmony import */ var _paginas_assistirvideo_assistirvideo_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./paginas/assistirvideo/assistirvideo.component */ "./src/app/paginas/assistirvideo/assistirvideo.component.ts");
/* harmony import */ var _paginas_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./paginas/star-rating/star-rating.component */ "./src/app/paginas/star-rating/star-rating.component.ts");
/* harmony import */ var _paginas_questionarioaluno_questionarioaluno_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./paginas/questionarioaluno/questionarioaluno.component */ "./src/app/paginas/questionarioaluno/questionarioaluno.component.ts");
/* harmony import */ var _paginas_questionarioresposta_questionarioresposta_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./paginas/questionarioresposta/questionarioresposta.component */ "./src/app/paginas/questionarioresposta/questionarioresposta.component.ts");
/* harmony import */ var _paginas_relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./paginas/relatorios/relatorios.component */ "./src/app/paginas/relatorios/relatorios.component.ts");
/* harmony import */ var _paginas_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./paginas/relatorio/relatorio.component */ "./src/app/paginas/relatorio/relatorio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _paginas_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _paginas_painel_painel_component__WEBPACK_IMPORTED_MODULE_10__["PainelComponent"],
                _paginas_tabela_tabela_component__WEBPACK_IMPORTED_MODULE_11__["TabelaComponent"],
                _paginas_pagina_cursos_pagina_cursos_component__WEBPACK_IMPORTED_MODULE_12__["PaginaCursosComponent"],
                _paginas_pagina_curso_pagina_curso_component__WEBPACK_IMPORTED_MODULE_13__["PaginaCursoComponent"],
                _paginas_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _paginas_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_17__["UsuariosComponent"],
                _paginas_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__["UsuarioComponent"],
                _paginas_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmacaoComponent"],
                _paginas_erro_erro_component__WEBPACK_IMPORTED_MODULE_20__["ErroComponent"],
                _paginas_cursoscategorias_cursoscategorias_component__WEBPACK_IMPORTED_MODULE_23__["CursoscategoriasComponent"],
                _paginas_cursoscategoria_cursoscategoria_component__WEBPACK_IMPORTED_MODULE_24__["CursoscategoriaComponent"],
                _paginas_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_25__["CursosComponent"],
                _paginas_curso_curso_component__WEBPACK_IMPORTED_MODULE_26__["CursoComponent"],
                _paginas_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_27__["UnidadesComponent"],
                _paginas_unidade_unidade_component__WEBPACK_IMPORTED_MODULE_28__["UnidadeComponent"],
                _paginas_videos_videos_component__WEBPACK_IMPORTED_MODULE_29__["VideosComponent"],
                _paginas_video_video_component__WEBPACK_IMPORTED_MODULE_30__["VideoComponent"],
                _paginas_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_31__["ArquivosComponent"],
                _paginas_arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_32__["ArquivoComponent"],
                _paginas_questionarios_questionarios_component__WEBPACK_IMPORTED_MODULE_33__["QuestionariosComponent"],
                _paginas_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_34__["QuestionarioComponent"],
                _paginas_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_35__["QuestoesComponent"],
                _paginas_questao_questao_component__WEBPACK_IMPORTED_MODULE_36__["QuestaoComponent"],
                _paginas_alternativas_alternativas_component__WEBPACK_IMPORTED_MODULE_37__["AlternativasComponent"],
                _paginas_alternativa_alternativa_component__WEBPACK_IMPORTED_MODULE_38__["AlternativaComponent"],
                _paginas_cursodetalhes_cursodetalhes_component__WEBPACK_IMPORTED_MODULE_39__["CursodetalhesComponent"],
                _paginas_assistirvideo_assistirvideo_component__WEBPACK_IMPORTED_MODULE_40__["AssistirvideoComponent"],
                _paginas_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_41__["StarRatingComponent"],
                _paginas_questionarioaluno_questionarioaluno_component__WEBPACK_IMPORTED_MODULE_42__["QuestionarioalunoComponent"],
                _paginas_questionarioresposta_questionarioresposta_component__WEBPACK_IMPORTED_MODULE_43__["QuestionariorespostaComponent"],
                _paginas_relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_44__["RelatoriosComponent"],
                _paginas_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_45__["RelatorioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _rotas_rotas_module__WEBPACK_IMPORTED_MODULE_14__["RotasModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].production })
            ],
            entryComponents: [
                _paginas_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmacaoComponent"],
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarContainer"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modelos/certificado.ts":
/*!****************************************!*\
  !*** ./src/app/modelos/certificado.ts ***!
  \****************************************/
/*! exports provided: Certificado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Certificado", function() { return Certificado; });
var Certificado = /** @class */ (function () {
    function Certificado() {
    }
    Certificado.prototype.verificarConclusao = function (curso, usuario) {
        var inscricao = curso.inscricoes.find(function (x) { return x.usuario._id == usuario._id; });
        var assistiuTudo = true;
        var aproveitamento = true;
        var total = 0;
        var andamento = 0;
        var totalTodasQuestoes = 0;
        var totalAprov = 0;
        var totalQuestionarios = 0;
        if (inscricao != null) {
            curso.unidades.forEach(function (unidade) {
                // let videosAssistidos = unidade.videos.filter(x => x.vistoPor.findIndex(y => y.usuario._id == usuario._id) > -1);
                var videosAssistidos = 0;
                unidade.videos.forEach(function (video) {
                    var viu = video.vistoPor.find(function (y) { return y._id == usuario._id; });
                    if (viu != null) {
                        videosAssistidos++;
                    }
                });
                if (videosAssistidos != unidade.videos.length) {
                    assistiuTudo = false;
                }
                if (videosAssistidos > 0) {
                    andamento = (videosAssistidos / unidade.videos.length) * 100;
                }
                unidade.questionarios.forEach(function (questionario) {
                    var respQuest = new Array();
                    totalQuestionarios++;
                    questionario.questoes.forEach(function (questao) {
                        var ru = questao.respostas.find(function (x) { return x.usuario._id == usuario._id; });
                        if (ru != null) {
                            respQuest.push(ru);
                        }
                    });
                    if (respQuest.length != questionario.questoes.length) {
                        aproveitamento = false;
                    }
                    else {
                        var corretas_1 = 0;
                        respQuest.forEach(function (resp) {
                            if (resp.resposta.correta) {
                                corretas_1++;
                            }
                        });
                        if (corretas_1 > 0) {
                            total = (corretas_1 / questionario.questoes.length) * 100;
                            if (total < 70) {
                                aproveitamento = false;
                            }
                        }
                        else {
                            aproveitamento = false;
                        }
                    }
                    if (respQuest.length == 0) {
                        totalTodasQuestoes += 0;
                    }
                    else {
                        totalTodasQuestoes += total;
                    }
                });
            });
            if (totalTodasQuestoes > 0 && totalQuestionarios > 0) {
                totalAprov = totalTodasQuestoes / totalQuestionarios;
            }
            else {
                totalAprov = 0;
            }
            //percentualAndamento: 0, percentualAcertos: 0, gerouCertificado: false, aprovado: false }
            if (assistiuTudo && aproveitamento) {
                inscricao.aprovado = true;
            }
            else {
                inscricao.aprovado = false;
            }
            //     console.log("video", assistiuTudo);
            // console.log("aproveitamento", aproveitamento);
            // console.log("total%", total);
            inscricao.percentualAcertos = totalAprov;
            inscricao.percentualAndamento = andamento;
            var pos = curso.inscricoes.findIndex(function (x) { return x.usuario._id == usuario._id; });
            if (pos > -1) {
                curso.inscricoes.splice(pos, 1);
                curso.inscricoes.push(inscricao);
            }
        }
        return curso;
    };
    return Certificado;
}());



/***/ }),

/***/ "./src/app/modelos/crudmodel.ts":
/*!**************************************!*\
  !*** ./src/app/modelos/crudmodel.ts ***!
  \**************************************/
/*! exports provided: CrudListar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudListar", function() { return CrudListar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _paginas_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paginas/confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudListar = /** @class */ (function () {
    function CrudListar(us, router, dialog, cursoService) {
        var _this = this;
        this.us = us;
        this.router = router;
        this.dialog = dialog;
        this.cursoService = cursoService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.dadosSessao = null;
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    CrudListar.prototype.ngOnInit = function () {
        this.atualizar();
    };
    CrudListar.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    CrudListar.prototype.openDialog = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_paginas_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluir(objeto);
            }
        });
    };
    CrudListar.prototype.mostrarTipo = function (objeto) {
        if (typeof objeto != "undefined") {
            return objeto.tipo;
        }
        return "-";
    };
    CrudListar.prototype.editar = function (objeto) {
        this.us.setObjetoSelecionado(objeto);
        this.router.navigate([this.tela]);
    };
    CrudListar.prototype.novo = function (curso, tela) {
        this.cursoService.setObjetoSelecionado(curso);
        this.us.setObjetoSelecionado(null);
        this.router.navigate([tela]);
    };
    CrudListar.prototype.excluir = function (objeto) {
        var _this = this;
        this.us.setObjetoSelecionado(objeto);
        if (typeof this.cursoService != "undefined") {
            var curso = this.cursoService.getObjetoSelecionado();
            var pos = curso[this.cursoCampo].findIndex(function (x) { return x._id == objeto._id; });
            curso[this.cursoCampo].splice(pos, 1);
            objeto = curso;
            this.us.atualizar(objeto).subscribe(function (dados) {
                _this.atualizar();
            });
        }
        else {
            this.us.excluir(objeto).subscribe(function (dados) {
                _this.atualizar();
            });
        }
    };
    CrudListar.prototype.atualizar = function () {
        var _this = this;
        if (this.dadosSessao == null) {
            this.us.get().subscribe(function (dados) {
                _this.dataSource.data = dados;
            });
        }
        else {
            this.dataSource.data = this.dadosSessao;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CrudListar.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CrudListar.prototype, "paginator", void 0);
    return CrudListar;
}());



/***/ }),

/***/ "./src/app/modelos/crudobjeto.ts":
/*!***************************************!*\
  !*** ./src/app/modelos/crudobjeto.ts ***!
  \***************************************/
/*! exports provided: Crudobjeto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crudobjeto", function() { return Crudobjeto; });
var Crudobjeto = /** @class */ (function () {
    // constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
    //     this.os.nomeAPI = this.nomeAPI;
    // }
    function Crudobjeto(os, router, as, cursoService) {
        this.os = os;
        this.router = router;
        this.as = as;
        this.cursoService = cursoService;
        this.campoValido = true;
        this.os.nomeAPI = this.nomeAPI;
    }
    Crudobjeto.prototype.ngOnInit = function () {
        if (this.os.getObjetoSelecionado() != null) {
            this.objeto = this.os.getObjetoSelecionado();
            if (Object.keys(this).indexOf("exibirTagVideo") > -1) {
                if (this.objeto.url.indexOf("https://api-sistema-treinamento.herokuapp") > -1 || this.objeto.url.indexOf("http://localhost") > -1) {
                    this["exibirTagVideo"] = true;
                }
            }
            if (Object.keys(this).indexOf("exibirTagEmbebed") > -1) {
                if (this.objeto.url.indexOf("https://api-sistema-treinamento.herokuapp") == -1 || this.objeto.url.indexOf("http://localhost") == -1) {
                    this["exibirTagEmbebed"] = true;
                }
            }
        }
    };
    Crudobjeto.prototype.valorDuplicado = function () {
        var _this = this;
        this.os.nomeAPI = this.nomeAPI;
        var objetoProcurado;
        this.os.filtro = this.filtro;
        this.os.getObjetoFiltro(this.objeto[this.filtro]).subscribe(function (dados) {
            objetoProcurado = dados;
            if (objetoProcurado != null) {
                _this.campoValido = false;
                _this.objeto[_this.filtro] = "";
            }
            else {
                _this.campoValido = true;
            }
        });
    };
    Crudobjeto.prototype.salvarNoCurso = function () {
        var _this = this;
        this.os.nomeAPI = this.nomeAPI;
        if (typeof this.cursoService != "undefined") {
            if (typeof this.cursoCampo != "undefined") {
                var curso = this.cursoService.getObjetoSelecionado();
                if (Object.keys(this.objeto).indexOf("_id") > -1) {
                    var pos = curso[this.cursoCampo].findIndex(function (x) { return x._id == _this.objeto._id; });
                    curso[this.cursoCampo].splice(pos, 1);
                    curso[this.cursoCampo].push(this.objeto);
                    this.objeto = curso;
                }
                else {
                    curso[this.cursoCampo].push(this.objeto);
                    this.objeto = curso;
                }
                this.os.atualizar(this.objeto).subscribe(function (dados) {
                    _this.router.navigate([_this.tela]);
                });
            }
        }
    };
    Crudobjeto.prototype.salvar = function () {
        var _this = this;
        // console.log(this.objeto);
        // console.log(this.cursoService.getObjetoSelecionado());
        this.os.nomeAPI = this.nomeAPI;
        // console.log(this.objeto);
        if (Object.keys(this.objeto).indexOf("_id") == -1) {
            if (typeof this.cursoService != "undefined") {
                var curso = this.cursoService.getObjetoSelecionado();
                curso[this.cursoCampo].push(this.objeto);
                this.objeto = curso;
                this.os.atualizar(this.objeto).subscribe(function (dados) {
                    _this.router.navigate([_this.tela]);
                });
            }
            else {
                this.os.incluir(this.objeto).subscribe(function (dados) {
                    _this.router.navigate([_this.tela]);
                });
            }
            // this.os.incluir(this.objeto).subscribe(
            //     (dados) => {
            //         this.router.navigate([this.tela]);
            //     });
        }
        else {
            if (typeof this.cursoService != "undefined") {
                var curso = this.cursoService.getObjetoSelecionado();
                var pos = curso[this.cursoCampo].findIndex(function (x) { return x._id == _this.objeto._id; });
                curso[this.cursoCampo].splice(pos, 1);
                curso[this.cursoCampo].push(this.objeto);
                this.objeto = curso;
                this.os.atualizar(this.objeto).subscribe(function (dados) {
                    _this.router.navigate([_this.tela]);
                });
            }
            else {
                this.os.atualizar(this.objeto).subscribe(function (dados) {
                    _this.router.navigate([_this.tela]);
                });
            }
            // this.os.atualizar(this.objeto).subscribe(
            //     (dados) => {
            //         this.router.navigate([this.tela]);
            //     });
        }
        // if (Object.keys(this.objeto).indexOf("_id") == -1) {
        //     this.os.incluir(this.objeto).subscribe(
        //         (dados) => {
        //             this.router.navigate([this.tela]);
        //         });
        // } else {
        //     this.os.atualizar(this.objeto).subscribe(
        //         (dados) => {
        //             this.router.navigate([this.tela]);
        //         });
        // }
    };
    Crudobjeto.prototype.compareById = function (f1, f2) {
        return f1 && f2 && f1._id === f2._id;
    };
    Crudobjeto.prototype.ehAdministrador = function () {
        if (this.as.getUsuario() != null) {
            if (this.as.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    return Crudobjeto;
}());



/***/ }),

/***/ "./src/app/modelos/inscricaomodel.ts":
/*!*******************************************!*\
  !*** ./src/app/modelos/inscricaomodel.ts ***!
  \*******************************************/
/*! exports provided: Inscricaomodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inscricaomodel", function() { return Inscricaomodel; });
var Inscricaomodel = /** @class */ (function () {
    function Inscricaomodel() {
        this.usuario = "";
        this.percentualAndamento = 0;
        this.percentualAcertos = 0;
        this.gerouCertificado = false;
        this.aprovado = false;
    }
    return Inscricaomodel;
}());



/***/ }),

/***/ "./src/app/modelos/usuariomodel.ts":
/*!*****************************************!*\
  !*** ./src/app/modelos/usuariomodel.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/paginas/alternativa/alternativa.component.css":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alternativa/alternativa.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/alternativa/alternativa.component.html":
/*!****************************************************************!*\
  !*** ./src/app/paginas/alternativa/alternativa.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"mat-elevation-z8\">\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n        <mat-form-field class=\"inputFormulario\">\n          <input matInput placeholder=\"Alternativa\" [(ngModel)]=\"objeto.alternativa\" name=\"alternativa\" required>\n        </mat-form-field>\n\n            <!-- <mat-label>Correta</mat-label>\n        <mat-button-toggle-group name=\"correta\" aria-label=\"Correta\">\n            <mat-button-toggle value=\"true\">Sim</mat-button-toggle>\n            <mat-button-toggle value=\"false\">Não</mat-button-toggle>\n          </mat-button-toggle-group> -->\n\n\n          <mat-form-field class=\"inputFormulario\">\n              <mat-label>Correta</mat-label>\n              <mat-select required [(ngModel)]=\"objeto.correta\" name=\"correta\" [compareWith]=\"compareById\">\n                <mat-option value=\"true\">Sim</mat-option>\n                <mat-option value=\"false\">Não</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n        <mat-card-actions>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/alternativas\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n          <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNaUnidade()\" aria-label=\"Salvar ação\"\n            [disabled]=\"!f.valid\">SALVAR</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/alternativa/alternativa.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/alternativa/alternativa.component.ts ***!
  \**************************************************************/
/*! exports provided: AlternativaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternativaComponent", function() { return AlternativaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/questionarios.service */ "./src/app/servicos/questionarios.service.ts");
/* harmony import */ var src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/questoes.service */ "./src/app/servicos/questoes.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlternativaComponent = /** @class */ (function (_super) {
    __extends(AlternativaComponent, _super);
    function AlternativaComponent(os, router, as, cursoService, uni, quest, questao) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.quest = quest;
        _this.questao = questao;
        _this.alternativa = {
            "alternativa": "",
            "correta": false
        };
        _this.tituloPagina = "Questão";
        _this.objeto = _this.alternativa;
        _this.nomeAPI = "cursos";
        _this.tela = "/alternativas";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    AlternativaComponent.prototype.salvarNaUnidade = function () {
        var _this = this;
        console.log(this.cursoService.getObjetoSelecionado());
        console.log(this.uni.getObjetoSelecionado());
        console.log(this.quest.getObjetoSelecionado());
        console.log(this.questao.getObjetoSelecionado());
        console.log(this.objeto);
        if (Object.keys(this.objeto).indexOf("_id") > -1) {
            // localizar a alternativa no array de alternativas do questionario
            var pos = this.questao.getObjetoSelecionado().alternativas.findIndex(function (x) { return x._id == _this.objeto._id; });
            if (pos > -1) {
                this.questao.getObjetoSelecionado().alternativas.splice(pos, 1);
                this.questao.getObjetoSelecionado().alternativas.push(this.objeto);
            }
            // localizar a questao no array de questoes do questionario
            pos = this.quest.getObjetoSelecionado().questoes.findIndex(function (x) { return x._id == _this.questao.getObjetoSelecionado()._id; });
            this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
            this.quest.getObjetoSelecionado().questoes.push(this.questao.getObjetoSelecionado());
            // localizar o questionario na unidade
            pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
            this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
            this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
            // localizar unidade no curso
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            // this.objeto = this.cursoService.getObjetoSelecionado();
        }
        else {
            var pos = this.questao.getObjetoSelecionado().alternativas.findIndex(function (x) { return x.alternativa == _this.objeto.alternativa; });
            if (pos == -1) {
                this.questao.getObjetoSelecionado().alternativas.push(this.objeto);
                // localizar a questao no array de questoes do questionario
                var pos_1 = this.quest.getObjetoSelecionado().questoes.findIndex(function (x) { return x._id == _this.questao.getObjetoSelecionado()._id; });
                this.quest.getObjetoSelecionado().questoes.splice(pos_1, 1);
                this.quest.getObjetoSelecionado().questoes.push(this.questao.getObjetoSelecionado());
                // localizar o questionario na unidade
                pos_1 = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
                this.uni.getObjetoSelecionado().questionarios.splice(pos_1, 1);
                this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
                // localizar unidade no curso
                pos_1 = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
                this.cursoService.getObjetoSelecionado().unidades.splice(pos_1, 1);
                this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            }
            // this.objeto = this.cursoService.getObjetoSelecionado();
        }
        console.log(this.cursoService.getObjetoSelecionado());
        this.os.nomeAPI = "cursos";
        this.os.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.router.navigate([_this.tela]);
        });
    };
    AlternativaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alternativa',
            template: __webpack_require__(/*! ./alternativa.component.html */ "./src/app/paginas/alternativa/alternativa.component.html"),
            styles: [__webpack_require__(/*! ./alternativa.component.css */ "./src/app/paginas/alternativa/alternativa.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"],
            src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"], src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_7__["QuestionariosService"], src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_8__["QuestoesService"]])
    ], AlternativaComponent);
    return AlternativaComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/alternativas/alternativas.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/alternativas/alternativas.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/alternativas/alternativas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paginas/alternativas/alternativas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\">{{tituloPagina}}</h2>\n    <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'alternativa')\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/questoes\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Editar\">arrow_back</i>\n    </a>\n  \n    <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n    <div class=\"mat-elevation-z8\">\n  \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"alternativa\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Alternativa</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Alternativa\">{{row.alternativa}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"correta\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Correta</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"Correta\">{{tipoAlternativa(row.correta)}}</mat-cell>\n          </ng-container>\n  \n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n            <a (click)=\"abrirDialogo(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n  \n      <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/alternativas/alternativas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paginas/alternativas/alternativas.component.ts ***!
  \****************************************************************/
/*! exports provided: AlternativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternativasComponent", function() { return AlternativasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/questionarios.service */ "./src/app/servicos/questionarios.service.ts");
/* harmony import */ var src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/questoes.service */ "./src/app/servicos/questoes.service.ts");
/* harmony import */ var _confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AlternativasComponent = /** @class */ (function (_super) {
    __extends(AlternativasComponent, _super);
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
    function AlternativasComponent(us, router, dialog, as, cursoService, uni, quest, questao) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.quest = quest;
        _this.questao = questao;
        _this.tituloPagina = "Lista de Alternativas";
        if (typeof _this.questao.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.questao.getObjetoSelecionado().alternativas;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        _this.us.nomeAPI = "cursos";
        _this.tela = "/alternativa";
        _this.displayedColumns = ['alternativa', 'correta', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    AlternativasComponent.prototype.excluirNaUnidade = function (objeto) {
        var _this = this;
        // localizar a questao no array de questoes do questionario
        var pos = this.questao.getObjetoSelecionado().alternativas.findIndex(function (x) { return x._id == objeto._id; });
        this.questao.getObjetoSelecionado().alternativas.splice(pos, 1);
        // localizar a questao no array de questoes do questionario
        pos = this.quest.getObjetoSelecionado().questoes.findIndex(function (x) { return x._id == _this.questao.getObjetoSelecionado()._id; });
        this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
        // localizar o questionario na unidade
        pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
        this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
        this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
        // localizar unidade no curso
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
        this.us.nomeAPI = "cursos";
        this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    AlternativasComponent.prototype.abrirDialogo = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluirNaUnidade(objeto);
            }
        });
    };
    AlternativasComponent.prototype.alternativas = function (questao) {
        this.questao.setObjetoSelecionado(questao);
        this.router.navigate(["/alternativas"]);
    };
    AlternativasComponent.prototype.tipoAlternativa = function (opcao) {
        if (opcao == true) {
            return "SIM";
        }
        else {
            return "NÃO";
        }
    };
    AlternativasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alternativas',
            template: __webpack_require__(/*! ./alternativas.component.html */ "./src/app/paginas/alternativas/alternativas.component.html"),
            styles: [__webpack_require__(/*! ./alternativas.component.css */ "./src/app/paginas/alternativas/alternativas.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"],
            src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_7__["UnidadesService"], src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_8__["QuestionariosService"], src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_9__["QuestoesService"]])
    ], AlternativasComponent);
    return AlternativasComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_2__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/arquivo/arquivo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paginas/arquivo/arquivo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/arquivo/arquivo.component.html":
/*!********************************************************!*\
  !*** ./src/app/paginas/arquivo/arquivo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"mat-elevation-z8\">\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n        <mat-form-field class=\"inputFormulario\">\n          <input matInput placeholder=\"Titulo\" [(ngModel)]=\"objeto.titulo\" name=\"titulo\" required>\n        </mat-form-field>\n  \n        <mat-form-field class=\"inputFormulario\">\n          <input matInput type=\"number\" placeholder=\"Posição\" [(ngModel)]=\"objeto.posicao\" name=\"posicao\" required>\n        </mat-form-field>\n  \n        <mat-tab-group>\n          <mat-tab label=\"URL para o arquivo\">\n              <mat-form-field class=\"inputFormulario\">\n                  <input matInput placeholder=\"URL\" [(ngModel)]=\"objeto.url\" name=\"url\">\n                </mat-form-field>\n          </mat-tab>\n          <mat-tab label=\"Enviar  arquivo\">\n              <button mat-button (click)=\"inputFile.click()\" class=\"btnUpload\">\n                  <i class=\"material-icons md-48\">attach_file</i>\n                  Selecionar arquivo\n                </button> {{ nomeArquivo }}\n                <input #inputFile type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"\n                  [style.display]=\"'none'\">\n          </mat-tab>\n        </mat-tab-group>\n  \n        <mat-card-actions>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/arquivos\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n          <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNaUnidade()\" aria-label=\"Salvar ação\"\n            [disabled]=\"!f.valid\">SALVAR</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/arquivo/arquivo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paginas/arquivo/arquivo.component.ts ***!
  \******************************************************/
/*! exports provided: ArquivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivoComponent", function() { return ArquivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/upload.service */ "./src/app/servicos/upload.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ArquivoComponent = /** @class */ (function (_super) {
    __extends(ArquivoComponent, _super);
    function ArquivoComponent(os, router, as, cursoService, uni, uploadService, sanitize) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.uploadService = uploadService;
        _this.sanitize = sanitize;
        _this.arquivoObjeto = {
            "titulo": "",
            "url": "",
            "posicao": 0
        };
        _this.nomeArquivo = "";
        _this.exibirTagVideo = false;
        _this.exibirTagEmbebed = false;
        _this.tituloPagina = "ARQUIVO";
        _this.objeto = _this.arquivoObjeto;
        _this.nomeAPI = "cursos";
        _this.tela = "/arquivos";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.uploadedFiles = new Array();
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    ArquivoComponent.prototype.sanitizarURL = function (url) {
        return this.sanitize.bypassSecurityTrustResourceUrl(url);
    };
    ArquivoComponent.prototype.salvarNaUnidade = function () {
        var _this = this;
        if (this.uploadedFiles.length > 0) {
            this.objeto.url = "https://api-sistema-treinamento.herokuapp.com/download/" + this.upload();
        }
        if (Object.keys(this.objeto).indexOf("_id") > -1) {
            var pos = this.uni.getObjetoSelecionado().arquivos.findIndex(function (x) { return x._id == _this.objeto._id; });
            this.uni.getObjetoSelecionado().arquivos.splice(pos, 1);
            this.uni.getObjetoSelecionado().arquivos.push(this.objeto);
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        else {
            this.uni.getObjetoSelecionado().arquivos.push(this.objeto);
            var pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        this.os.nomeAPI = "cursos";
        this.os.atualizar(this.objeto).subscribe(function (dados) {
            _this.router.navigate([_this.tela]);
        });
    };
    ArquivoComponent.prototype.fileChange = function (element) {
        this.uploadedFiles = element.target.files;
        this.nomeArquivo = element.target.files[0].name;
    };
    ArquivoComponent.prototype.upload = function () {
        var formData = new FormData();
        this.cont = new Array();
        var nome = "";
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            this.cont.push(this.uploadedFiles[i].name);
            formData.append("upload", this.uploadedFiles[i], new Date().getTime() + this.uploadedFiles[i].name);
            nome = formData.get("upload")["name"];
        }
        this.uploadService.upload(formData).subscribe(function (dados) {
            nome = formData.get("upload")["name"];
        });
        return nome;
    };
    ArquivoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arquivo',
            template: __webpack_require__(/*! ./arquivo.component.html */ "./src/app/paginas/arquivo/arquivo.component.html"),
            styles: [__webpack_require__(/*! ./arquivo.component.css */ "./src/app/paginas/arquivo/arquivo.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"],
            src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"], src_app_servicos_upload_service__WEBPACK_IMPORTED_MODULE_7__["UploadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], ArquivoComponent);
    return ArquivoComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/arquivos/arquivos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/arquivos/arquivos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/arquivos/arquivos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/arquivos/arquivos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">file_copy</i> {{tituloPagina}}</h2>\n    <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'arquivo')\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/unidades\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Editar\">arrow_back</i>\n    </a>\n  \n    <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n    <div class=\"mat-elevation-z8\">\n  \n  \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"titulo\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Titulo</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.titulo}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"url\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>URL</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"URL\">{{row.url}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"posicao\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 80px;\">Posição</mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"Posição\" style=\"max-width: 80px\">{{row.posicao}}</mat-cell>\n            </ng-container>\n  \n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n            <a (click)=\"abrirDialogo(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n  \n      <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/arquivos/arquivos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/arquivos/arquivos.component.ts ***!
  \********************************************************/
/*! exports provided: ArquivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivosComponent", function() { return ArquivosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var _confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ArquivosComponent = /** @class */ (function (_super) {
    __extends(ArquivosComponent, _super);
    function ArquivosComponent(us, router, dialog, as, cursoService, uni) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.tituloPagina = "Lista de Arquivos";
        if (typeof _this.uni.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.uni.getObjetoSelecionado().arquivos;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        _this.us.nomeAPI = "cursos";
        _this.tela = "/arquivo";
        _this.displayedColumns = ['titulo', 'url', 'posicao', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    ArquivosComponent.prototype.excluirNaUnidade = function (objeto) {
        var _this = this;
        var pos = this.uni.getObjetoSelecionado().arquivos.findIndex(function (x) { return x._id == objeto._id; });
        this.uni.getObjetoSelecionado().arquivos.splice(pos, 1);
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        var unidade = this.uni.getObjetoSelecionado();
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
        this.us.nomeAPI = "cursos";
        this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    ArquivosComponent.prototype.abrirDialogo = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluirNaUnidade(objeto);
            }
        });
    };
    ArquivosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arquivos',
            template: __webpack_require__(/*! ./arquivos.component.html */ "./src/app/paginas/arquivos/arquivos.component.html"),
            styles: [__webpack_require__(/*! ./arquivos.component.css */ "./src/app/paginas/arquivos/arquivos.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_7__["UnidadesService"]])
    ], ArquivosComponent);
    return ArquivosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/assistirvideo/assistirvideo.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/assistirvideo/assistirvideo.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/assistirvideo/assistirvideo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/assistirvideo/assistirvideo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"mat-elevation-z8\">\n\n      <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n          <mat-grid-tile><h2>{{video.titulo}}</h2></mat-grid-tile>\n          <mat-grid-tile><a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/cursodetalhes\">\n            <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n          </a></mat-grid-tile>\n        </mat-grid-list>\n   \n    \n    <div class=\"video-container\">\n      <video controls [src]=\"sanitizarURL(video.url)\" width=\"426\" height=\"240\" [hidden]=\"!exibirTagVideo\"></video>\n      <iframe width=\"426\" height=\"240\" [src]=\"sanitizarURL(video.url)\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n        allowfullscreen [hidden]=\"!exibirTagEmbebed\"></iframe>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/assistirvideo/assistirvideo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/assistirvideo/assistirvideo.component.ts ***!
  \******************************************************************/
/*! exports provided: AssistirvideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistirvideoComponent", function() { return AssistirvideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssistirvideoComponent = /** @class */ (function () {
    function AssistirvideoComponent(sanitize, os, router) {
        this.sanitize = sanitize;
        this.os = os;
        this.router = router;
        this.exibirTagVideo = false;
        this.exibirTagEmbebed = false;
        this.video = this.os.getObjetoSelecionado();
        this.exibirVideo(this.video.url);
    }
    AssistirvideoComponent.prototype.ngOnInit = function () {
        this.video = this.os.getObjetoSelecionado();
        this.exibirVideo(this.video.url);
    };
    AssistirvideoComponent.prototype.sanitizarURL = function (url) {
        return this.sanitize.bypassSecurityTrustResourceUrl(url);
    };
    AssistirvideoComponent.prototype.exibirVideo = function (url) {
        if (url.indexOf("https://api-sistema-treinamento.herokuapp") > -1 || url.indexOf("http://localhost") > -1) {
            this.exibirTagVideo = true;
            this.exibirTagEmbebed = false;
        }
        else {
            this.exibirTagVideo = false;
            this.exibirTagEmbebed = true;
        }
    };
    AssistirvideoComponent.prototype.voltar = function () {
        this.router.navigate(["/cursodetalhes"]);
    };
    AssistirvideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assistirvideo',
            template: __webpack_require__(/*! ./assistirvideo.component.html */ "./src/app/paginas/assistirvideo/assistirvideo.component.html"),
            styles: [__webpack_require__(/*! ./assistirvideo.component.css */ "./src/app/paginas/assistirvideo/assistirvideo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AssistirvideoComponent);
    return AssistirvideoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/confirmacao/confirmacao.component.css":
/*!***************************************************************!*\
  !*** ./src/app/paginas/confirmacao/confirmacao.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/confirmacao/confirmacao.component.html":
/*!****************************************************************!*\
  !*** ./src/app/paginas/confirmacao/confirmacao.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  {{message}}\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" aria-label=\"Cancelar ação\">Não</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial aria-label=\"Confirmar ação\">Sim</button>\n</div>"

/***/ }),

/***/ "./src/app/paginas/confirmacao/confirmacao.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/confirmacao/confirmacao.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacaoComponent", function() { return ConfirmacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmacaoComponent = /** @class */ (function () {
    function ConfirmacaoComponent(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ConfirmacaoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmacao',
            template: __webpack_require__(/*! ./confirmacao.component.html */ "./src/app/paginas/confirmacao/confirmacao.component.html"),
            styles: [__webpack_require__(/*! ./confirmacao.component.css */ "./src/app/paginas/confirmacao/confirmacao.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], ConfirmacaoComponent);
    return ConfirmacaoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/curso/curso.component.css":
/*!***************************************************!*\
  !*** ./src/app/paginas/curso/curso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/curso/curso.component.html":
/*!****************************************************!*\
  !*** ./src/app/paginas/curso/curso.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"mat-elevation-z8\">\n    <form class=\"form my-2 my-lg-0\" #f=\"ngForm\">\n      <mat-form-field class=\"inputFormulario\">\n        <input matInput placeholder=\"Nome\" [(ngModel)]=\"objeto.titulo\" name=\"titulo\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"inputFormulario\">\n        <input matInput placeholder=\"Nome do Instrutor\" [(ngModel)]=\"objeto.nomeInstrutor\" name=\"nomeInstrutor\"\n          required>\n      </mat-form-field>\n      <!-- <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"emailValido\">\n                <i class=\"material-icons\">error</i> Email já cadastrado\n              </div> -->\n\n\n      <mat-form-field class=\"inputFormulario\">\n        <input matInput placeholder=\"Palavra-Chave\" [(ngModel)]=\"objeto.palavrasChave\" name=\"palavrasChave\"\n          required>\n      </mat-form-field>\n\n      <mat-form-field class=\"inputFormulario\">\n        <mat-label>Categoria</mat-label>\n        <mat-select required [(ngModel)]=\"objeto.categoria\" name=\"categoria\" [compareWith]=\"compareById\">\n          <mat-option *ngFor=\"let t of categorias\" [value]=\"t\">\n            {{t.nome}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-card-actions>\n        <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/cursos\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n        <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n        <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvar()\" aria-label=\"Salvar ação\" [disabled]=\"!f.valid\">SALVAR</button>\n      </mat-card-actions>\n    </form>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/curso/curso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paginas/curso/curso.component.ts ***!
  \**************************************************/
/*! exports provided: CursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoComponent", function() { return CursoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CursoComponent = /** @class */ (function (_super) {
    __extends(CursoComponent, _super);
    function CursoComponent(os, router, as) {
        var _this = _super.call(this, os, router, as) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.curso = {
            "titulo": "",
            "nomeInstrutor": "",
            "palavrasChave": "",
            "categoria": {},
            "unidades": [],
            "avaliacoes": [],
            "inscricoes": []
        };
        _this.categorias = [];
        _this.tituloPagina = "Lista de cursos";
        _this.objeto = _this.curso;
        _this.nomeAPI = "cursos";
        _this.tela = "/cursos";
        _this.filtro = "titulo";
        _this.getCategorias();
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    CursoComponent.prototype.getCategorias = function () {
        var _this = this;
        this.os.nomeAPI = "cursocategoria";
        this.os.get().subscribe(function (dados) {
            _this.categorias = dados;
        });
    };
    CursoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-curso',
            template: __webpack_require__(/*! ./curso.component.html */ "./src/app/paginas/curso/curso.component.html"),
            styles: [__webpack_require__(/*! ./curso.component.css */ "./src/app/paginas/curso/curso.component.css")]
        })
        // export class CursoComponent implements OnInit {
        //   constructor() { }
        //   ngOnInit() {
        //   }
        // }
        ,
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"]])
    ], CursoComponent);
    return CursoComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/cursodetalhes/cursodetalhes.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/cursodetalhes/cursodetalhes.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/cursodetalhes/cursodetalhes.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/cursodetalhes/cursodetalhes.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n\n  <mat-card class=\"example-card\">\n      <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/cursos\" style=\"float: right;\">\n        <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n      </a>\n\n      <a (click)=\"inscrever()\" class=\"inscrever\" title=\"Inscrever no curso\" style=\"float: right;margin-top: 5px\"><i class=\"material-icons md-48\" *ngIf=\"!this.usuService.ehAdministrador() && !desinscrever()\">check_circle</i></a>\n      <a (click)=\"sairCurso()\" class=\"sairCurso\" title=\"Sair do curso\" style=\"float: right;margin-top: 5px\"><i class=\"material-icons md-48\" *ngIf=\"desinscrever()\">highlight_off</i></a>\n\n    <div class=\"subUnidade\" style=\"background: #29374a; margin-bottom: 20px;\">\n      <a (click)=\"gerarPDF()\" [hidden]=\"!podeGerarCertificado\" class=\"btnGerarCertificado\"><i class=\"material-icons md-48\" title=\"Gerar Certificado\">picture_as_pdf</i></a>\n      <mat-list>\n        <mat-list-item><h2 style=\"color: #6db5ca\">{{curso.titulo}}</h2></mat-list-item>\n        <mat-list-item><h2 style=\"color: #ccc\">Instrutor: {{curso.nomeInstrutor}}</h2></mat-list-item>\n        <mat-list-item><h2 style=\"color: #ccc\">Categoria: {{curso.categoria.nome}}</h2></mat-list-item>\n        <mat-list-item><h2 style=\"color: #ccc\">Palavras-chave: {{curso.palavrasChave}}</h2></mat-list-item>\n      </mat-list>\n\n    </div>\n\n    <mat-card-content>\n        \n      <mat-card class=\"example-card\" *ngFor=\"let u of curso.unidades\" style=\"background: #29374a; margin-bottom: 20px;\">\n          \n        <h3 style=\"color: rgb(221, 136, 24);padding-bottom: 5px;font-size: 1.5em\">{{u.titulo}}</h3>\n\n        <div class=\"subUnidade\" *ngIf=\"u.videos.length > 0\">\n          <h3 style=\"font-size: 1.5em; color: #ccc\">Videos</h3>\n          <mat-list *ngFor=\"let v of u.videos\">\n            <mat-list-item>\n              <a (click)=\"assistirVideo(v)\" title=\"Videos\" style=\"font-size: 1.2em;cursor: pointer;\"><i class=\"material-icons md-48 btnCRUDEditar\"\n                  title=\"{{v.titulo}}\">video_label</i> {{v.titulo}}</a>\n            </mat-list-item>\n          </mat-list>\n        </div>\n\n        <div class=\"subUnidade\" *ngIf=\"u.arquivos.length > 0\">\n          <h3 style=\"font-size: 1.5em; color: #ccc\">Arquivos</h3>\n          <mat-list *ngFor=\"let v of u.arquivos\">\n            <mat-list-item>\n              <a href=\"{{v.url}}\" style=\"font-size: 1.2em; color: #eee; text-decoration: none\" target=\"_blank\"><i class=\"material-icons md-48 btnCRUDEditar\"\n                  title=\"Arquivos\">file_copy</i> {{v.titulo}}</a>\n            </mat-list-item>\n          </mat-list>\n        </div>\n\n        <div class=\"subUnidade\" *ngIf=\"u.questionarios.length > 0 && inscritoNoCurso()\">\n          <h3 style=\"font-size: 1.5em; color: #ccc\">Questionários</h3>\n          <mat-list *ngFor=\"let v of u.questionarios\">\n            <mat-list-item>\n              <a (click)=\"questionario(v)\" style=\"font-size: 1.2em; color: #eee; text-decoration: none;cursor: pointer;\" target=\"_blank\"><i\n                  class=\"material-icons md-48 btnCRUDEditar\" title=\"Questionário\">question_answer</i> {{v.titulo}}</a>\n            </mat-list-item>\n          </mat-list>\n        </div>\n      </mat-card>\n\n      <mat-card class=\"example-card\" style=\"background: #29374a; margin-bottom: 20px;\">\n          <h3 style=\"font-size: 1.5em; color: #ccc\">Avaliações dos alunos</h3>\n\n          <div class=\"mat-elevation-z8\" [hidden]=\"!mostrarFormAvaliacao\">\n              <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n\n                <span class=\"inputFormulario\" style=\"color:#26C6DA\">Nota *</span><br><br>\n                \n                <mat-star-rating [rating]=\"rating\" [starCount]=\"starCount\" [color]=\"starColor\" (ratingUpdated)=\"onRatingChanged($event)\"></mat-star-rating>\n                <br>\n                <mat-form-field class=\"inputFormulario\">\n                    <input matInput placeholder=\"Comentário\" [(ngModel)]=\"avaliacao.comentario\" name=\"comentario\" required>\n                  </mat-form-field>\n        \n                <mat-card-actions>\n                  <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarAvaliacao()\" aria-label=\"Salvar ação\"\n                    [disabled]=\"!f.valid\">SALVAR</button>\n                </mat-card-actions>\n              </form>\n            </div>\n\n            <div class=\"divComentario\" *ngFor=\"let a of curso.avaliacoes\" style=\"margin-top: 20px;\">\n              <mat-star-rating [rating]=\"a.nota\"  [starCount]=\"starCount\" [color]=\"starColor\" style=\"float: right\"></mat-star-rating>\n              <span style=\"float: left\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Usuário\">account_box</i> {{a.usuario.nome}}</span>\n              <br><br><br>\n              <div style=\"width: 100%\">{{a.comentario}}</div>\n            </div>\n      </mat-card>\n\n    </mat-card-content>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/paginas/cursodetalhes/cursodetalhes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/cursodetalhes/cursodetalhes.component.ts ***!
  \******************************************************************/
/*! exports provided: CursodetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursodetalhesComponent", function() { return CursodetalhesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modelos_inscricaomodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modelos/inscricaomodel */ "./src/app/modelos/inscricaomodel.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_modelos_certificado__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modelos/certificado */ "./src/app/modelos/certificado.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CursodetalhesComponent = /** @class */ (function () {
    function CursodetalhesComponent(cursoService, sanitize, usuService, uniService, objService, router) {
        // this.curso = this.cursoService.getObjetoSelecionado();
        this.cursoService = cursoService;
        this.sanitize = sanitize;
        this.usuService = usuService;
        this.uniService = uniService;
        this.objService = objService;
        this.router = router;
        this.podeGerarCertificado = false;
        this.starColor = "primary";
        this.avaliacao = {
            "usuario": "",
            "nota": 0,
            "comentario": ""
        };
        this.mostrarFormAvaliacao = true;
        this.c = new src_app_modelos_certificado__WEBPACK_IMPORTED_MODULE_9__["Certificado"]();
        this.starCount = 5;
        this.rating = 3;
        this.color = "primary";
        this.inicializar();
        // let cursoAtualizado = this.c.verificarConclusao(this.cursoService.getObjetoSelecionado(), this.usuService.getUsuario());
        // this.objService.nomeAPI = "cursos";
        // this.objService.atualizar(cursoAtualizado).subscribe(
        //   (dados) => {
        //     this.cursoService.setObjetoSelecionado(cursoAtualizado);
        //   });
    }
    CursodetalhesComponent.prototype.ngOnInit = function () {
        // this.curso = this.cursoService.getObjetoSelecionado();
        // let logado = this.usuService.getUsuario();
        // let inscrito = false;
        // if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(x => x.usuario._id == logado._id) > -1) {
        //   inscrito = true;
        // } else {
        //   inscrito = false;
        // }
        // if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id) == -1) {
        //   this.mostrarFormAvaliacao = true;
        // } else {
        //   this.mostrarFormAvaliacao = false;
        // }
        this.inicializar();
        // let pos = this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(x => x.usuario._id == logado._id);
        // if(pos > -1) {
        //   this.mostrarFormAvaliacao = false;
        // } else {
        //   this.mostrarFormAvaliacao = true;
        // }
        // if(this.cursoService.getObjetoSelecionado().avaliacoes.length > 0) {
        //   this.mostrarFormAvaliacao = false;
        // }
    };
    CursodetalhesComponent.prototype.inicializar = function () {
        var _this = this;
        this.curso = this.cursoService.getObjetoSelecionado();
        var logado = this.usuService.getUsuario();
        var inscrito = false;
        if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(function (x) { return x.usuario._id == logado._id; }) > -1) {
            inscrito = true;
        }
        else {
            inscrito = false;
        }
        if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(function (x) { return x.usuario._id == logado._id; }) == -1) {
            this.mostrarFormAvaliacao = true;
        }
        else {
            this.mostrarFormAvaliacao = false;
        }
        if (inscrito) {
            var cursoAtualizado_1 = this.c.verificarConclusao(this.cursoService.getObjetoSelecionado(), this.usuService.getUsuario());
            this.objService.nomeAPI = "cursos";
            this.objService.atualizar(cursoAtualizado_1).subscribe(function (dados) {
                _this.cursoService.setObjetoSelecionado(cursoAtualizado_1);
            });
            var insc = cursoAtualizado_1.inscricoes.find(function (x) { return x.usuario._id == logado._id; });
            this.podeGerarCertificado = insc.aprovado;
        }
    };
    CursodetalhesComponent.prototype.mostrarFormComentario = function () {
        var inscrito = false;
        var logado = this.usuService.getUsuario();
        if (this.cursoService.getObjetoSelecionado().inscricoes.findIndex(function (x) { return x.usuario._id == logado._id; }) > -1) {
            inscrito = true;
        }
        else {
            inscrito = false;
        }
        if (inscrito && this.cursoService.getObjetoSelecionado().avaliacoes.findIndex(function (x) { return x.usuario._id == logado._id; }) == -1) {
            this.mostrarFormAvaliacao = true;
        }
        else {
            this.mostrarFormAvaliacao = false;
        }
    };
    CursodetalhesComponent.prototype.sanitizarURL = function (url) {
        return this.sanitize.bypassSecurityTrustResourceUrl(url);
    };
    CursodetalhesComponent.prototype.exibirVideo = function (url) {
        if (url.indexOf("https://api-sistema-treinamento.herokuapp") > -1 || url.indexOf("http://localhost") > -1) {
            return true;
        }
        return false;
    };
    CursodetalhesComponent.prototype.exibirTagEmbebed = function (url) {
        if (url.indexOf("https://api-sistema-treinamento.herokuapp") > -1 || url.indexOf("http://localhost") > -1) {
            return false;
        }
        return true;
    };
    CursodetalhesComponent.prototype.salvarAvaliacao = function () {
        var _this = this;
        this.avaliacao.usuario = this.usuService.getUsuario();
        this.avaliacao.nota = this.rating;
        this.cursoService.getObjetoSelecionado().avaliacoes.push(this.avaliacao);
        this.objService.nomeAPI = "cursos";
        this.objService.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.mostrarFormAvaliacao = false;
            _this.cursoService.setObjetoSelecionado(_this.cursoService.getObjetoSelecionado());
        });
    };
    CursodetalhesComponent.prototype.assistirVideo = function (video) {
        var _this = this;
        if (video.vistoPor.findIndex(function (x) { return x._id == _this.usuService.getUsuario()._id; }) == -1) {
            video.vistoPor.push(this.usuService.getUsuario());
            var curso_1 = this.cursoService.getObjetoSelecionado();
            curso_1.unidades.forEach(function (unidade) {
                var pos = unidade.videos.indexOf(function (vi) { return vi._id == video._id; });
                if (pos > -1) {
                    unidade.videos.splice(pos, 1);
                    unidade.videos.push(video);
                }
            });
            this.objService.nomeAPI = "cursos";
            this.objService.atualizar(curso_1).subscribe(function (dados) {
                _this.cursoService.setObjetoSelecionado(curso_1);
            });
        }
        this.objService.nomeAPI = "videos";
        this.objService.setObjetoSelecionado(video);
        this.router.navigate(["/assistirvideo"]);
    };
    CursodetalhesComponent.prototype.onRatingChanged = function (rating) {
        this.rating = rating;
    };
    CursodetalhesComponent.prototype.inscritoNoCurso = function () {
        var logado = this.usuService.getUsuario();
        if (this.curso.inscricoes.findIndex(function (x) { return x.usuario._id == logado._id; }) > -1) {
            return true;
        }
        return false;
    };
    CursodetalhesComponent.prototype.inscrever = function () {
        var _this = this;
        var inscricao = new src_app_modelos_inscricaomodel__WEBPACK_IMPORTED_MODULE_7__["Inscricaomodel"]();
        var curso = this.cursoService.getObjetoSelecionado();
        inscricao.usuario = this.usuService.getUsuario();
        curso.inscricoes.push(inscricao);
        this.objService.nomeAPI = "cursos";
        this.objService.atualizar(curso).subscribe(function (dados) {
            _this.mostrarFormComentario();
            _this.curso = curso;
        });
    };
    CursodetalhesComponent.prototype.desinscrever = function () {
        var curso = this.cursoService.getObjetoSelecionado();
        var usuario = this.usuService.getUsuario();
        return (curso.inscricoes.find(function (x) { return x.usuario._id == usuario._id; }) != null);
    };
    CursodetalhesComponent.prototype.sairCurso = function () {
        var _this = this;
        var curso = this.cursoService.getObjetoSelecionado();
        var usuario = this.usuService.getUsuario();
        var pos = curso.inscricoes.findIndex(function (x) { return x.usuario._id == usuario._id; });
        curso.inscricoes.splice(pos, 1);
        this.objService.nomeAPI = "cursos";
        this.objService.atualizar(curso).subscribe(function (dados) {
            _this.mostrarFormComentario();
            _this.curso = curso;
        });
    };
    CursodetalhesComponent.prototype.questionario = function (q) {
        this.objService.setObjetoSelecionado(q);
        this.router.navigate(["/questionarioaluno"]);
    };
    CursodetalhesComponent.prototype.gerarPDF = function () {
        var curso = this.cursoService.getObjetoSelecionado();
        var usuario = this.usuService.getUsuario();
        var insc = curso.inscricoes.find(function (x) { return x.usuario._id == usuario._id; });
        if (insc != null) {
            insc.gerouCertificado = true;
            var pos = curso.inscricoes.findIndex(function (x) { return x.usuario._id == usuario._id; });
            curso.inscricoes.splice(pos, 1);
            curso.inscricoes.push(insc);
            this.objService.nomeAPI = "cursos";
            this.objService.atualizar(curso).subscribe(function (dados) {
                var documento = new jspdf__WEBPACK_IMPORTED_MODULE_8__();
                documento.setFont("Courier");
                documento.setFontStyle("bold");
                documento.setFontSize(20);
                documento.text("CERTIFICADO DE PARTICIPAÇÃO", 50, 15);
                documento.setFontStyle("bold");
                documento.text(usuario.nome, 60, 30);
                documento.setFontSize(12);
                documento.text("finalizou o curso de " + curso.titulo + ", assistindo todos os videos e com " + insc.percentualAcertos + "% de", 10, 45);
                documento.text("aproveitamento nos exercicios.", 10, 55);
                documento.text("SISTREN - Sistema de treinamento on-line", 50, 80);
                documento.output("dataurlnewwindow");
            });
        }
        // let documento = new jsPDF();
        // documento.text("Relatório em PDF no Angular", 10, 10);
        // documento.output("dataurlnewwindow");
        // documento.setFillColor(50, 50, 50);
        // documento.rect(10, 20, 30, 8, "FD");
        // documento.rect(10, 28, 30, 8, "FD");
        // documento.rect(10, 36, 30, 8, "FD");
        // // documento.rect(40, 20, 160, 8, "s");
        // // documento.rect(40, 28, 160, 8, "s");
        // // documento.rect(40, 36, 160, 8, "s");
        // documento.setFontSize(12);
        // documento.setTextColor(255, 255, 255);
        // documento.text("Código", 12, 25);
        // documento.text("Nome", 12, 33);
        // documento.text("Preço", 12, 41);
        // documento.setFontStyle("normal");
        // documento.setTextColor(0, 0, 0);
        // documento.text("001", 42, 25);
        // documento.text("Notebook 14' i7 8GB 1TB", 42, 33);
        // documento.text("R$ 2400,00", 42, 41);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rating'),
        __metadata("design:type", Number)
    ], CursodetalhesComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('starCount'),
        __metadata("design:type", Number)
    ], CursodetalhesComponent.prototype, "starCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('color'),
        __metadata("design:type", String)
    ], CursodetalhesComponent.prototype, "color", void 0);
    CursodetalhesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cursodetalhes',
            template: __webpack_require__(/*! ./cursodetalhes.component.html */ "./src/app/paginas/cursodetalhes/cursodetalhes.component.html"),
            styles: [__webpack_require__(/*! ./cursodetalhes.component.css */ "./src/app/paginas/cursodetalhes/cursodetalhes.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__["CursosService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_4__["UnidadesService"], src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_5__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CursodetalhesComponent);
    return CursodetalhesComponent;
}());

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/paginas/cursos/cursos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paginas/cursos/cursos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/cursos/cursos.component.html":
/*!******************************************************!*\
  !*** ./src/app/paginas/cursos/cursos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">school</i> {{tituloPagina}}</h2>\n  <a mat-fab href=\"{{tela}}\" class=\"btnNovo\" title=\"Novo\">\n    <i class=\"material-icons md-48\">add</i>\n  </a>\n\n  <!-- <a mat-raised-button  color=\"primary\" class=\"incluir\" href=\"{{tela}}\" style=\"float: right;\"><i class=\"material-icons md-48\">person_add</i> INCLUIR</a> -->\n  <div fxLayout fxLayoutAlign=\"right right\">\n    <mat-form-field class=\"filtro formFiltro\">\n      <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n    </mat-form-field>\n  </div>\n  <div class=\"mat-elevation-z8\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"titulo\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Nome</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.titulo}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"nomeInstrutor\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Instrutor</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Instrutor\">{{row.nomeInstrutor}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"palavrasChaves\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Palavras-chave</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Palavras-chave\">{{row.palavrasChave}}\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"categoria\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Categoria</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Categoria\">{{row.categoria?.nome}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"unidades\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Unidades</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Unidades\">\n              <a (click)=\"unidades(row)\" class=\"btnUnidades\" title=\"Unidades\"><i class=\"material-icons md-48\" *ngIf=\"this.as.ehAdministrador()\">view_list</i></a>\n          </mat-cell>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"acessar\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Acessar</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Acessar\">\n              <a (click)=\"detalhes(row)\" class=\"btnUnidades\" title=\"Acessar Curso\"><i class=\"material-icons md-48\">launch</i></a>\n          </mat-cell>\n        </ng-container>\n\n      <!-- <ng-container matColumnDef=\"tipo\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Tipo\">{{mostrarTipo(row.tipo)}}</mat-cell>\n      </ng-container> -->\n\n      <ng-container matColumnDef=\"acoes\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n          <a (click)=\"inscrever(row)\" class=\"inscrever\" title=\"Inscrever\"><i class=\"material-icons md-48\" *ngIf=\"!this.as.ehAdministrador() && !desinscrever(row)\">check_circle</i></a>\n          <a (click)=\"sairCurso(row)\" class=\"sairCurso\" title=\"Sair do curso\"><i class=\"material-icons md-48\" *ngIf=\"desinscrever(row)\">highlight_off</i></a>\n          <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\" *ngIf=\"this.as.ehAdministrador()\">edit</i></a>\n          <a (click)=\"openDialog(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\" *ngIf=\"this.as.ehAdministrador()\">delete</i></a>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n    </mat-paginator>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/cursos/cursos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paginas/cursos/cursos.component.ts ***!
  \****************************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_modelos_inscricaomodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/inscricaomodel */ "./src/app/modelos/inscricaomodel.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CursosComponent = /** @class */ (function (_super) {
    __extends(CursosComponent, _super);
    function CursosComponent(us, router, dialog, as, cursoService) {
        var _this = _super.call(this, us, router, dialog) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.tituloPagina = "Lista de cursos";
        _this.us.nomeAPI = "cursos";
        _this.tela = "/curso";
        var logado = _this.as.getUsuario();
        _this.displayedColumns = ['titulo', 'nomeInstrutor', 'palavrasChaves', 'categoria', 'unidades', 'acessar', 'acoes'];
        if (logado.tipo.tipo == "Empregado") {
            _this.displayedColumns = ['titulo', 'nomeInstrutor', 'palavrasChaves', 'categoria', 'acessar', 'acoes'];
        }
        _this.as.permissaoAcesso("LOGADO", "Acesso Negado");
        return _this;
    }
    CursosComponent.prototype.inscrever = function (curso) {
        var _this = this;
        var inscricao = new src_app_modelos_inscricaomodel__WEBPACK_IMPORTED_MODULE_6__["Inscricaomodel"]();
        inscricao.usuario = this.as.getUsuario();
        curso.inscricoes.push(inscricao);
        this.us.atualizar(curso).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    CursosComponent.prototype.desinscrever = function (curso) {
        var usuario = this.as.getUsuario();
        return (curso.inscricoes.find(function (x) { return x.usuario._id == usuario._id; }) != null);
    };
    CursosComponent.prototype.detalhes = function (curso) {
        this.cursoService.setObjetoSelecionado(curso);
        this.router.navigate(["/cursodetalhes"]);
    };
    CursosComponent.prototype.unidades = function (uni) {
        // this.us.nomeAPI = "unidades";
        // this.uniServ.setObjetoSelecionado(uni);
        this.us.nomeAPI = "cursos";
        this.cursoService.setObjetoSelecionado(uni);
        this.router.navigate(["/unidades"]);
    };
    CursosComponent.prototype.sairCurso = function (curso) {
        var _this = this;
        var usuario = this.as.getUsuario();
        var pos = curso.inscricoes.findIndex(function (x) { return x.usuario._id == usuario._id; });
        curso.inscricoes.splice(pos, 1);
        this.us.atualizar(curso).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    CursosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cursos',
            template: __webpack_require__(/*! ./cursos.component.html */ "./src/app/paginas/cursos/cursos.component.html"),
            styles: [__webpack_require__(/*! ./cursos.component.css */ "./src/app/paginas/cursos/cursos.component.css")]
        })
        // export class CursosComponent implements OnInit {
        //   constructor() { }
        //   ngOnInit() {
        //   }
        // }
        ,
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"]])
    ], CursosComponent);
    return CursosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/cursoscategoria/cursoscategoria.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/cursoscategoria/cursoscategoria.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/cursoscategoria/cursoscategoria.component.html":
/*!************************************************************************!*\
  !*** ./src/app/paginas/cursoscategoria/cursoscategoria.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"mat-elevation-z8\">\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\">\n          <mat-form-field class=\"inputFormulario\">\n              <input matInput placeholder=\"Nome\" [(ngModel)]=\"objeto.nome\" name=\"nome\" required (blur)=\"valorDuplicado()\">\n            </mat-form-field>\n\n          <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"campoValido\">\n              <i class=\"material-icons\">error</i> Categoria já cadastrada\n            </div>\n\n          <mat-card-actions>\n            <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/cursoscategorias\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n            <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n            <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvar()\" aria-label=\"Salvar ação\" [disabled]=\"!f.valid\">SALVAR</button>\n          </mat-card-actions>\n        </form>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/cursoscategoria/cursoscategoria.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/paginas/cursoscategoria/cursoscategoria.component.ts ***!
  \**********************************************************************/
/*! exports provided: CursoscategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoscategoriaComponent", function() { return CursoscategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CursoscategoriaComponent = /** @class */ (function (_super) {
    __extends(CursoscategoriaComponent, _super);
    function CursoscategoriaComponent(os, router, as) {
        var _this = _super.call(this, os, router, as) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.categoria = {
            "nome": ""
        };
        _this.tituloPagina = "Lista de usuários";
        _this.objeto = _this.categoria;
        _this.nomeAPI = "cursocategoria";
        _this.tela = "/cursoscategorias";
        _this.filtro = "nome";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    CursoscategoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cursoscategoria',
            template: __webpack_require__(/*! ./cursoscategoria.component.html */ "./src/app/paginas/cursoscategoria/cursoscategoria.component.html"),
            styles: [__webpack_require__(/*! ./cursoscategoria.component.css */ "./src/app/paginas/cursoscategoria/cursoscategoria.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], CursoscategoriaComponent);
    return CursoscategoriaComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_4__["Crudobjeto"]));

// export class CursoscategoriaComponent implements OnInit {
//   categoriaValida = true;
//   categoria = {
//     "nome": ""
//   };
//   constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
//     this.os.nomeAPI = "cursocategoria";
//   }
//   ngOnInit() {
//     if (this.os.getObjetoSelecionado() != null) {
//       this.categoria = this.os.getObjetoSelecionado();
//     }
//   }
//   categoriaDuplicada() {
//     let categoriaCurso: any;
//     this.os.filtro = "nome";
//     this.os.getObjetoFiltro(this.categoria.nome).subscribe((dados: any) => {
//       categoriaCurso = dados;
//       if (categoriaCurso != null) {
//         this.categoriaValida = false;
//         this.categoria.nome = "";
//       } else {
//         this.categoriaValida = true;
//       }
//     });
//   }
//   salvar() {
//     let tela = "/cursoscategorias";
//     if (Object.keys(this.categoria).indexOf("_id") == -1) {
//       this.os.incluir(this.categoria).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     } else {
//       this.os.atualizar(this.categoria).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     }
//   }
// }
// export class UsuarioComponent implements OnInit {
//   usuario = new Usuario();
//   tipoUsuario = [];
//   emailValido = true;
//   constructor(public us: UsuariosService, public ut: UsuariotipoService, public router: Router, public as: AutenticacaoService) {
//     this.usuario = new Usuario();
//     this.ut.getTiposUsuario().subscribe((dados: any[]) => {
//       this.tipoUsuario = dados;
//     });
//   }
//   ngOnInit() {
//     if (this.us.getObjetoSelecionado() != null) {
//       this.usuario = this.us.getObjetoSelecionado();
//     }
//   }
//   compareById(f1: any, f2: any): boolean {
//     return f1 && f2 && f1._id === f2._id;
//   }
//   emailDuplicado() {
//     let usuemail: Usuario;
//     this.us.getUsuarioEmail(this.usuario.email).subscribe((dados: Usuario) => {
//       usuemail = dados;
//       if(usuemail != null) {
//         this.emailValido = false;
//         this.usuario.email = "";
//       } else {
//         this.emailValido = true;
//       }
//     });
//   }
//   ehAdministrador() {
//     if(this.as.getUsuario() != null) {
//       if(this.as.getUsuario().tipo.tipo == "Administrador") {
//         return true;
//       }
//       return false;
//     } else {
//       return false;
//     }
//   }
//   salvar() {
//     let tela = "/usuarios";
//     if(!this.as.ehAdministrador()) {
//       tela = "/login";
//       let perfil = {"_id":"5d0a252f024766700740e08a","tipo":"Empregado","__v":0};
//       this.usuario.tipo = perfil;
//     }
//     if(Object.keys(this.usuario).indexOf("_id") == -1) {
//       this.us.incluir(this.usuario).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     } else {
//       this.us.atualizar(this.usuario).subscribe(
//         (dados) => {
//           this.router.navigate([tela]);
//         });
//     }
//   }
// }


/***/ }),

/***/ "./src/app/paginas/cursoscategorias/cursoscategorias.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/cursoscategorias/cursoscategorias.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/cursoscategorias/cursoscategorias.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/cursoscategorias/cursoscategorias.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 class=\"tituloPagina\">{{tituloPagina}}</h2>\n  <a mat-fab href=\"{{tela}}\" class=\"btnNovo\" title=\"Novo\">\n    <i class=\"material-icons md-48\">add</i>\n  </a>\n\n  <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n<div class=\"mat-elevation-z8\">\n\n\n<mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"nome\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Nome</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.nome}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"acoes\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a> \n            <a (click)=\"openDialog(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n        </mat-cell>\n      </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n<mat-paginator #paginator\n  [length]=\"dataSource?.data?.length\"\n  [pageIndex]=\"0\"\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 20, 50]\">\n</mat-paginator>\n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/cursoscategorias/cursoscategorias.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/paginas/cursoscategorias/cursoscategorias.component.ts ***!
  \************************************************************************/
/*! exports provided: CursoscategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoscategoriasComponent", function() { return CursoscategoriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CursoscategoriasComponent = /** @class */ (function (_super) {
    __extends(CursoscategoriasComponent, _super);
    function CursoscategoriasComponent(us, router, dialog, as) {
        var _this = _super.call(this, us, router, dialog) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.tituloPagina = "Lista de categorias";
        _this.us.nomeAPI = "cursocategoria";
        _this.tela = "/cursoscategoria";
        _this.displayedColumns = ['nome', 'acoes'];
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    CursoscategoriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cursoscategorias',
            template: __webpack_require__(/*! ./cursoscategorias.component.html */ "./src/app/paginas/cursoscategorias/cursoscategorias.component.html"),
            styles: [__webpack_require__(/*! ./cursoscategorias.component.css */ "./src/app/paginas/cursoscategorias/cursoscategorias.component.css")]
        })
        // export class CursoscategoriasComponent implements OnInit {
        //   constructor() { }
        //   ngOnInit() {
        //   }
        // }
        ,
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"]])
    ], CursoscategoriasComponent);
    return CursoscategoriasComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_5__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/erro/erro.component.css":
/*!*************************************************!*\
  !*** ./src/app/paginas/erro/erro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/erro/erro.component.html":
/*!**************************************************!*\
  !*** ./src/app/paginas/erro/erro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<div class=\"mat-elevation-z8\">\n    <i class=\"material-icons md-48\" style=\"font-size: 2em\">error</i>\n    {{ mensagem }}\n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/erro/erro.component.ts":
/*!************************************************!*\
  !*** ./src/app/paginas/erro/erro.component.ts ***!
  \************************************************/
/*! exports provided: ErroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErroComponent", function() { return ErroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_mensagem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/mensagem.service */ "./src/app/servicos/mensagem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroComponent = /** @class */ (function () {
    function ErroComponent(ms) {
        this.ms = ms;
        this.mensagem = this.ms.getMensagem();
    }
    ErroComponent.prototype.ngOnInit = function () {
    };
    ErroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erro',
            template: __webpack_require__(/*! ./erro.component.html */ "./src/app/paginas/erro/erro.component.html"),
            styles: [__webpack_require__(/*! ./erro.component.css */ "./src/app/paginas/erro/erro.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_mensagem_service__WEBPACK_IMPORTED_MODULE_1__["MensagemService"]])
    ], ErroComponent);
    return ErroComponent;
}());



/***/ }),

/***/ "./src/app/paginas/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/paginas/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/paginas/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"EMail\" [(ngModel)]=\"usuario.email\" name=\"email\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"usuario.senha\" type=\"password\" name=\"senha\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n\n    <div class=\"row\" *ngIf=\"showMsg\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        <i class=\"material-icons\">error</i> Email ou senha inválidos\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n</mat-card> -->\n\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <!-- column -->\n  <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <mat-card style=\"box-shadow: none\">\n      <mat-card-content>\n        <!-- Row -->\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n          <!-- column -->\n          <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\n            <div class=\"contains\">\n              <div class=\"login-box\">\n                <mat-card class=\"mat-elevation-z2\" style=\"background-color: #26C6DA\" *ngIf=\"!usuarioAutenticado\">\n                  <mat-card-header style=\"background-color: #26C6DA; font-weight: bold; color: #212c3d;font-size: 2em;text-align: center\">Login</mat-card-header>\n                  <mat-card-content>\n                    <form class=\"form my-2 my-lg-0\">\n                      <mat-form-field class=\"inputLogin\">\n                        <input matInput placeholder=\"E-mail\" [(ngModel)]=\"usuario.email\" name=\"email\" required>\n                      </mat-form-field>\n                      <mat-form-field class=\"inputLogin\">\n                        <input matInput placeholder=\"Senha\" [(ngModel)]=\"usuario.senha\" type=\"password\" name=\"senha\"\n                          required>\n                      </mat-form-field>\n                      <mat-card-actions>\n                        <a mat-raised-button routerLink=\"/usuario\" class=\"btnLogin\" style=\"margin-right: 50px\">Cadastrar</a>\n                        <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"btnLogin\" aria-label=\"Efetuar login\">Login</button>\n                      </mat-card-actions>\n                    </form>\n\n                    <div class=\"row\" *ngIf=\"showMsg\">\n                      <div class=\"alert alert-danger\" role=\"alert\">\n                        <i class=\"material-icons\">error</i> Email ou senha inválidos\n                      </div>\n                    </div>\n\n                  </mat-card-content>\n                </mat-card>\n\n\n                <mat-card class=\"mat-elevation-z2\" style=\"background-color: #26C6DA\" *ngIf=\"usuarioAutenticado\">\n                    <mat-card-header style=\"background-color: #26C6DA; font-weight: bold; color: #212c3d;font-size: 2em;text-align: center\">Você já está autenticado</mat-card-header>\n                    <mat-card-content>\n                      <a (click)=\"logoff()\" title=\"Sair\">\n                        <i class=\"material-icons md-48\">exit_to_app</i> Sair\n                      </a>\n                    </mat-card-content>\n                </mat-card>\n\n              </div>\n\n            </div>\n            <br /><br />\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- column -->\n</div>"

/***/ }),

/***/ "./src/app/paginas/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paginas/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelos/usuariomodel */ "./src/app/modelos/usuariomodel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(as, router) {
        this.as = as;
        this.router = router;
        this.usuario = new _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.showMsg = false;
        this.usuarioAutenticado = false;
        this.usuarioAutenticado = this.as.ehUsuarioAutenticado();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.as.login(this.usuario).subscribe(function (result) {
            if (result != null) {
                _this.as.usuarioLogado.subscribe(function (users) { return _this.usuario = users; });
                _this.router.navigate(["/cursos"]);
            }
            else {
                _this.showMsg = true;
            }
            // if (result.success) {
            //   this.goTo('home');
            // }
        });
        // console.log(this.usuario.email);
        // console.log(this.usuario.senha);
    };
    LoginComponent.prototype.logoff = function () {
        this.as.encerrarSessao();
        this.usuarioAutenticado = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/paginas/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/paginas/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/paginas/menu/menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/paginas/menu/menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n"

/***/ }),

/***/ "./src/app/paginas/menu/menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/paginas/menu/menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"/cursos\">Cursos</a>\n      <a mat-list-item href=\"/curso\">Curso</a>\n      <a *ngIf=\"usuarioIniciado(usuario)\" mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Sistema de Treinamentos</span>\n      <div style=\"color: #fff;position: absolute;right: 10px;\">\n        <a *ngIf=\"usuarioIniciado(usuario)\" (click)=\"logoff()\" title=\"Sair\">\n          <i class=\"material-icons md-48\">exit_to_app</i>\n        </a>\n      </div>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n\n\n<div style=\"height: 80vh;\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm aria-label=\"Abrir menu\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span>SISTREN</span>\n      <span class=\"menu-spacer\"></span>\n      <div fxShow=\"true\" fxHide.lt-md>\n        \n        <a routerLink=\"/usuarios\" mat-button *ngIf=\"this.as.ehAdministrador()\">\n          <i class=\"material-icons md-48\">account_circle</i> Usuários\n        </a>\n\n        <button mat-button [matMenuTriggerFor]=\"cursos\" *ngIf=\"this.as.ehUsuarioAutenticado()\"><i class=\"material-icons md-48\">school</i> Cursos</button>\n        <mat-menu #cursos=\"matMenu\">\n            <a routerLink=\"/cursos\" mat-menu-item>\n              Lista de cursos\n            </a>\n            <a routerLink=\"/cursoscategorias\" mat-menu-item *ngIf=\"this.as.ehAdministrador()\">\n              Categorias de cursos\n            </a>\n        </mat-menu>\n\n        <a routerLink=\"/relatorios\" mat-button *ngIf=\"this.as.ehAdministrador()\">\n          <i class=\"material-icons md-48\">trending_up</i> Relatórios\n        </a>\n\n        <!-- <a href=\"/cursos\" mat-button mat-button *ngIf=\"this.as.ehUsuarioAutenticado()\">\n          <i class=\"material-icons md-48\">school</i> Cursos\n        </a> -->\n\n        <!-- <a style=\"position:fixed;right:10px;cursor: pointer;\" *ngIf=\"usuarioIniciado(usuario)\" (click)=\"logoff()\" title=\"Sair\">\n          <i class=\"material-icons md-48\">exit_to_app</i>\n        </a> -->\n      </div>\n      <a style=\"position:fixed;right:10px;cursor: pointer;\" *ngIf=\"usuarioIniciado(usuario)\" (click)=\"logoff()\" title=\"Sair\">\n          <i class=\"material-icons md-48\">exit_to_app</i>\n        </a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill>\n    <mat-sidenav #sidenav class=\"sidenav\">\n        <!-- <button mat-button [matMenuTriggerFor]=\"cursos\" *ngIf=\"this.as.ehUsuarioAutenticado()\"><i class=\"material-icons md-48\">school</i> Cursos</button>\n        <mat-menu #cursos=\"matMenu\">\n            <a href=\"/cursos\" mat-menu-item>\n              Lista de cursos\n            </a>\n          <button mat-menu-item>Categorias de curso</button>\n        </mat-menu> -->\n      <mat-nav-list>\n        <!-- <a (click)=\"sidenav.toggle()\" href=\"\" mat-list-item><i class=\"material-icons md-48\">close</i></a> -->\n        <a routerLink=\"/usuarios\" mat-button *ngIf=\"this.as.ehAdministrador()\">\n          <i class=\"material-icons md-48\">account_circle</i> Usuários\n        </a>\n\n        <!-- <a href=\"/cursos\" mat-button mat-button *ngIf=\"this.as.ehUsuarioAutenticado()\">\n          <i class=\"material-icons md-48\">school</i> Cursos\n        </a> -->\n\n        <button mat-button [matMenuTriggerFor]=\"cursos\" *ngIf=\"this.as.ehUsuarioAutenticado()\"><i class=\"material-icons md-48\">school</i> Cursos</button>\n        <mat-menu #cursos=\"matMenu\">\n            <a routerLink=\"/cursos\" mat-menu-item>\n              Lista de cursos\n            </a>\n            <a routerLink=\"/cursoscategorias\" mat-menu-item *ngIf=\"this.as.ehAdministrador()\">\n              Categorias de cursos\n            </a>\n        </mat-menu>\n\n        <a routerLink=\"/relatorios\" mat-button *ngIf=\"this.as.ehAdministrador()\">\n          <i class=\"material-icons md-48\">trending_up</i> Relatórios\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/paginas/menu/menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/paginas/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modelos/usuariomodel */ "./src/app/modelos/usuariomodel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(breakpointObserver, as) {
        this.breakpointObserver = breakpointObserver;
        this.as = as;
        this.usuario = new _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.usuarioLogado.subscribe(function (users) { return _this.usuario = users; });
    };
    MenuComponent.prototype.usuarioIniciado = function (usuario) {
        var usuarioAutenticado = this.as.getUsuario();
        if (usuarioAutenticado != null && typeof usuarioAutenticado.email != "undefined") {
            return true;
        }
        return false;
    };
    MenuComponent.prototype.logoff = function () {
        this.as.encerrarSessao();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/paginas/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/paginas/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/paginas/pagina-curso/pagina-curso.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/pagina-curso/pagina-curso.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/pagina-curso/pagina-curso.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paginas/pagina-curso/pagina-curso.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  {{curso | json}}\n</p> -->\n\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>\n      <h1>{{curso.titulo}}</h1>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <h2>Instrutor: {{curso.instrutor.nome}}</h2>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n\n    <mat-card class=\"example-card\" *ngFor=\"let u of curso.unidades\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>\n          <h3>{{u.titulo}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>\n              <h4>Videos</h4>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <mat-nav-list>\n              <a mat-list-item  *ngFor=\"let v of u.videos\" (click)=teste(u)> {{v.titulo}} </a>\n            </mat-nav-list>\n          </mat-card-content>\n        </mat-card>\n\n\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>\n              <h4>Arquivos</h4>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <mat-nav-list>\n              <a mat-list-item href=\"/arquivos/{{v.link}}\" target=\"_blank\" *ngFor=\"let v of u.arquivos\"> {{v.titulo}} </a>\n            </mat-nav-list>\n          </mat-card-content>\n        </mat-card>\n\n\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>\n                <h4>Questionários</h4>\n              </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              <mat-nav-list>\n                <a mat-list-item routerLink=\"/unidades/{{u._id}}\" *ngFor=\"let v of u.questionarios\"> {{v.titulo}} </a>\n              </mat-nav-list>\n            </mat-card-content>\n          </mat-card>\n\n      </mat-card-content>\n    </mat-card>\n\n\n\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button> -->\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/pagina-curso/pagina-curso.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paginas/pagina-curso/pagina-curso.component.ts ***!
  \****************************************************************/
/*! exports provided: PaginaCursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaCursoComponent", function() { return PaginaCursoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_servico_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/servico-cursos.service */ "./src/app/servicos/servico-cursos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginaCursoComponent = /** @class */ (function () {
    function PaginaCursoComponent(ps, rs) {
        var _this = this;
        this.ps = ps;
        this.rs = rs;
        var id = this.rs.snapshot.paramMap.get("id");
        ps.getCurso(id).subscribe(function (dados) {
            _this.curso = dados;
        });
    }
    PaginaCursoComponent.prototype.teste = function (elem) {
        console.log(elem);
    };
    PaginaCursoComponent.prototype.ngOnInit = function () {
    };
    PaginaCursoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina-curso',
            template: __webpack_require__(/*! ./pagina-curso.component.html */ "./src/app/paginas/pagina-curso/pagina-curso.component.html"),
            styles: [__webpack_require__(/*! ./pagina-curso.component.css */ "./src/app/paginas/pagina-curso/pagina-curso.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_servico_cursos_service__WEBPACK_IMPORTED_MODULE_1__["ServicoCursosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaginaCursoComponent);
    return PaginaCursoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/pagina-cursos/pagina-cursos.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/pagina-cursos/pagina-cursos.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/pagina-cursos/pagina-cursos.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/pagina-cursos/pagina-cursos.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Andrômeda</mat-card-title>\n    <mat-card-subtitle>Galáxias</mat-card-subtitle>\n  </mat-card-header>\n  <!-- <img mat-card-image src=\"http://www.macoratti.net/Imagens/andromeda.jpg\" alt=\"Andromeda\"> -->\n  <mat-card-content>\n      <mat-nav-list>\n          <a mat-list-item routerLink=\"/cursos/{{p._id}}\" *ngFor=\"let p of cursos\"> {{p.titulo}} </a>\n       </mat-nav-list>\n    <p>\n      <!-- {{cursos | json}} -->\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- <button mat-button>Gostei</button>\n    <button mat-button>Compartilhe</button> -->\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/pagina-cursos/pagina-cursos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/pagina-cursos/pagina-cursos.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginaCursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaCursosComponent", function() { return PaginaCursosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_servico_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/servico-cursos.service */ "./src/app/servicos/servico-cursos.service.ts");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginaCursosComponent = /** @class */ (function () {
    function PaginaCursosComponent(ps, as) {
        var _this = this;
        this.ps = ps;
        this.as = as;
        this.as.canActivate();
        // this.projetos = ps.getProjetos();
        ps.getCursos().subscribe(function (dados) {
            _this.cursos = dados;
        });
    }
    PaginaCursosComponent.prototype.ngOnInit = function () {
    };
    PaginaCursosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina-cursos',
            template: __webpack_require__(/*! ./pagina-cursos.component.html */ "./src/app/paginas/pagina-cursos/pagina-cursos.component.html"),
            styles: [__webpack_require__(/*! ./pagina-cursos.component.css */ "./src/app/paginas/pagina-cursos/pagina-cursos.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_servico_cursos_service__WEBPACK_IMPORTED_MODULE_1__["ServicoCursosService"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], PaginaCursosComponent);
    return PaginaCursosComponent;
}());



/***/ }),

/***/ "./src/app/paginas/painel/painel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paginas/painel/painel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/paginas/painel/painel.component.html":
/*!******************************************************!*\
  !*** ./src/app/paginas/painel/painel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item aria-label=\"Cancelar ação\">Expand</button>\n              <button mat-menu-item aria-label=\"Cancelar ação\">Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/paginas/painel/painel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paginas/painel/painel.component.ts ***!
  \****************************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    PainelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'painel',
            template: __webpack_require__(/*! ./painel.component.html */ "./src/app/paginas/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/paginas/painel/painel.component.css")]
        })
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/paginas/questao/questao.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paginas/questao/questao.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questao/questao.component.html":
/*!********************************************************!*\
  !*** ./src/app/paginas/questao/questao.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"mat-elevation-z8\">\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n        <mat-form-field class=\"inputFormulario\">\n          <input matInput placeholder=\"Titulo\" [(ngModel)]=\"objeto.pergunta\" name=\"titulo\" required>\n        </mat-form-field>\n  \n        <!-- <mat-tab-group>\n          <mat-tab label=\"URL para o arquivo\">\n              <mat-form-field class=\"inputFormulario\">\n                  <input matInput placeholder=\"URL\" [(ngModel)]=\"objeto.url\" name=\"url\">\n                </mat-form-field>\n          </mat-tab>\n          <mat-tab label=\"Enviar  arquivo\">\n              <button mat-button (click)=\"inputFile.click()\" class=\"btnUpload\">\n                  <i class=\"material-icons md-48\">attach_file</i>\n                  Selecionar arquivo\n                </button> {{ nomeArquivo }}\n                <input #inputFile type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"\n                  [style.display]=\"'none'\">\n          </mat-tab>\n        </mat-tab-group> -->\n  \n        <mat-card-actions>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/questoes\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n          <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNaUnidade()\" aria-label=\"Salvar ação\"\n            [disabled]=\"!f.valid\">SALVAR</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/questao/questao.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paginas/questao/questao.component.ts ***!
  \******************************************************/
/*! exports provided: QuestaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestaoComponent", function() { return QuestaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/questionarios.service */ "./src/app/servicos/questionarios.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestaoComponent = /** @class */ (function (_super) {
    __extends(QuestaoComponent, _super);
    function QuestaoComponent(os, router, as, cursoService, uni, quest) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.quest = quest;
        _this.questao = {
            "pergunta": "",
            "alternativas": [],
            "respostas": []
        };
        _this.tituloPagina = "Questão";
        _this.objeto = _this.questao;
        _this.nomeAPI = "cursos";
        _this.tela = "/questoes";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    QuestaoComponent.prototype.salvarNaUnidade = function () {
        var _this = this;
        if (Object.keys(this.objeto).indexOf("_id") > -1) {
            // localizar a questao no array de questoes do questionario
            var pos = this.quest.getObjetoSelecionado().questoes.findIndex(function (x) { return x._id == _this.objeto._id; });
            this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
            this.quest.getObjetoSelecionado().questoes.push(this.objeto);
            // localizar o questionario na unidade
            pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
            this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
            this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
            // localizar unidade no curso
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            // this.objeto = this.cursoService.getObjetoSelecionado();
        }
        else {
            this.quest.getObjetoSelecionado().questoes.push(this.objeto);
            // localizar o questionario na unidade
            var pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
            this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
            this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
            // localizar unidade no curso
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            // this.objeto = this.cursoService.getObjetoSelecionado();
        }
        this.os.nomeAPI = "cursos";
        this.os.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.router.navigate([_this.tela]);
        });
    };
    QuestaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questao',
            template: __webpack_require__(/*! ./questao.component.html */ "./src/app/paginas/questao/questao.component.html"),
            styles: [__webpack_require__(/*! ./questao.component.css */ "./src/app/paginas/questao/questao.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"],
            src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"], src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_7__["QuestionariosService"]])
    ], QuestaoComponent);
    return QuestaoComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/questionario/questionario.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/questionario/questionario.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questionario/questionario.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paginas/questionario/questionario.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"mat-elevation-z8\">\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n        <mat-form-field class=\"inputFormulario\">\n          <input matInput placeholder=\"Titulo\" [(ngModel)]=\"objeto.titulo\" name=\"titulo\" required>\n        </mat-form-field>\n  \n        <mat-form-field class=\"inputFormulario\">\n          <input matInput type=\"number\" placeholder=\"Posição\" [(ngModel)]=\"objeto.posicao\" name=\"posicao\" required>\n        </mat-form-field>\n  \n        <!-- <mat-tab-group>\n          <mat-tab label=\"URL para o arquivo\">\n              <mat-form-field class=\"inputFormulario\">\n                  <input matInput placeholder=\"URL\" [(ngModel)]=\"objeto.url\" name=\"url\">\n                </mat-form-field>\n          </mat-tab>\n          <mat-tab label=\"Enviar  arquivo\">\n              <button mat-button (click)=\"inputFile.click()\" class=\"btnUpload\">\n                  <i class=\"material-icons md-48\">attach_file</i>\n                  Selecionar arquivo\n                </button> {{ nomeArquivo }}\n                <input #inputFile type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"\n                  [style.display]=\"'none'\">\n          </mat-tab>\n        </mat-tab-group> -->\n  \n        <mat-card-actions>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/questionarios\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n          <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n          <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNaUnidade()\" aria-label=\"Salvar ação\"\n            [disabled]=\"!f.valid\">SALVAR</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/questionario/questionario.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paginas/questionario/questionario.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioComponent", function() { return QuestionarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionarioComponent = /** @class */ (function (_super) {
    __extends(QuestionarioComponent, _super);
    function QuestionarioComponent(os, router, as, cursoService, uni) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.questionario = {
            "titulo": "",
            "posicao": 0,
            "questoes": []
        };
        _this.tituloPagina = "ARQUIVO";
        _this.objeto = _this.questionario;
        _this.nomeAPI = "cursos";
        _this.tela = "/questionarios";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    QuestionarioComponent.prototype.salvarNaUnidade = function () {
        var _this = this;
        if (Object.keys(this.objeto).indexOf("_id") > -1) {
            var pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.objeto._id; });
            this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
            this.uni.getObjetoSelecionado().questionarios.push(this.objeto);
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        else {
            this.uni.getObjetoSelecionado().questionarios.push(this.objeto);
            var pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        this.os.nomeAPI = "cursos";
        this.os.atualizar(this.objeto).subscribe(function (dados) {
            _this.router.navigate([_this.tela]);
        });
    };
    QuestionarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionario',
            template: __webpack_require__(/*! ./questionario.component.html */ "./src/app/paginas/questionario/questionario.component.html"),
            styles: [__webpack_require__(/*! ./questionario.component.css */ "./src/app/paginas/questionario/questionario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"],
            src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"]])
    ], QuestionarioComponent);
    return QuestionarioComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/questionarioaluno/questionarioaluno.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/questionarioaluno/questionarioaluno.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questionarioaluno/questionarioaluno.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/questionarioaluno/questionarioaluno.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <mat-card class=\"example-card\">\n\n    <button mat-raised-button color=\"primary\" class=\"btnUpload\" (click)=\"ultimaTentativa()\" aria-label=\"Ultima tentativa\"\n      style=\"float: right;background: none !important\">Ultima tentativa</button>\n\n    <a mat-raised-button color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/cursodetalhes\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n    </a>\n\n    <mat-card-content>\n      <h3 style=\"color: rgb(221, 136, 24);padding-bottom: 5px;font-size: 1.5em\">{{questionario.titulo}}</h3>\n      <mat-card class=\"example-card\" *ngFor=\"let q of questionario.questoes; let i = index\" style=\"background: #29374a; margin-bottom: 20px;\">\n\n        <h3>{{i+1}} - {{q.pergunta}}</h3>\n        <mat-radio-group aria-label=\"q.pergunta\" class=\"example-radio-group\" [(ngModel)]=\"respostas[q._id].resposta\" (change)=\"validar()\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let a of q.alternativas\" [value]=\"a\">{{a.alternativa}}</mat-radio-button>\n        </mat-radio-group>\n      </mat-card>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"enviar()\" aria-label=\"Salvar ação\" [disabled]=\"!valido\">Enviar</button>\n  </mat-card-actions>\n</div>"

/***/ }),

/***/ "./src/app/paginas/questionarioaluno/questionarioaluno.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/questionarioaluno/questionarioaluno.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuestionarioalunoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioalunoComponent", function() { return QuestionarioalunoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_modelos_certificado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/certificado */ "./src/app/modelos/certificado.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionarioalunoComponent = /** @class */ (function () {
    function QuestionarioalunoComponent(cursoService, uni, usuService, objService, router) {
        var _this = this;
        this.cursoService = cursoService;
        this.uni = uni;
        this.usuService = usuService;
        this.objService = objService;
        this.router = router;
        this.valido = false;
        this.questionario = this.objService.getObjetoSelecionado();
        this.respostas = new Array();
        this.questionario.questoes.forEach(function (questao) {
            _this.respostas[questao._id] = {
                "usuario": _this.usuService.getUsuario(),
                "resposta": {}
            };
        });
    }
    QuestionarioalunoComponent.prototype.ngOnInit = function () {
        this.questionario = this.objService.getObjetoSelecionado();
    };
    QuestionarioalunoComponent.prototype.enviar = function () {
        var _this = this;
        this.questionario.questoes.forEach(function (questao) {
            var resposta = _this.respostas[questao._id];
            var pos = questao.respostas.findIndex(function (x) { return x.usuario._id == resposta.usuario._id; });
            if (pos > -1) {
                questao.respostas.splice(pos, 1);
            }
            questao.respostas.push(resposta);
        });
        var curso = this.cursoService.getObjetoSelecionado();
        curso.unidades.forEach(function (unidade) {
            var pos = unidade.questionarios.indexOf(function (vi) { return vi._id == _this.questionario._id; });
            if (pos > -1) {
                unidade.questionarios.splice(pos, 1);
                unidade.questionarios.push(_this.questionario);
            }
        });
        var c = new src_app_modelos_certificado__WEBPACK_IMPORTED_MODULE_6__["Certificado"]();
        curso = c.verificarConclusao(curso, this.usuService.getUsuario());
        // this.objService.nomeAPI = "cursos";
        this.objService.atualizar(curso).subscribe(function (dados) {
            _this.cursoService.setObjetoSelecionado(curso);
            _this.objService.setObjetoSelecionado(_this.questionario);
            _this.router.navigate(["/questionarioresposta"]);
        });
    };
    QuestionarioalunoComponent.prototype.validar = function () {
        var ok = true;
        for (var key in this.respostas) {
            if (this.respostas.hasOwnProperty(key)) {
                var element = this.respostas[key];
                console.log(element.resposta);
                if (typeof element.resposta.alternativa == "undefined") {
                    ok = false;
                }
            }
        }
        this.valido = ok;
    };
    QuestionarioalunoComponent.prototype.ultimaTentativa = function () {
        this.objService.setObjetoSelecionado(this.questionario);
        this.router.navigate(["/questionarioresposta"]);
    };
    QuestionarioalunoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionarioaluno',
            template: __webpack_require__(/*! ./questionarioaluno.component.html */ "./src/app/paginas/questionarioaluno/questionarioaluno.component.html"),
            styles: [__webpack_require__(/*! ./questionarioaluno.component.css */ "./src/app/paginas/questionarioaluno/questionarioaluno.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_5__["UnidadesService"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"], src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_3__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], QuestionarioalunoComponent);
    return QuestionarioalunoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/questionarioresposta/questionarioresposta.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/paginas/questionarioresposta/questionarioresposta.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questionarioresposta/questionarioresposta.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/paginas/questionarioresposta/questionarioresposta.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n\n  <mat-card class=\"example-card\">\n    <button mat-raised-button color=\"primary\" class=\"btnUpload\" (click)=\"refazer()\" aria-label=\"Refazer\" style=\"float: right;background: none !important\">Refazer\n      teste</button>\n\n    <a mat-raised-button color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/cursodetalhes\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n    </a>\n\n    <mat-card-content>\n      <h3 style=\"color: rgb(221, 136, 24);padding-bottom: 5px;font-size: 1.5em\">{{questionario.titulo}}</h3>\n      <span style=\"font-size: 1.4em;font-weight: bold\">Total acertos: {{totalAcertos}}/{{listaQuestoes.length}}</span>\n\n      <span style=\"font-size: 1.4em;float: right;font-weight: bold\">Percentual: {{ percentual }}%</span>\n\n      <mat-card class=\"example-card\" *ngFor=\"let q of listaQuestoes; let i = index\" style=\"background: #29374a; margin-bottom: 20px;\">\n        <h3 [class]=\"marcarAlternativa(q.respostaAluno.correta)\">{{i+1}} - {{q.titulo}}</h3>\n        <i class=\"material-icons md-48 alternativaCorreta\" *ngIf=\"q.respostaAluno.correta\" style=\"float: right;\">done</i>\n        <i class=\"material-icons md-48 alternativaIncorreta\" *ngIf=\"!q.respostaAluno.correta\" style=\"float: right;\">clear</i>\n        <mat-list>\n          <mat-list-item>\n            Resposta correta: {{q.respostaCerta.alternativa}}\n          </mat-list-item>\n          <mat-list-item>\n            Sua resposta: <span [class]=\"marcarAlternativa(q.respostaAluno.correta)\">{{q.respostaAluno.alternativa}}</span>\n          </mat-list-item>\n        </mat-list>\n      </mat-card>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/paginas/questionarioresposta/questionarioresposta.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/paginas/questionarioresposta/questionarioresposta.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuestionariorespostaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionariorespostaComponent", function() { return QuestionariorespostaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionariorespostaComponent = /** @class */ (function () {
    function QuestionariorespostaComponent(cursoService, uni, usuService, objService, router) {
        this.cursoService = cursoService;
        this.uni = uni;
        this.usuService = usuService;
        this.objService = objService;
        this.router = router;
        this.listaQuestoes = new Array();
        this.totalAcertos = 0;
        this.percentual = 0;
        this.questionario = this.objService.getObjetoSelecionado();
        this.questoesRespostas();
    }
    QuestionariorespostaComponent.prototype.ngOnInit = function () {
    };
    QuestionariorespostaComponent.prototype.questoesRespostas = function () {
        var logado = this.usuService.getUsuario();
        var listaQuestoes = new Array();
        var totalAcertos = 0;
        this.questionario.questoes.forEach(function (questao) {
            var obj = {
                "titulo": questao.pergunta,
                "respostaCerta": questao.alternativas.find(function (x) { return x.correta == true; }),
                "respostaAluno": questao.respostas.find(function (x) { return x.usuario._id == logado._id; }).resposta
            };
            listaQuestoes.push(obj);
            if (obj.respostaAluno.correta) {
                totalAcertos++;
            }
        });
        this.totalAcertos = totalAcertos;
        this.listaQuestoes = listaQuestoes;
        this.percentual = (totalAcertos / listaQuestoes.length) * 100;
    };
    QuestionariorespostaComponent.prototype.marcarAlternativa = function (correta) {
        if (correta) {
            return "alternativaCorreta";
        }
        return "alternativaIncorreta";
    };
    QuestionariorespostaComponent.prototype.refazer = function () {
        this.objService.setObjetoSelecionado(this.questionario);
        this.router.navigate(["/questionarioaluno"]);
    };
    QuestionariorespostaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionarioresposta',
            template: __webpack_require__(/*! ./questionarioresposta.component.html */ "./src/app/paginas/questionarioresposta/questionarioresposta.component.html"),
            styles: [__webpack_require__(/*! ./questionarioresposta.component.css */ "./src/app/paginas/questionarioresposta/questionarioresposta.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_1__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_2__["UnidadesService"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"], src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_4__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QuestionariorespostaComponent);
    return QuestionariorespostaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/questionarios/questionarios.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/questionarios/questionarios.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questionarios/questionarios.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/questionarios/questionarios.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">question_answer</i> {{tituloPagina}}</h2>\n    <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'questionario')\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/unidades\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n    </a>\n  \n    <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n    <div class=\"mat-elevation-z8\">\n  \n  \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"titulo\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Titulo</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.titulo}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"questoes\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Questões</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"Questões\">\n              <a (click)=\"questoes(row)\" title=\"Questões\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Questões\">question_answer</i></a>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"posicao\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 80px;\">Posição</mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"Posição\" style=\"max-width: 80px\">{{row.posicao}}</mat-cell>\n            </ng-container>\n  \n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n            <a (click)=\"abrirDialogo(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n  \n      <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/questionarios/questionarios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/questionarios/questionarios.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionariosComponent", function() { return QuestionariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var _confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
/* harmony import */ var src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/questionarios.service */ "./src/app/servicos/questionarios.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuestionariosComponent = /** @class */ (function (_super) {
    __extends(QuestionariosComponent, _super);
    function QuestionariosComponent(us, router, dialog, as, cursoService, uni, quest) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.quest = quest;
        _this.tituloPagina = "Lista de Questionários";
        if (typeof _this.uni.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.uni.getObjetoSelecionado().questionarios;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        _this.us.nomeAPI = "cursos";
        _this.tela = "/questionario";
        _this.displayedColumns = ['titulo', 'questoes', 'posicao', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    QuestionariosComponent.prototype.excluirNaUnidade = function (objeto) {
        var _this = this;
        var pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == objeto._id; });
        this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        var unidade = this.uni.getObjetoSelecionado();
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
        this.us.nomeAPI = "cursos";
        this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    QuestionariosComponent.prototype.abrirDialogo = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluirNaUnidade(objeto);
            }
        });
    };
    QuestionariosComponent.prototype.questoes = function (questionario) {
        this.quest.setObjetoSelecionado(questionario);
        this.router.navigate(["/questoes"]);
    };
    QuestionariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionarios',
            template: __webpack_require__(/*! ./questionarios.component.html */ "./src/app/paginas/questionarios/questionarios.component.html"),
            styles: [__webpack_require__(/*! ./questionarios.component.css */ "./src/app/paginas/questionarios/questionarios.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"],
            src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"], src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_9__["QuestionariosService"]])
    ], QuestionariosComponent);
    return QuestionariosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_7__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/questoes/questoes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/questoes/questoes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/questoes/questoes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/questoes/questoes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\">{{tituloPagina}}</h2>\n    <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'questao')\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/questionarios\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Editar\">arrow_back</i>\n    </a>\n  \n    <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n    <div class=\"mat-elevation-z8\">\n  \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"pergunta\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Pergunta</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Pergunta\">{{row.pergunta}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"alternativas\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Alternativas</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"Alternativas\">\n              <a (click)=\"alternativas(row)\" title=\"Alternativas\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Alternativas\">toc</i></a>\n            </mat-cell>\n          </ng-container>\n  \n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n            <a (click)=\"abrirDialogo(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n  \n      <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/questoes/questoes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/questoes/questoes.component.ts ***!
  \********************************************************/
/*! exports provided: QuestoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesComponent", function() { return QuestoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/questionarios.service */ "./src/app/servicos/questionarios.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var _confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
/* harmony import */ var src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicos/questoes.service */ "./src/app/servicos/questoes.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuestoesComponent = /** @class */ (function (_super) {
    __extends(QuestoesComponent, _super);
    function QuestoesComponent(us, router, dialog, as, cursoService, uni, quest, questao) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.quest = quest;
        _this.questao = questao;
        _this.tituloPagina = "Lista de Questões";
        if (typeof _this.quest.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.quest.getObjetoSelecionado().questoes;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        _this.us.nomeAPI = "cursos";
        _this.tela = "/questao";
        _this.displayedColumns = ['pergunta', 'alternativas', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    QuestoesComponent.prototype.excluirNaUnidade = function (objeto) {
        var _this = this;
        // localizar a questao no array de questoes do questionario
        var pos = this.quest.getObjetoSelecionado().questoes.findIndex(function (x) { return x._id == objeto._id; });
        this.quest.getObjetoSelecionado().questoes.splice(pos, 1);
        // localizar o questionario na unidade
        pos = this.uni.getObjetoSelecionado().questionarios.findIndex(function (x) { return x._id == _this.quest.getObjetoSelecionado()._id; });
        this.uni.getObjetoSelecionado().questionarios.splice(pos, 1);
        this.uni.getObjetoSelecionado().questionarios.push(this.quest.getObjetoSelecionado());
        // localizar unidade no curso
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
        this.us.nomeAPI = "cursos";
        this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    QuestoesComponent.prototype.abrirDialogo = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluirNaUnidade(objeto);
            }
        });
    };
    QuestoesComponent.prototype.alternativas = function (questao) {
        this.questao.setObjetoSelecionado(questao);
        this.router.navigate(["/alternativas"]);
    };
    QuestoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questoes',
            template: __webpack_require__(/*! ./questoes.component.html */ "./src/app/paginas/questoes/questoes.component.html"),
            styles: [__webpack_require__(/*! ./questoes.component.css */ "./src/app/paginas/questoes/questoes.component.css")]
        })
        // export class QuestoesComponent implements OnInit {
        //   constructor() { }
        //   ngOnInit() {
        //   }
        // }
        ,
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_5__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_8__["AutenticacaoService"],
            src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_4__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_3__["UnidadesService"], src_app_servicos_questionarios_service__WEBPACK_IMPORTED_MODULE_2__["QuestionariosService"], src_app_servicos_questoes_service__WEBPACK_IMPORTED_MODULE_10__["QuestoesService"]])
    ], QuestoesComponent);
    return QuestoesComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/relatorio/relatorio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/paginas/relatorio/relatorio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/relatorio/relatorio.component.html":
/*!************************************************************!*\
  !*** ./src/app/paginas/relatorio/relatorio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding-bottom: 50px;\">\n    <h2 style=\"float: left;\" class=\"tituloPagina\">{{usuario.nome}}</h2>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/relatorios\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Voltar\">arrow_back</i>\n    </a>\n</mat-card>\n\n<mat-card *ngFor=\"let c of listaCursos\" class=\"divRelatorio\">\n  <div class=\"mat-elevation-z8\" style=\"margin-top: 10px;\">\n    <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n      <mat-grid-tile>\n        <h2 class=\"tituloPagina\" style=\"color: #26C6DA\">{{c.curso}}</h2>\n      </mat-grid-tile>\n      <mat-grid-tile class=\"relTexto\"><span class=\"relStatus\" [class]=\"definirEstilo(c.status)\">{{c.status}}</span></mat-grid-tile>\n      <mat-grid-tile class=\"relTexto\">Videos assistidos: <span class=\"relDado\" [class]=\"definirEstilo(c.videos)\">{{c.videos}}%</span></mat-grid-tile>\n      <!-- <mat-grid-tile class=\"relTexto\">Aproveitamento: <span class=\"relDado\" [class]=\"definirEstilo(c.aproveitamento)\">{{c.aproveitamento}}%</span></mat-grid-tile> -->\n      <mat-grid-tile class=\"relTexto\">Gerou certificado: <span class=\"relDado\" [class]=\"definirEstilo(c.gerouCertificado)\">{{c.gerouCertificado}}</span></mat-grid-tile>\n    </mat-grid-list>\n\n    <h2 class=\"tituloPagina\" style=\"text-align: center\" [hidden]=\"c.questionarios.length == 0\">Questionários</h2>\n    <mat-grid-list cols=\"2\" rowHeight=\"30px\" *ngFor=\"let q of c.questionarios\" [hidden]=\"c.questionarios.length == 0\">\n      <mat-grid-tile class=\"relTexto\">{{q.titulo}}</mat-grid-tile>\n      <mat-grid-tile class=\"relTexto\"><span class=\"relDado\" [class]=\"definirEstilo(q.aproveitamento)\">{{q.aproveitamento}}%</span></mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/relatorio/relatorio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/paginas/relatorio/relatorio.component.ts ***!
  \**********************************************************/
/*! exports provided: RelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function() { return RelatorioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var src_app_servicos_relatorios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/relatorios.service */ "./src/app/servicos/relatorios.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatorioComponent = /** @class */ (function () {
    function RelatorioComponent(us, os) {
        var _this = this;
        this.us = us;
        this.os = os;
        this.cursos = new Array();
        this.cursosInscritos = new Array();
        this.listaCursos = new Array();
        this.usuario = this.us.getObjetoSelecionado();
        this.os.nomeAPI = "cursos";
        this.os.get().subscribe(function (dados) {
            _this.cursos = dados;
            _this.montar();
        });
    }
    RelatorioComponent.prototype.montar = function () {
        var _this = this;
        this.cursosInscritos = this.cursos.filter(function (x) { return x.inscricoes.findIndex(function (y) { return y.usuario._id == _this.usuario._id; }) > -1; });
        this.cursosInscritos.forEach(function (curso) {
            var relusuario = {
                "curso": "",
                "status": "",
                "videos": "",
                "aproveitamento": "",
                "gerouCertificado": "",
                "questionarios": []
            };
            relusuario.curso = curso.titulo;
            var insc = curso.inscricoes.find(function (y) { return y.usuario._id == _this.usuario._id; });
            relusuario.status = (insc.aprovado) ? "APROVADO" : "REPROVADO";
            relusuario.videos = insc.percentualAndamento;
            relusuario.aproveitamento = insc.percentualAcertos;
            relusuario.gerouCertificado = (insc.gerouCertificado) ? "SIM" : "NÃO";
            var listaQuestoes = new Array();
            curso.unidades.forEach(function (unidade) {
                unidade.questionarios.forEach(function (questionario) {
                    var quest = {
                        "titulo": questionario.titulo,
                        "questoes": 0,
                        "corretas": 0,
                        "aproveitamento": 0
                    };
                    questionario.questoes.forEach(function (questao) {
                        questao.respostas.forEach(function (resposta) {
                            if (resposta.resposta.correta) {
                                quest.corretas++;
                            }
                        });
                    });
                    quest.questoes = questionario.questoes.length;
                    quest.aproveitamento = (quest.corretas / quest.questoes) * 100;
                    relusuario.questionarios.push(quest);
                    listaQuestoes.push(quest);
                });
            });
            // console.log(insc);
            // console.log(relusuario);
            _this.listaCursos.push(relusuario);
        });
    };
    RelatorioComponent.prototype.definirEstilo = function (dado) {
        var classe = "";
        if (dado == "APROVADO" || dado == "SIM" || parseFloat(dado) >= 70) {
            classe = "relStatusAprovado";
        }
        else {
            classe = "relStatusReprovado";
        }
        return classe;
    };
    RelatorioComponent.prototype.ngOnInit = function () {
    };
    RelatorioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorio',
            template: __webpack_require__(/*! ./relatorio.component.html */ "./src/app/paginas/relatorio/relatorio.component.html"),
            styles: [__webpack_require__(/*! ./relatorio.component.css */ "./src/app/paginas/relatorio/relatorio.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_relatorios_service__WEBPACK_IMPORTED_MODULE_2__["RelatoriosService"], src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_1__["ObjetosService"]])
    ], RelatorioComponent);
    return RelatorioComponent;
}());



/***/ }),

/***/ "./src/app/paginas/relatorios/relatorios.component.css":
/*!*************************************************************!*\
  !*** ./src/app/paginas/relatorios/relatorios.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/relatorios/relatorios.component.html":
/*!**************************************************************!*\
  !*** ./src/app/paginas/relatorios/relatorios.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">trending_up</i> {{tituloPagina}}</h2>\n\n  <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n<div class=\"mat-elevation-z8\">\n\n<mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"nome\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Nome</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.nome}}</mat-cell>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" data-label=\"Email\">{{row.email}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"tipo\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" data-label=\"Tipo\">{{mostrarTipo(row.tipo)}}</mat-cell>\n    </ng-container> -->\n\n    <ng-container matColumnDef=\"acoes\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"relatorio(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Visualizar\">search</i></a> \n            <!-- <a (click)=\"openDialog(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\" *ngIf=\"row._id!='5d1b995f1c9d440000ddea3d'\">delete</i></a> -->\n        </mat-cell>\n      </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n<mat-paginator #paginator\n  [length]=\"dataSource?.data?.length\"\n  [pageIndex]=\"0\"\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 20, 50]\">\n</mat-paginator>\n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/relatorios/relatorios.component.ts":
/*!************************************************************!*\
  !*** ./src/app/paginas/relatorios/relatorios.component.ts ***!
  \************************************************************/
/*! exports provided: RelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosComponent", function() { return RelatoriosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_relatorios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/relatorios.service */ "./src/app/servicos/relatorios.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelatoriosComponent = /** @class */ (function (_super) {
    __extends(RelatoriosComponent, _super);
    function RelatoriosComponent(us, router, dialog, as) {
        var _this = _super.call(this, us, router, dialog) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.tituloPagina = "Relatórios por usuário";
        _this.usuarios = new Array();
        _this.tela = "/relatorio";
        _this.displayedColumns = ['nome', 'acoes'];
        _this.us.get().subscribe(function (dados) {
            _this.usuarios = dados;
            _this.dadosSessao = _this.usuarios.filter(function (x) { return x.tipo.tipo == "Empregado"; });
            _this.atualizar();
        });
        _this.atualizar();
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    RelatoriosComponent.prototype.relatorio = function (usuario) {
        this.us.setObjetoSelecionado(usuario);
        this.router.navigate([this.tela]);
    };
    RelatoriosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorios',
            template: __webpack_require__(/*! ./relatorios.component.html */ "./src/app/paginas/relatorios/relatorios.component.html"),
            styles: [__webpack_require__(/*! ./relatorios.component.css */ "./src/app/paginas/relatorios/relatorios.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_relatorios_service__WEBPACK_IMPORTED_MODULE_5__["RelatoriosService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"]])
    ], RelatoriosComponent);
    return RelatoriosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_4__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/star-rating/star-rating.component.css":
/*!***************************************************************!*\
  !*** ./src/app/paginas/star-rating/star-rating.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    height: 20px;\n    width: 25px;\n    line-height: 20px;\n}"

/***/ }),

/***/ "./src/app/paginas/star-rating/star-rating.component.html":
/*!****************************************************************!*\
  !*** ./src/app/paginas/star-rating/star-rating.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\n  <mat-icon>\n    {{showIcon(i)}}\n  </mat-icon>\n</button>\n<mat-error *ngIf=\"starCount == null || starCount == 0\">\n  Star count is <strong>required</strong> and cannot be zero\n</mat-error>\n"

/***/ }),

/***/ "./src/app/paginas/star-rating/star-rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/star-rating/star-rating.component.ts ***!
  \**************************************************************/
/*! exports provided: StarRatingComponent, StarRatingColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingColor", function() { return StarRatingColor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(snackBar) {
        this.snackBar = snackBar;
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snackBarDuration = 2000;
        this.ratingArr = [];
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    };
    StarRatingComponent.prototype.onClick = function (rating) {
        this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
            duration: this.snackBarDuration
        });
        this.ratingUpdated.emit(rating);
        return false;
    };
    StarRatingComponent.prototype.showIcon = function (index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rating'),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('starCount'),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "starCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('color'),
        __metadata("design:type", String)
    ], StarRatingComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StarRatingComponent.prototype, "ratingUpdated", void 0);
    StarRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mat-star-rating',
            template: __webpack_require__(/*! ./star-rating.component.html */ "./src/app/paginas/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.css */ "./src/app/paginas/star-rating/star-rating.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], StarRatingComponent);
    return StarRatingComponent;
}());

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/paginas/tabela/tabela-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/tabela/tabela-datasource.ts ***!
  \*****************************************************/
/*! exports provided: TabelaDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelaDataSource", function() { return TabelaDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Tabela view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var TabelaDataSource = /** @class */ (function (_super) {
    __extends(TabelaDataSource, _super);
    function TabelaDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    TabelaDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    TabelaDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TabelaDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TabelaDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return TabelaDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/paginas/tabela/tabela.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paginas/tabela/tabela.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/tabela/tabela.component.html":
/*!******************************************************!*\
  !*** ./src/app/paginas/tabela/tabela.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/paginas/tabela/tabela.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paginas/tabela/tabela.component.ts ***!
  \****************************************************/
/*! exports provided: TabelaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelaComponent", function() { return TabelaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tabela_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabela-datasource */ "./src/app/paginas/tabela/tabela-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabelaComponent = /** @class */ (function () {
    function TabelaComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    TabelaComponent.prototype.ngOnInit = function () {
        this.dataSource = new _tabela_datasource__WEBPACK_IMPORTED_MODULE_2__["TabelaDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TabelaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TabelaComponent.prototype, "sort", void 0);
    TabelaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabela',
            template: __webpack_require__(/*! ./tabela.component.html */ "./src/app/paginas/tabela/tabela.component.html"),
            styles: [__webpack_require__(/*! ./tabela.component.css */ "./src/app/paginas/tabela/tabela.component.css")]
        })
    ], TabelaComponent);
    return TabelaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/unidade/unidade.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paginas/unidade/unidade.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/unidade/unidade.component.html":
/*!********************************************************!*\
  !*** ./src/app/paginas/unidade/unidade.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"mat-elevation-z8\">\n        <form class=\"form my-2 my-lg-0\" #f=\"ngForm\">\n            <mat-form-field class=\"inputFormulario\">\n                <input matInput placeholder=\"Nome\" [(ngModel)]=\"objeto.titulo\" name=\"nome\" required>\n              </mat-form-field>\n  \n              <mat-form-field class=\"inputFormulario\">\n                  <input matInput type=\"number\" placeholder=\"Posição\" [(ngModel)]=\"objeto.posicao\" name=\"posicao\" required>\n                </mat-form-field>\n  \n            <mat-card-actions>\n              <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/unidades\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n              <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n              <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNoCurso()\" aria-label=\"Salvar ação\" [disabled]=\"!f.valid\">SALVAR</button>\n            </mat-card-actions>\n          </form>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/unidade/unidade.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paginas/unidade/unidade.component.ts ***!
  \******************************************************/
/*! exports provided: UnidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeComponent", function() { return UnidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnidadeComponent = /** @class */ (function (_super) {
    __extends(UnidadeComponent, _super);
    function UnidadeComponent(os, router, as, cursoService) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.unidade = {
            "titulo": "",
            "posicao": 0,
            "videos": [],
            "arquivos": [],
            "questionarios": []
        };
        _this.tituloPagina = "UNIDADE";
        _this.objeto = _this.unidade;
        _this.nomeAPI = "cursos";
        _this.tela = "/unidades";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    UnidadeComponent.prototype.salvarCurso = function () {
        this.cursoService.getObjetoSelecionado().unidades.push(this.objeto);
    };
    UnidadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unidade',
            template: __webpack_require__(/*! ./unidade.component.html */ "./src/app/paginas/unidade/unidade.component.html"),
            styles: [__webpack_require__(/*! ./unidade.component.css */ "./src/app/paginas/unidade/unidade.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"]])
    ], UnidadeComponent);
    return UnidadeComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/unidades/unidades.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/unidades/unidades.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/unidades/unidades.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/unidades/unidades.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">view_list</i> {{tituloPagina}}</h2>\n  <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'unidade')\">\n    <i class=\"material-icons md-48\">add</i>\n  </a>\n\n  <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/cursos\" style=\"float: right;\">\n    <i class=\"material-icons md-48\" title=\"Editar\">arrow_back</i>\n  </a>\n\n  <div fxLayout fxLayoutAlign=\"right right\">\n    <mat-form-field class=\"filtro formFiltro\">\n      <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n    </mat-form-field>\n  </div>\n  <div class=\"mat-elevation-z8\">\n\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"titulo\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Titulo</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.titulo}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"posicao\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Posição</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Posição\">{{row.posicao}}</mat-cell>\n        </ng-container>\n\n      <ng-container matColumnDef=\"videos\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Videos</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Videos\">\n          <a (click)=\"videos(row)\" title=\"Videos\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Videos\">video_label</i></a>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"arquivos\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Arquivos</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Arquivos\">\n          <a (click)=\"arquivos(row)\" title=\"Arquivos\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Arquivos\">file_copy</i></a>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"questionarios\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Questionários</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Questionários\">\n          <a (click)=\"questionarios(row)\" title=\"Questionários\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Questionários\">question_answer</i></a>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"acoes\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n          <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n          <a (click)=\"openDialog(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n    </mat-paginator>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/unidades/unidades.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/unidades/unidades.component.ts ***!
  \********************************************************/
/*! exports provided: UnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesComponent", function() { return UnidadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UnidadesComponent = /** @class */ (function (_super) {
    __extends(UnidadesComponent, _super);
    function UnidadesComponent(us, router, dialog, as, cursoService, uni) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.tituloPagina = "Lista de unidades";
        if (typeof _this.cursoService.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.cursoService.getObjetoSelecionado().unidades;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        // console.log(this.cursoService.getObjetoSelecionado());
        _this.us.nomeAPI = "cursos";
        _this.tela = "/unidade";
        _this.displayedColumns = ['titulo', 'posicao', 'videos', 'arquivos', 'questionarios', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    UnidadesComponent.prototype.videos = function (unidade) {
        this.uni.setObjetoSelecionado(unidade);
        this.router.navigate(["/videos"]);
    };
    UnidadesComponent.prototype.questionarios = function (unidade) {
        this.uni.setObjetoSelecionado(unidade);
        this.router.navigate(["/questionarios"]);
    };
    UnidadesComponent.prototype.arquivos = function (unidade) {
        this.uni.setObjetoSelecionado(unidade);
        this.router.navigate(["/arquivos"]);
    };
    UnidadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unidades',
            template: __webpack_require__(/*! ./unidades.component.html */ "./src/app/paginas/unidades/unidades.component.html"),
            styles: [__webpack_require__(/*! ./unidades.component.css */ "./src/app/paginas/unidades/unidades.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"]])
    ], UnidadesComponent);
    return UnidadesComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_1__["CrudListar"]));



/***/ }),

/***/ "./src/app/paginas/usuario/usuario.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paginas/usuario/usuario.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/usuario/usuario.component.html":
/*!********************************************************!*\
  !*** ./src/app/paginas/usuario/usuario.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"mat-elevation-z8\">\n      <h2 class=\"tituloPagina\">Usuário</h2>\n      <form class=\"form my-2 my-lg-0\" #f=\"ngForm\">\n          <mat-form-field class=\"inputFormulario\">\n              <input matInput placeholder=\"Nome\" [(ngModel)]=\"usuario.nome\" name=\"nome\" required>\n            </mat-form-field>\n\n          <mat-form-field class=\"inputFormulario\">\n            <input matInput placeholder=\"E-mail\" [(ngModel)]=\"usuario.email\" name=\"email\" required (blur)=\"emailDuplicado()\">\n          </mat-form-field>\n          <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"emailValido\">\n              <i class=\"material-icons\">error</i> Email já cadastrado\n            </div>\n\n          <mat-form-field class=\"inputFormulario\">\n            <input matInput placeholder=\"Senha\" [(ngModel)]=\"usuario.senha\" type=\"password\" name=\"senha\"\n              required>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFormulario\" *ngIf=\"this.as.ehAdministrador()\">\n              <mat-label>Perfil</mat-label>\n              <mat-select required [(ngModel)]=\"usuario.tipo\" name=\"perfil\" [compareWith]=\"compareById\">\n                <mat-option *ngFor=\"let t of tipoUsuario\" [value]=\"t\">\n                  {{t.tipo}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          <mat-card-actions>\n            <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/usuarios\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n            <a mat-raised-button  color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n            <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvar()\" aria-label=\"Salvar ação\" [disabled]=\"!f.valid\">SALVAR</button>\n          </mat-card-actions>\n        </form>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/usuario/usuario.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paginas/usuario/usuario.component.ts ***!
  \******************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/usuariomodel */ "./src/app/modelos/usuariomodel.ts");
/* harmony import */ var src_app_servicos_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/usuarios.service */ "./src/app/servicos/usuarios.service.ts");
/* harmony import */ var src_app_servicos_usuariotipo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/usuariotipo.service */ "./src/app/servicos/usuariotipo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(us, ut, router, as) {
        var _this = this;
        this.us = us;
        this.ut = ut;
        this.router = router;
        this.as = as;
        this.usuario = new src_app_modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.tipoUsuario = [];
        this.emailValido = true;
        this.usuario = new src_app_modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.ut.getTiposUsuario().subscribe(function (dados) {
            _this.tipoUsuario = dados;
        });
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        if (this.us.getObjetoSelecionado() != null) {
            this.usuario = this.us.getObjetoSelecionado();
        }
    };
    UsuarioComponent.prototype.compareById = function (f1, f2) {
        return f1 && f2 && f1._id === f2._id;
    };
    UsuarioComponent.prototype.emailDuplicado = function () {
        var _this = this;
        var usuemail;
        this.us.getUsuarioEmail(this.usuario.email).subscribe(function (dados) {
            usuemail = dados;
            if (usuemail != null) {
                _this.emailValido = false;
                _this.usuario.email = "";
            }
            else {
                _this.emailValido = true;
            }
        });
    };
    UsuarioComponent.prototype.ehAdministrador = function () {
        if (this.as.getUsuario() != null) {
            if (this.as.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    UsuarioComponent.prototype.salvar = function () {
        var _this = this;
        var tela = "/usuarios";
        if (!this.as.ehAdministrador()) {
            tela = "/login";
            var perfil = { "_id": "5d0a252f024766700740e08a", "tipo": "Empregado", "__v": 0 };
            this.usuario.tipo = perfil;
        }
        if (Object.keys(this.usuario).indexOf("_id") == -1) {
            this.us.incluir(this.usuario).subscribe(function (dados) {
                _this.router.navigate([tela]);
            });
        }
        else {
            this.us.atualizar(this.usuario).subscribe(function (dados) {
                _this.router.navigate([tela]);
            });
        }
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/paginas/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/paginas/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], src_app_servicos_usuariotipo_service__WEBPACK_IMPORTED_MODULE_3__["UsuariotipoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuarios/usuarios.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/usuarios/usuarios.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/usuarios/usuarios.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/usuarios/usuarios.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">account_circle</i> {{tituloPagina}}</h2>\n    <a mat-fab href=\"{{tela}}\" class=\"btnNovo\" title=\"Novo\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n    <!-- <a mat-raised-button  color=\"primary\" class=\"incluir\" href=\"{{tela}}\" style=\"float: right;\"><i class=\"material-icons md-48\">person_add</i> INCLUIR</a> -->\n    <div fxLayout fxLayoutAlign=\"right right\">\n        <mat-form-field class=\"filtro formFiltro\">\n          <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n        </mat-form-field>\n      </div>\n<div class=\"mat-elevation-z8\">\n  <!-- <mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n    <ng-container matColumnDef=\"nome\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Nome</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.nome}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.email}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"tipo\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{mostrarTipo(row.tipo)}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"editar\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n      <td mat-cell *matCellDef=\"let row\"> \n        <a (click)=\"editar(row)\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a> \n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"excluir\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n      <td mat-cell *matCellDef=\"let row\"> \n        <a (click)=\"openDialog(row)\" style=\"margin-left: 30px;\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n      </td>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table> -->\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"nome\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Nome</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.nome}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Email\">{{row.email}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"tipo\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"Tipo\">{{mostrarTipo(row.tipo)}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n              <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a> \n              <a (click)=\"openDialog(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\" *ngIf=\"row._id!='5d1b995f1c9d440000ddea3d'\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n\n\n\n  <!-- <table mat-table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" style=\"width: 100%\">\n\n      <ng-container matColumnDef=\"nome\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nome</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.nome}}</td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n        </ng-container>\n\n      <ng-container matColumnDef=\"tipo\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</th>\n          <td mat-cell *matCellDef=\"let row\">{{mostrarTipo(row.tipo)}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"editar\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width: 20px;\"></th>\n          <td mat-cell *matCellDef=\"let row\">\n              <a (click)=\"editar(row)\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a> \n          </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"excluir\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width: 20px;\"></th>\n          <td mat-cell *matCellDef=\"let row\">\n              <a (click)=\"openDialog(row)\" style=\"margin-left: 30px;\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table> -->\n\n  <mat-paginator #paginator\n    [length]=\"dataSource?.data?.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20, 50]\">\n  </mat-paginator>\n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/usuarios/usuarios.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/usuarios/usuarios.component.ts ***!
  \********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/usuarios.service */ "./src/app/servicos/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuariosComponent = /** @class */ (function (_super) {
    __extends(UsuariosComponent, _super);
    function UsuariosComponent(us, router, dialog, as) {
        var _this = _super.call(this, us, router, dialog) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.tituloPagina = "Lista de usuários";
        _this.tela = "/usuario";
        _this.displayedColumns = ['nome', 'email', 'tipo', 'acoes'];
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/paginas/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.css */ "./src/app/paginas/usuarios/usuarios.component.css")]
        })
        // export class UsuariosComponent implements OnInit {
        //   @ViewChild(MatPaginator) paginator: MatPaginator;
        //   @ViewChild(MatSort) sort: MatSort;
        //   dataSource: UsuariosDataSource;
        //   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        //   displayedColumns = ['nome', 'email', 'tipo', 'editar', 'excluir'];
        //   constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog) {
        //   }
        //   ngOnInit() {
        //     this.us.getUsuarios().subscribe(
        //       (dados: any[]) => {
        //         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        //         this.dataSource.data = dados;
        //         this.dataSource.sort = this.sort;
        //       }
        //     );
        //   }
        //   ngAfterViewInit(): void {
        //     this.us.getUsuarios().subscribe(
        //       (dados: any[]) => {
        //         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        //         this.dataSource.data = dados;
        //         this.dataSource.sort = this.sort;
        //       }
        //     );
        //   }
        //   openDialog(objeto: any): void {
        //     const dialogRef = this.dialog.open(ConfirmacaoComponent, {
        //       width: '300px',
        //       data: "Tem certeza que deseja excluir?"
        //     });
        //     dialogRef.afterClosed().subscribe(result => {
        //       if (result) {
        //         this.excluir(objeto);
        //       }
        //     });
        //   }
        //   atualizar() {
        //     this.us.getUsuarios().subscribe(
        //       (dados: any[]) => {
        //         this.dataSource = new UsuariosDataSource(this.paginator, this.sort, this.us);
        //         this.dataSource.data = dados;
        //       }
        //     );
        //   }
        //   mostrarTipo(objeto: UsuarioTipo) {
        //     if (typeof objeto != "undefined") {
        //       return objeto.tipo;
        //     }
        //     return "-";
        //   }
        //   editar(objeto: any) {
        //     this.us.setUsuarioSelecionado(objeto);
        //     this.router.navigate(["/usuario"]);
        //   }
        //   excluir(objeto: any) {
        //     this.us.setUsuarioSelecionado(objeto);
        //     this.us.excluirUsuario(objeto).subscribe(
        //       (dados) => {
        //         this.atualizar();
        //       });
        //   }
        //   public doFilter = (value: string) => {
        //     this.dataSource.filter = value.trim().toLocaleLowerCase();
        //   }
        // }
        ,
        __metadata("design:paramtypes", [src_app_servicos_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_4__["CrudListar"]));

// export class UsuariosComponent implements OnInit, AfterViewInit {
//   public displayedColumns = ['nome', 'email', 'tipo', 'acoes'];
//   public dataSource = new MatTableDataSource<Usuario>(); 
//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   constructor(public us: UsuariosService, public router: Router, public dialog: MatDialog) { }
//   ngOnInit() {
//     this.atualizar();
//   }
//   ngAfterViewInit(): void {
//      this.dataSource.sort = this.sort;
//      this.dataSource.paginator = this.paginator;
//   }
//   public doFilter = (value: string) => {
//     this.dataSource.filter = value.trim().toLocaleLowerCase();
//   }
//   openDialog(objeto: any): void {
//     const dialogRef = this.dialog.open(ConfirmacaoComponent, {
//       width: '300px',
//       data: "Tem certeza que deseja excluir?"
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.excluir(objeto);
//       }
//     });
//   }
//   mostrarTipo(objeto: UsuarioTipo) {
//     if (typeof objeto != "undefined") {
//       return objeto.tipo;
//     }
//     return "-";
//   }
//   editar(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.router.navigate(["/usuario"]);
//   }
//   excluir(objeto: any) {
//     this.us.setUsuarioSelecionado(objeto);
//     this.us.excluirUsuario(objeto).subscribe(
//       (dados) => {
//         this.atualizar();
//       });
//   }
//   atualizar() {
//     this.us.getUsuarios().subscribe(
//       (dados: any[]) => {
//         this.dataSource.data = dados;
//       }
//     );
//   }
// }


/***/ }),

/***/ "./src/app/paginas/video/video.component.css":
/*!***************************************************!*\
  !*** ./src/app/paginas/video/video.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/video/video.component.html":
/*!****************************************************!*\
  !*** ./src/app/paginas/video/video.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"mat-elevation-z8\">\n    <form class=\"form my-2 my-lg-0\" #f=\"ngForm\" method=\"post\" enctype=\"multipart/form-data\" form>\n      <mat-form-field class=\"inputFormulario\">\n        <input matInput placeholder=\"Titulo\" [(ngModel)]=\"objeto.titulo\" name=\"titulo\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"inputFormulario\">\n        <input matInput type=\"number\" placeholder=\"Posição\" [(ngModel)]=\"objeto.posicao\" name=\"posicao\" required>\n      </mat-form-field>\n\n      <mat-tab-group>\n        <mat-tab label=\"URL para o video\">\n            <mat-form-field class=\"inputFormulario\">\n                <input matInput placeholder=\"URL\" [(ngModel)]=\"objeto.url\" name=\"url\">\n              </mat-form-field>\n        </mat-tab>\n        <mat-tab label=\"Enviar  video\">\n            <button mat-button (click)=\"inputFile.click()\" class=\"btnUpload\">\n                <i class=\"material-icons md-48\">attach_file</i>\n                Selecionar arquivo\n              </button> {{ nomeArquivo }}\n              <input #inputFile type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"\n                [style.display]=\"'none'\">\n        </mat-tab>\n      </mat-tab-group>\n\n      <video controls [src]=\"sanitizarURL(objeto.url)\" width=\"426\" height=\"240\" [hidden]=\"!exibirTagVideo\"></video>\n      <iframe width=\"426\" height=\"240\" [src]=\"sanitizarURL(objeto.url)\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen [hidden]=\"!exibirTagEmbebed\"></iframe>\n\n\n      <!-- <mat-form-field class=\"inputFormulario\">\n        <input matInput placeholder=\"URL\" [(ngModel)]=\"objeto.url\" name=\"url\">\n      </mat-form-field> -->\n\n      <!-- <input type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"> -->\n\n      <!-- <input id=\"fileInput\" type=\"file\" class=\"ng-hide\">\n      <md-input-container flex class=\"md-block\">\n        <input type=\"text\" ng-model=\"fileName\" disabled>\n        <div class=\"hint\">Select your file</div>\n      </md-input-container>\n      <div>\n        <md-button id=\"uploadButton\" class=\"md-fab md-mini\">\n          <md-icon class=\"material-icons\">attach_file</md-icon>\n        </md-button>\n      </div> -->\n\n      <!-- <button mat-button (click)=\"inputFile.click()\" class=\"btnUpload\">\n        <i class=\"material-icons md-48\">attach_file</i>\n        Selecionar arquivo\n      </button> {{ nomeArquivo }}\n      <input #inputFile type=\"file\" name=\"filetoupload\" #fd=\"ngModel\" [(ngModel)]=\"arquivo\" (change)=\"fileChange($event)\"\n        [style.display]=\"'none'\"> -->\n\n\n\n      <!-- <input type=\"submit\"> -->\n\n      <!-- <label for=\"singleFile\">Upload file</label>\n                  <input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n                  <br>\n                   \n                  <mat-file-upload-queue #fileUploadQueue\n                      [fileAlias]=\"'file'\"\n                      [httpUrl]=\"'http://localhost:8180/jax-rs-jersey-application-sample'\">\n                   \n                      <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n                  </mat-file-upload-queue> -->\n\n      <!-- <button mat-button color=\"warn\" (click)=\"onClick()\" type=\"button\">\n                      <mat-icon>file_upload</mat-icon>\n                      {{text}}\n                    </button>\n                    <br/>\n                    <ul>\n                      <li *ngFor=\"let file of files\" [@fadeInOut]=\"file.state\">\n                        <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>\n                        <span id=\"file-label\">\n                          {{file.data.name}}\n                          <a title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n                            <mat-icon>refresh</mat-icon>\n                          </a>\n                          <a title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n                            <mat-icon>cancel</mat-icon>\n                          </a>\n                        </span>\n                      </li>\n                    </ul>\n                    <input type=\"file\" id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\" /> -->\n\n      <mat-card-actions>\n        <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/videos\" *ngIf=\"this.as.ehAdministrador()\">CANCELAR</a>\n        <a mat-raised-button color=\"primary\" class=\"voltar\" routerLink=\"/login\" *ngIf=\"!this.as.ehUsuarioAutenticado()\">CANCELAR</a>\n        <button mat-raised-button color=\"primary\" class=\"salvar\" (click)=\"salvarNaUnidade()\" aria-label=\"Salvar ação\"\n          [disabled]=\"!f.valid\">SALVAR</button>\n      </mat-card-actions>\n    </form>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/paginas/video/video.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paginas/video/video.component.ts ***!
  \**************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/crudobjeto */ "./src/app/modelos/crudobjeto.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_servicos_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/upload.service */ "./src/app/servicos/upload.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var VideoComponent = /** @class */ (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent(os, router, as, cursoService, uni, _http, uploadService, sanitize) {
        var _this = _super.call(this, os, router, as, cursoService) || this;
        _this.os = os;
        _this.router = router;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this._http = _http;
        _this.uploadService = uploadService;
        _this.sanitize = sanitize;
        _this.video = {
            "titulo": "",
            "url": "",
            "posicao": 0,
            "vistoPor": []
        };
        _this.nomeArquivo = "";
        _this.exibirTagVideo = false;
        _this.exibirTagEmbebed = false;
        _this.tituloPagina = "VIDEO";
        _this.objeto = _this.video;
        _this.nomeAPI = "cursos";
        _this.tela = "/videos";
        _this.filtro = "titulo";
        _this.cursoCampo = "unidades";
        _this.uploadedFiles = new Array();
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    VideoComponent.prototype.sanitizarURL = function (url) {
        return this.sanitize.bypassSecurityTrustResourceUrl(url);
    };
    VideoComponent.prototype.salvarNaUnidade = function () {
        var _this = this;
        if (this.uploadedFiles.length > 0) {
            this.objeto.url = "https://api-sistema-treinamento.herokuapp.com/download/" + this.upload();
        }
        if (Object.keys(this.objeto).indexOf("_id") > -1) {
            var pos = this.uni.getObjetoSelecionado().videos.findIndex(function (x) { return x._id == _this.objeto._id; });
            this.uni.getObjetoSelecionado().videos.splice(pos, 1);
            this.uni.getObjetoSelecionado().videos.push(this.objeto);
            pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        else {
            this.uni.getObjetoSelecionado().videos.push(this.objeto);
            var pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
            this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
            this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
            this.objeto = this.cursoService.getObjetoSelecionado();
        }
        this.os.nomeAPI = "cursos";
        this.os.atualizar(this.objeto).subscribe(function (dados) {
            _this.router.navigate([_this.tela]);
        });
    };
    VideoComponent.prototype.fileChange = function (element) {
        this.uploadedFiles = element.target.files;
        this.nomeArquivo = element.target.files[0].name;
    };
    VideoComponent.prototype.upload = function () {
        var formData = new FormData();
        this.cont = new Array();
        var nome = "";
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            this.cont.push(this.uploadedFiles[i].name);
            formData.append("upload", this.uploadedFiles[i], new Date().getTime() + this.uploadedFiles[i].name);
            nome = formData.get("upload")["name"];
        }
        this.uploadService.upload(formData).subscribe(function (dados) {
            nome = formData.get("upload")["name"];
        });
        return nome;
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/paginas/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/paginas/video/video.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 100 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_2__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"],
            src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], src_app_servicos_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}(src_app_modelos_crudobjeto__WEBPACK_IMPORTED_MODULE_1__["Crudobjeto"]));



/***/ }),

/***/ "./src/app/paginas/videos/videos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paginas/videos/videos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginas/videos/videos.component.html":
/*!******************************************************!*\
  !*** ./src/app/paginas/videos/videos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h2 class=\"tituloPagina\"><i class=\"material-icons md-48\">video_label</i> {{tituloPagina}}</h2>\n    <a mat-fab class=\"btnNovo\" title=\"Novo\" (click)=\"novo(this.curso, 'video')\">\n      <i class=\"material-icons md-48\">add</i>\n    </a>\n\n    <a mat-raised-button  color=\"primary\" class=\"voltar\" title=\"Voltar\" routerLink=\"/unidades\" style=\"float: right;\">\n      <i class=\"material-icons md-48\" title=\"Editar\">arrow_back</i>\n    </a>\n  \n    <div fxLayout fxLayoutAlign=\"right right\">\n      <mat-form-field class=\"filtro formFiltro\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filtro\">\n      </mat-form-field>\n    </div>\n    <div class=\"mat-elevation-z8\">\n  \n  \n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"titulo\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Titulo</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"Nome\">{{row.titulo}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"url\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>URL</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" data-label=\"URL\">{{row.url}}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"posicao\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header style=\"max-width: 80px;\">Posição</mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"Posição\" style=\"max-width: 80px\">{{row.posicao}}</mat-cell>\n            </ng-container>\n  \n        <ng-container matColumnDef=\"acoes\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"colunaAcoes\">Ações</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" data-label=\"Ações\" class=\"colunaAcoes\">\n            <a (click)=\"editar(row)\" style=\"margin-right: 20px;\"><i class=\"material-icons md-48 btnCRUDEditar\" title=\"Editar\">edit</i></a>\n            <a (click)=\"abrirDialogo(row)\" class=\"btnCRUDExcluir\" title=\"Excluir\"><i class=\"material-icons md-48\">delete</i></a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n  \n      <mat-paginator #paginator [length]=\"dataSource?.data?.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/paginas/videos/videos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paginas/videos/videos.component.ts ***!
  \****************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicos/unidades.service */ "./src/app/servicos/unidades.service.ts");
/* harmony import */ var src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/crudmodel */ "./src/app/modelos/crudmodel.ts");
/* harmony import */ var src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicos/objetos.service */ "./src/app/servicos/objetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/autenticacao.service */ "./src/app/servicos/autenticacao.service.ts");
/* harmony import */ var src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/cursos.service */ "./src/app/servicos/cursos.service.ts");
/* harmony import */ var _confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmacao/confirmacao.component */ "./src/app/paginas/confirmacao/confirmacao.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VideosComponent = /** @class */ (function (_super) {
    __extends(VideosComponent, _super);
    function VideosComponent(us, router, dialog, as, cursoService, uni) {
        var _this = _super.call(this, us, router, dialog, cursoService) || this;
        _this.us = us;
        _this.router = router;
        _this.dialog = dialog;
        _this.as = as;
        _this.cursoService = cursoService;
        _this.uni = uni;
        _this.tituloPagina = "Lista de Videos";
        if (typeof _this.uni.getObjetoSelecionado() != "undefined") {
            _this.dadosSessao = _this.uni.getObjetoSelecionado().videos;
        }
        _this.curso = _this.cursoService.getObjetoSelecionado();
        _this.us.nomeAPI = "cursos";
        _this.tela = "/video";
        _this.displayedColumns = ['titulo', 'url', 'posicao', 'acoes'];
        _this.cursoCampo = "unidades";
        _this.as.permissaoAcesso("ADM", "Acesso Negado");
        return _this;
    }
    VideosComponent.prototype.excluirNaUnidade = function (objeto) {
        var _this = this;
        var pos = this.uni.getObjetoSelecionado().videos.findIndex(function (x) { return x._id == objeto._id; });
        this.uni.getObjetoSelecionado().videos.splice(pos, 1);
        pos = this.cursoService.getObjetoSelecionado().unidades.findIndex(function (x) { return x._id == _this.uni.getObjetoSelecionado()._id; });
        this.cursoService.getObjetoSelecionado().unidades.splice(pos, 1);
        var unidade = this.uni.getObjetoSelecionado();
        this.cursoService.getObjetoSelecionado().unidades.push(this.uni.getObjetoSelecionado());
        this.us.nomeAPI = "cursos";
        this.us.atualizar(this.cursoService.getObjetoSelecionado()).subscribe(function (dados) {
            _this.atualizar();
        });
    };
    VideosComponent.prototype.abrirDialogo = function (objeto) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmacao_confirmacao_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmacaoComponent"], {
            width: '300px',
            data: "Tem certeza que deseja excluir?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.excluirNaUnidade(objeto);
            }
        });
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/paginas/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/paginas/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicos_objetos_service__WEBPACK_IMPORTED_MODULE_3__["ObjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_servicos_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"], src_app_servicos_cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"], src_app_servicos_unidades_service__WEBPACK_IMPORTED_MODULE_1__["UnidadesService"]])
    ], VideosComponent);
    return VideosComponent;
}(src_app_modelos_crudmodel__WEBPACK_IMPORTED_MODULE_2__["CrudListar"]));



/***/ }),

/***/ "./src/app/rotas/rotas.module.ts":
/*!***************************************!*\
  !*** ./src/app/rotas/rotas.module.ts ***!
  \***************************************/
/*! exports provided: RotasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotasModule", function() { return RotasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paginas_pagina_curso_pagina_curso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paginas/pagina-curso/pagina-curso.component */ "./src/app/paginas/pagina-curso/pagina-curso.component.ts");
/* harmony import */ var _paginas_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paginas/login/login.component */ "./src/app/paginas/login/login.component.ts");
/* harmony import */ var _paginas_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paginas/usuarios/usuarios.component */ "./src/app/paginas/usuarios/usuarios.component.ts");
/* harmony import */ var _paginas_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paginas/usuario/usuario.component */ "./src/app/paginas/usuario/usuario.component.ts");
/* harmony import */ var _paginas_erro_erro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../paginas/erro/erro.component */ "./src/app/paginas/erro/erro.component.ts");
/* harmony import */ var _paginas_cursoscategorias_cursoscategorias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paginas/cursoscategorias/cursoscategorias.component */ "./src/app/paginas/cursoscategorias/cursoscategorias.component.ts");
/* harmony import */ var _paginas_cursoscategoria_cursoscategoria_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../paginas/cursoscategoria/cursoscategoria.component */ "./src/app/paginas/cursoscategoria/cursoscategoria.component.ts");
/* harmony import */ var _paginas_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paginas/cursos/cursos.component */ "./src/app/paginas/cursos/cursos.component.ts");
/* harmony import */ var _paginas_curso_curso_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../paginas/curso/curso.component */ "./src/app/paginas/curso/curso.component.ts");
/* harmony import */ var _paginas_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../paginas/unidades/unidades.component */ "./src/app/paginas/unidades/unidades.component.ts");
/* harmony import */ var _paginas_unidade_unidade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../paginas/unidade/unidade.component */ "./src/app/paginas/unidade/unidade.component.ts");
/* harmony import */ var _paginas_videos_videos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../paginas/videos/videos.component */ "./src/app/paginas/videos/videos.component.ts");
/* harmony import */ var _paginas_video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../paginas/video/video.component */ "./src/app/paginas/video/video.component.ts");
/* harmony import */ var _paginas_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../paginas/arquivos/arquivos.component */ "./src/app/paginas/arquivos/arquivos.component.ts");
/* harmony import */ var _paginas_arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../paginas/arquivo/arquivo.component */ "./src/app/paginas/arquivo/arquivo.component.ts");
/* harmony import */ var _paginas_questionarios_questionarios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../paginas/questionarios/questionarios.component */ "./src/app/paginas/questionarios/questionarios.component.ts");
/* harmony import */ var _paginas_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../paginas/questionario/questionario.component */ "./src/app/paginas/questionario/questionario.component.ts");
/* harmony import */ var _paginas_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../paginas/questoes/questoes.component */ "./src/app/paginas/questoes/questoes.component.ts");
/* harmony import */ var _paginas_questao_questao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../paginas/questao/questao.component */ "./src/app/paginas/questao/questao.component.ts");
/* harmony import */ var _paginas_alternativas_alternativas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../paginas/alternativas/alternativas.component */ "./src/app/paginas/alternativas/alternativas.component.ts");
/* harmony import */ var _paginas_alternativa_alternativa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../paginas/alternativa/alternativa.component */ "./src/app/paginas/alternativa/alternativa.component.ts");
/* harmony import */ var _paginas_cursodetalhes_cursodetalhes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../paginas/cursodetalhes/cursodetalhes.component */ "./src/app/paginas/cursodetalhes/cursodetalhes.component.ts");
/* harmony import */ var _paginas_assistirvideo_assistirvideo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../paginas/assistirvideo/assistirvideo.component */ "./src/app/paginas/assistirvideo/assistirvideo.component.ts");
/* harmony import */ var _paginas_questionarioaluno_questionarioaluno_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../paginas/questionarioaluno/questionarioaluno.component */ "./src/app/paginas/questionarioaluno/questionarioaluno.component.ts");
/* harmony import */ var _paginas_questionarioresposta_questionarioresposta_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../paginas/questionarioresposta/questionarioresposta.component */ "./src/app/paginas/questionarioresposta/questionarioresposta.component.ts");
/* harmony import */ var _paginas_relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../paginas/relatorios/relatorios.component */ "./src/app/paginas/relatorios/relatorios.component.ts");
/* harmony import */ var _paginas_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../paginas/relatorio/relatorio.component */ "./src/app/paginas/relatorio/relatorio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var rotas = [
    { path: "cursos", component: _paginas_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_10__["CursosComponent"] },
    { path: "curso", component: _paginas_curso_curso_component__WEBPACK_IMPORTED_MODULE_11__["CursoComponent"] },
    { path: "cursos/:id", component: _paginas_pagina_curso_pagina_curso_component__WEBPACK_IMPORTED_MODULE_3__["PaginaCursoComponent"] },
    { path: "", component: _paginas_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "login", component: _paginas_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "usuarios", component: _paginas_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosComponent"] },
    { path: "usuario", component: _paginas_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"] },
    { path: "cursoscategorias", component: _paginas_cursoscategorias_cursoscategorias_component__WEBPACK_IMPORTED_MODULE_8__["CursoscategoriasComponent"] },
    { path: "cursoscategoria", component: _paginas_cursoscategoria_cursoscategoria_component__WEBPACK_IMPORTED_MODULE_9__["CursoscategoriaComponent"] },
    { path: "unidades", component: _paginas_unidades_unidades_component__WEBPACK_IMPORTED_MODULE_12__["UnidadesComponent"] },
    { path: "unidade", component: _paginas_unidade_unidade_component__WEBPACK_IMPORTED_MODULE_13__["UnidadeComponent"] },
    { path: "videos", component: _paginas_videos_videos_component__WEBPACK_IMPORTED_MODULE_14__["VideosComponent"] },
    { path: "video", component: _paginas_video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"] },
    { path: "arquivos", component: _paginas_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_16__["ArquivosComponent"] },
    { path: "arquivo", component: _paginas_arquivo_arquivo_component__WEBPACK_IMPORTED_MODULE_17__["ArquivoComponent"] },
    { path: "questionarios", component: _paginas_questionarios_questionarios_component__WEBPACK_IMPORTED_MODULE_18__["QuestionariosComponent"] },
    { path: "questionario", component: _paginas_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_19__["QuestionarioComponent"] },
    { path: "questoes", component: _paginas_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_20__["QuestoesComponent"] },
    { path: "questao", component: _paginas_questao_questao_component__WEBPACK_IMPORTED_MODULE_21__["QuestaoComponent"] },
    { path: "alternativas", component: _paginas_alternativas_alternativas_component__WEBPACK_IMPORTED_MODULE_22__["AlternativasComponent"] },
    { path: "alternativa", component: _paginas_alternativa_alternativa_component__WEBPACK_IMPORTED_MODULE_23__["AlternativaComponent"] },
    { path: "cursodetalhes", component: _paginas_cursodetalhes_cursodetalhes_component__WEBPACK_IMPORTED_MODULE_24__["CursodetalhesComponent"] },
    { path: "assistirvideo", component: _paginas_assistirvideo_assistirvideo_component__WEBPACK_IMPORTED_MODULE_25__["AssistirvideoComponent"] },
    { path: "questionarioaluno", component: _paginas_questionarioaluno_questionarioaluno_component__WEBPACK_IMPORTED_MODULE_26__["QuestionarioalunoComponent"] },
    { path: "questionarioresposta", component: _paginas_questionarioresposta_questionarioresposta_component__WEBPACK_IMPORTED_MODULE_27__["QuestionariorespostaComponent"] },
    { path: "relatorios", component: _paginas_relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_28__["RelatoriosComponent"] },
    { path: "relatorio", component: _paginas_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_29__["RelatorioComponent"] },
    { path: "erro", component: _paginas_erro_erro_component__WEBPACK_IMPORTED_MODULE_7__["ErroComponent"] },
];
var RotasModule = /** @class */ (function () {
    function RotasModule() {
    }
    RotasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(rotas)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], RotasModule);
    return RotasModule;
}());



/***/ }),

/***/ "./src/app/servicos/autenticacao.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicos/autenticacao.service.ts ***!
  \**************************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modelos/usuariomodel */ "./src/app/modelos/usuariomodel.ts");
/* harmony import */ var _mensagem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagem.service */ "./src/app/servicos/mensagem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AutenticacaoService = /** @class */ (function () {
    function AutenticacaoService(http, router, ms) {
        this.http = http;
        this.router = router;
        this.ms = ms;
        // private url = 'http://localhost:8080/login/';
        this.url = 'https://api-sistema-treinamento.herokuapp.com/login';
        this.usuarioModelo = new _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        this.usuario = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.usuarioModelo);
        this.usuarioLogado = this.usuario.asObservable();
    }
    AutenticacaoService.prototype.login = function (data) {
        var _this = this;
        return this.http.post(this.url, data, httpOptions).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return _this.save_token(result); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    };
    AutenticacaoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AutenticacaoService.prototype.save_token = function (data) {
        // if (data.success) {
        //     localStorage.setItem('usuario', data);
        //     return;
        // }
        if (data != null) {
            localStorage.setItem('usuario', JSON.stringify(data));
            this.alterarUsuario(data);
            return;
        }
    };
    AutenticacaoService.prototype.canActivate = function () {
        var token = localStorage.getItem('usuario');
        if (token == null) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AutenticacaoService.prototype.getUsuario = function () {
        var usuario = null;
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));
        }
        catch (error) {
            console.log(error);
        }
        return usuario;
        // console.log(localStorage.getItem('usuario'));
        // if(localStorage.getItem('usuario') != null) {
        //     return JSON.parse(localStorage.getItem('usuario'));
        // }
        // return null;
    };
    AutenticacaoService.prototype.encerrarSessao = function () {
        localStorage.removeItem("usuario");
        this.alterarUsuario(new _modelos_usuariomodel__WEBPACK_IMPORTED_MODULE_5__["Usuario"]());
        this.router.navigate(['login']);
    };
    AutenticacaoService.prototype.alterarUsuario = function (usuarioLogado) {
        this.usuario.next(usuarioLogado);
    };
    AutenticacaoService.prototype.ehAdministrador = function () {
        if (this.getUsuario() != null) {
            if (this.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    AutenticacaoService.prototype.ehUsuarioAutenticado = function () {
        if (this.getUsuario() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AutenticacaoService.prototype.permissaoAcesso = function (tipo, msg) {
        if (tipo == "ADM") {
            if (!this.ehAdministrador()) {
                this.ms.setMensagem(msg);
                this.router.navigate(["/erro"]);
            }
        }
        else if (tipo == "AUTENTICADO") {
            if (!this.ehUsuarioAutenticado()) {
                this.ms.setMensagem(msg);
                this.router.navigate(["/erro"]);
            }
        }
    };
    AutenticacaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _mensagem_service__WEBPACK_IMPORTED_MODULE_6__["MensagemService"]])
    ], AutenticacaoService);
    return AutenticacaoService;
}());



/***/ }),

/***/ "./src/app/servicos/cursos.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicos/cursos.service.ts ***!
  \********************************************/
/*! exports provided: CursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosService", function() { return CursosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursosService = /** @class */ (function () {
    function CursosService() {
    }
    CursosService.prototype.setObjetoSelecionado = function (usu) {
        this.objeto = this.ordernar(usu);
    };
    CursosService.prototype.getObjetoSelecionado = function () {
        return this.objeto;
    };
    CursosService.prototype.ordernar = function (curso) {
        // ordenar unidade
        curso.unidades.sort(function (a, b) {
            return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
        });
        // ordenar videos
        curso.unidades.forEach(function (uni) {
            uni.videos.sort(function (a, b) {
                return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
            });
        });
        // ordenar arquivos
        curso.unidades.forEach(function (uni) {
            uni.arquivos.sort(function (a, b) {
                return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
            });
        });
        // ordenar questionarios
        curso.unidades.forEach(function (uni) {
            uni.questionarios.sort(function (a, b) {
                return a.posica < b.posicao ? -1 : a.posicao > b.posicao ? 1 : 0;
            });
        });
        return curso;
    };
    CursosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CursosService);
    return CursosService;
}());



/***/ }),

/***/ "./src/app/servicos/mensagem.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicos/mensagem.service.ts ***!
  \**********************************************/
/*! exports provided: MensagemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemService", function() { return MensagemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MensagemService = /** @class */ (function () {
    function MensagemService() {
    }
    MensagemService.prototype.setMensagem = function (msg) {
        this.mensagem = msg;
    };
    MensagemService.prototype.getMensagem = function () {
        return this.mensagem;
    };
    MensagemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MensagemService);
    return MensagemService;
}());



/***/ }),

/***/ "./src/app/servicos/objetos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicos/objetos.service.ts ***!
  \*********************************************/
/*! exports provided: ObjetosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetosService", function() { return ObjetosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjetosService = /** @class */ (function () {
    function ObjetosService(http) {
        this.http = http;
        this.url = "https://api-sistema-treinamento.herokuapp.com/";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    ObjetosService.prototype.get = function () {
        return this.http.get(this.url + this.nomeAPI);
    };
    ObjetosService.prototype.getObjeto = function (id) {
        return this.http.get(this.url + this.nomeAPI + "/" + id);
    };
    ObjetosService.prototype.getObjetoFiltro = function (valor) {
        return this.http.get(this.url + this.nomeAPI + "/" + this.filtro + "/" + valor);
    };
    ObjetosService.prototype.setObjetoSelecionado = function (usu) {
        this.objeto = usu;
    };
    ObjetosService.prototype.getObjetoSelecionado = function () {
        return this.objeto;
    };
    ObjetosService.prototype.incluir = function (u) {
        return this.http.post(this.url + this.nomeAPI, u, this.cabecalhoJson);
    };
    ObjetosService.prototype.atualizar = function (u) {
        return this.http.put(this.url + this.nomeAPI + "/" + u._id, u, this.cabecalhoJson);
    };
    ObjetosService.prototype.excluir = function (u) {
        return this.http.delete(this.url + this.nomeAPI + "/" + u._id);
    };
    ObjetosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ObjetosService);
    return ObjetosService;
}());



/***/ }),

/***/ "./src/app/servicos/questionarios.service.ts":
/*!***************************************************!*\
  !*** ./src/app/servicos/questionarios.service.ts ***!
  \***************************************************/
/*! exports provided: QuestionariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionariosService", function() { return QuestionariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionariosService = /** @class */ (function () {
    function QuestionariosService() {
    }
    QuestionariosService.prototype.setObjetoSelecionado = function (usu) {
        this.objeto = usu;
    };
    QuestionariosService.prototype.getObjetoSelecionado = function () {
        return this.objeto;
    };
    QuestionariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestionariosService);
    return QuestionariosService;
}());



/***/ }),

/***/ "./src/app/servicos/questoes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicos/questoes.service.ts ***!
  \**********************************************/
/*! exports provided: QuestoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesService", function() { return QuestoesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestoesService = /** @class */ (function () {
    function QuestoesService() {
    }
    QuestoesService.prototype.setObjetoSelecionado = function (usu) {
        this.objeto = usu;
    };
    QuestoesService.prototype.getObjetoSelecionado = function () {
        return this.objeto;
    };
    QuestoesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestoesService);
    return QuestoesService;
}());



/***/ }),

/***/ "./src/app/servicos/relatorios.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicos/relatorios.service.ts ***!
  \************************************************/
/*! exports provided: RelatoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosService", function() { return RelatoriosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelatoriosService = /** @class */ (function () {
    function RelatoriosService(http) {
        this.http = http;
        this.url = "https://api-sistema-treinamento.herokuapp.com";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    RelatoriosService.prototype.get = function () {
        return this.http.get(this.url + "/usuarios/tipo/Empregado");
    };
    RelatoriosService.prototype.setObjetoSelecionado = function (usu) {
        this.usuario = usu;
    };
    RelatoriosService.prototype.getObjetoSelecionado = function () {
        return this.usuario;
    };
    RelatoriosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RelatoriosService);
    return RelatoriosService;
}());



/***/ }),

/***/ "./src/app/servicos/servico-cursos.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicos/servico-cursos.service.ts ***!
  \****************************************************/
/*! exports provided: ServicoCursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoCursosService", function() { return ServicoCursosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicoCursosService = /** @class */ (function () {
    function ServicoCursosService(http) {
        this.http = http;
        this.url = "https://api-sistema-treinamento.herokuapp.com";
        // url: string = "http://localhost:8080/";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    ServicoCursosService.prototype.getCursos = function () {
        return this.http.get(this.url + "/cursos");
    };
    ServicoCursosService.prototype.getCurso = function (id) {
        return this.http.get(this.url + "/cursos/" + id);
    };
    ServicoCursosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicoCursosService);
    return ServicoCursosService;
}());



/***/ }),

/***/ "./src/app/servicos/unidades.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicos/unidades.service.ts ***!
  \**********************************************/
/*! exports provided: UnidadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesService", function() { return UnidadesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnidadesService = /** @class */ (function () {
    function UnidadesService() {
    }
    UnidadesService.prototype.setObjetoSelecionado = function (usu) {
        this.objeto = usu;
    };
    UnidadesService.prototype.getObjetoSelecionado = function () {
        return this.objeto;
    };
    UnidadesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UnidadesService);
    return UnidadesService;
}());



/***/ }),

/***/ "./src/app/servicos/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicos/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        // url: string = "https://api-sistema-treinamento.herokuapp.com";
        this.url = "http://localhost:8080";
        // url = "https://sistema-treinamentos.herokuapp.com";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    UploadService.prototype.upload = function (arquivo) {
        try {
            return this.http.post(this.url + "/upload", arquivo);
        }
        catch (error) {
            console.log(error);
        }
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/servicos/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicos/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosService = /** @class */ (function () {
    function UsuariosService(http) {
        this.http = http;
        this.url = "https://api-sistema-treinamento.herokuapp.com";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    UsuariosService.prototype.get = function () {
        return this.http.get(this.url + "/usuarios");
    };
    UsuariosService.prototype.getObjeto = function (id) {
        return this.http.get(this.url + "/usuarios/" + id);
    };
    UsuariosService.prototype.getUsuarioEmail = function (email) {
        return this.http.get(this.url + "/usuarios/email/" + email);
    };
    UsuariosService.prototype.setObjetoSelecionado = function (usu) {
        this.usuario = usu;
    };
    UsuariosService.prototype.getObjetoSelecionado = function () {
        return this.usuario;
    };
    UsuariosService.prototype.incluir = function (u) {
        return this.http.post(this.url + "/usuarios", u, this.cabecalhoJson);
    };
    UsuariosService.prototype.atualizar = function (u) {
        return this.http.put(this.url + "/usuarios/" + u._id, u, this.cabecalhoJson);
    };
    UsuariosService.prototype.excluir = function (u) {
        return this.http.delete(this.url + "/usuarios/" + u._id);
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/app/servicos/usuariotipo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicos/usuariotipo.service.ts ***!
  \*************************************************/
/*! exports provided: UsuariotipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariotipoService", function() { return UsuariotipoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuariotipoService = /** @class */ (function () {
    function UsuariotipoService(http) {
        this.http = http;
        this.url = "https://api-sistema-treinamento.herokuapp.com";
        this.cabecalhoJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    UsuariotipoService.prototype.getTiposUsuario = function () {
        return this.http.get(this.url + "/usuariotipo");
    };
    UsuariotipoService.prototype.getTipoUsuario = function (id) {
        return this.http.get(this.url + "/usuariotipo/" + id);
    };
    UsuariotipoService.prototype.setUsuarioSelecionado = function (usu) {
        this.usuarioTipo = usu;
    };
    UsuariotipoService.prototype.getUsuarioSelecionado = function () {
        return this.usuarioTipo;
    };
    UsuariotipoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuariotipoService);
    return UsuariotipoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
}).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/raphael/ui-sistema-treinamentos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map