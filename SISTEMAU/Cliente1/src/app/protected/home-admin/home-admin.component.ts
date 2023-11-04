import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent{

  constructor(private router: Router , private authService: AuthService) {
      //_Cargarscripts.Cargar(["js/barra"]);
      

  }

  logout(){
        
    this.router.navigateByUrl('/auth');
    this.authService.cerrarSesion();
  
  }

  list_user(){
    this.router.navigateByUrl('/dashboard/listar-usuario')
  }

  list_uni(){
    this.router.navigateByUrl('/dashboard/listar-unidad')
  }

  list_regis(){
    this.router.navigateByUrl('/dashboard/listar-registro')
  }


 

}
