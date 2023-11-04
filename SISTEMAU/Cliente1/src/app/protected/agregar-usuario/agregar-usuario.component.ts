import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  title = 'Crear Usuario';
  id : string | null;

  constructor(private fb:FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute,
    private authService: AuthService) {
      this.usuarioForm=this.fb.group({
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        rut:['', Validators.required],
        phone:['', Validators.required],
        email:['', Validators.required],
        contrasena:['', Validators.required],
        rol:['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
      this.esEdit();
    }
    logout(){
        
      this.router.navigateByUrl('/auth');
      this.authService.cerrarSesion();
    
    }
  
    agregarUsuario(){
  
  
      const User: Usuario={
        nombre:this.usuarioForm.get('nombre')?.value,
        apellido:this.usuarioForm.get('apellido')?.value,
        rut:this.usuarioForm.get('rut')?.value,
        phone:this.usuarioForm.get('phone')?.value,
        email:this.usuarioForm.get('email')?.value,
        contrasena:this.usuarioForm.get('contrasena')?.value,
        rol:this.usuarioForm.get('rol')?.value
      }
  
      if(this.id !== null){
        this._usuarioService.editUsuario(this.id, User).subscribe(data =>{
          this.toastr.info('El usuario fue actualizado correctamente', 'Usuario Actualizado');
          this.router.navigate(['/dashboard/listar-usuario']);
        })
  
      }else{
        this._usuarioService.saveUsuario(User).subscribe(data =>{
          this.toastr.success('El usuario fue creado satisfactoriamente', 'Usuario Creado');
          this.router.navigate(['/dashboard/listar-usuario']);
    
        },error => {
          console.log(error);
          this.usuarioForm.reset();
        })  
      }
  
    }
  
    esEdit(){
      if(this.id !== null){
        this.title = 'Actualizar Usuario';
        this._usuarioService.obtUsuario(this.id).subscribe(data =>{
          this.usuarioForm.setValue({
            nombre:data.nombre,
            apellido:data.apellido,
            rut:data.rut,
            phone:data.phone,
            email:data.email,
            contrasena:data.contrasena,
            rol:data.rol
          })
        })
      }
    }

}
