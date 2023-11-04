import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  listUsuarios: Usuario[]=[];

  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  logout(){
        
    this.router.navigateByUrl('/auth');
    this.authService.cerrarSesion();
  
  }


  agregar_user(){
    this.router.navigateByUrl('/dashboard/agregar-usuario')
  }



 obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      console.log(data);
      this.listUsuarios=data;

    }, error =>{
      console.log(error);
    })

   
 }

 delUsuario(id:any){
   this._usuarioService.delUsuario(id).subscribe(data =>{
     this.toastr.error('El usuario fue eliminado correctamente', 'Usuario Eliminado');
     this.obtenerUsuarios();

   }, error =>{
     console.log(error);
   })

 }

}
