import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuariomodel';
import { MensagemService } from './mensagem.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class AutenticacaoService {

    // private url = 'http://localhost:8080/login/';
    private url = 'https://api-sistema-treinamento.herokuapp.com/login';

    usuarioModelo = new Usuario();
    public usuario = new BehaviorSubject(this.usuarioModelo);
    usuarioLogado = this.usuario.asObservable();

    constructor(private http: HttpClient, public router: Router, public ms: MensagemService) {
    }

    login(data): Observable<any> {
        return this.http.post<any>(this.url, data, httpOptions).pipe(
            tap((result) => this.save_token(result)),
            catchError(this.handleError<any>('login'))
        );
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }
    private save_token(data) {
        // if (data.success) {
        //     localStorage.setItem('usuario', data);
        //     return;
        // }

        if (data != null) {
            localStorage.setItem('usuario', JSON.stringify(data));
            this.alterarUsuario(data);
            return;
        }
    }

    canActivate(): boolean {
        const token = localStorage.getItem('usuario');
        if (token == null) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

    getUsuario(): any {
        let usuario = null;
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));
        } catch (error) {
            console.log(error);
        }


        return usuario;

        // console.log(localStorage.getItem('usuario'));
        // if(localStorage.getItem('usuario') != null) {
        //     return JSON.parse(localStorage.getItem('usuario'));
        // }
        // return null;
    }

    encerrarSessao(): any {
        localStorage.removeItem("usuario");
        this.alterarUsuario(new Usuario());
        this.router.navigate(['login']);
    }

    alterarUsuario(usuarioLogado: Usuario) {
        this.usuario.next(usuarioLogado)
    }

    ehAdministrador() {
        if (this.getUsuario() != null) {
            if (this.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    ehUsuarioAutenticado() {
        if (this.getUsuario() != null) {
            return true;
        } else {
            return false;
        }
    }

    permissaoAcesso(tipo: string, msg: string): void {
        if(tipo == "ADM") {
            if(!this.ehAdministrador()) {
                this.ms.setMensagem(msg);
                this.router.navigate(["/erro"]);
            }
        } else if(tipo == "AUTENTICADO") {
            if(!this.ehUsuarioAutenticado()) {
                this.ms.setMensagem(msg);
                this.router.navigate(["/erro"]);
            }
        }
    }
}
