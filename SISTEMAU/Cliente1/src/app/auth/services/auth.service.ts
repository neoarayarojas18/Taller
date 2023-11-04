import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse, User } from '../interfaces/interfaces';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;


  get usuario(){
    return { ...this._usuario };
  }

  constructor( private http: HttpClient) { }

  login( email: string , contrasena: string){
    
    const url = `${ this.baseUrl}/usuarios/login`;
    const body = { email, contrasena};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              nombre: resp.nombre!,
              uid: resp.uid!
            }
            
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  
  }


  validarToken(): Observable<boolean>{

    const url = `${ this.baseUrl}/usuarios/renovar`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, { headers} )
      .pipe(
        map( resp => {
          console.log(resp.token);

          return resp.ok

        }),
        catchError( err => of(false))
      );
  }


  cerrarSesion(){
    localStorage.clear();
  }
  
}



