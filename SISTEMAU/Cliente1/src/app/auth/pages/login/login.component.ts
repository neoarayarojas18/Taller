import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
//import { AgregarUsuarioComponent2 

import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['marco.cancinoca@gmail.com', [ Validators.required, Validators.email]],
    contrasena: ['marco2001', [ Validators.required, Validators.min(5)]]
  });

  constructor(  private fb: FormBuilder, 
                private router: Router,
                private authService: AuthService, 
  //              private agregarUsuarioComponent2: AgregarUsuarioComponent2,
                ) { }


  login(){

   
    console.log(this.miFormulario.value);
    const {email, contrasena}=this.miFormulario.value;

    this.authService.login(email, contrasena)
      .subscribe(ok => {

        console.log(ok);

        if ( ok == true ) {
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error', ok, 'error')
          //mostrar mensaje de error
        }
      }
    )
    //this.router.navigateByUrl('/dashboard');
  }

  /*redirigir(){
    
  }*/



}
