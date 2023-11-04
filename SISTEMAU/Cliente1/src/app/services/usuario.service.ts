import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url="http://localhost:4000/api/usuarios/";
  constructor(private http:HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.url + "/listar")
  }

  delUsuario(id:string):Observable<any>{
    return this.http.delete(this.url + "/delete" + id);
  }

  editUsuario(id:string, usuario: Usuario):Observable<any>{
    return this.http.put(this.url + "/actu" + id, usuario);
  }

  obtUsuario(id:string):Observable<any>{
    return this.http.get(this.url + "/ob" + id);
  }

  saveUsuario(usuario: Usuario):Observable<any>{
    return this.http.post(this.url + "/create" , usuario);
  }
}
