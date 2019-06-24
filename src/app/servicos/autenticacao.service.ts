import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class AutenticacaoService {

    private url = 'http://localhost:8080/login/';

    constructor(private http: HttpClient, public router: Router) {
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
          localStorage.setItem('usuario', data);
          return;
      }
    }

    canActivate(): boolean {
      const token = localStorage.getItem('usuario');
          if (token == null)   {
              this.router.navigate(['login']);
              return false;
          }
          return true;
      }
}
