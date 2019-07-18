import { ObjetosService } from "../servicos/objetos.service";
import { Router } from "@angular/router";
import { AutenticacaoService } from "../servicos/autenticacao.service";
import { OnInit } from "@angular/core";

export class Crudobjeto implements OnInit {
    objeto: any;
    nomeAPI: string;
    tela: string;
    filtro: string;
    campoFiltro: string;
    campoValido = true;

    constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
        this.os.nomeAPI = this.nomeAPI;
    }


    ngOnInit() {
        if (this.os.getObjetoSelecionado() != null) {
            this.objeto = this.os.getObjetoSelecionado();
        }
    }

    valorDuplicado() {
        this.os.nomeAPI = this.nomeAPI;
        let objetoProcurado: any;
        this.os.filtro = this.filtro;

        this.os.getObjetoFiltro(this.objeto[this.filtro]).subscribe((dados: any) => {
            objetoProcurado = dados;

            if (objetoProcurado != null) {
                this.campoValido = false;
                this.objeto[this.filtro] = "";
            } else {
                this.campoValido = true;
            }
        });
    }

    salvar() {
        // console.log(this.objeto);
        this.os.nomeAPI = this.nomeAPI;
        if (Object.keys(this.objeto).indexOf("_id") == -1) {
            this.os.incluir(this.objeto).subscribe(
                (dados) => {
                    this.router.navigate([this.tela]);
                });
        } else {
            this.os.atualizar(this.objeto).subscribe(
                (dados) => {
                    this.router.navigate([this.tela]);
                });
        }
    }

    compareById(f1: any, f2: any): boolean {
        return f1 && f2 && f1._id === f2._id;
    }

    ehAdministrador() {
        if (this.as.getUsuario() != null) {
            if (this.as.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
}