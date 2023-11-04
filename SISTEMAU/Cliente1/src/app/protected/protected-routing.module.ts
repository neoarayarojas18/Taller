import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';

const routes: Routes = [

  {
    path: 'dashboard', 
    canLoad: [ValidarTokenGuard],  
    canActivate: [ValidarTokenGuard],

    children: [
      {path: 'home-admin', component: HomeAdminComponent},
      {path: 'listar-usuario', component: ListarUsuarioComponent},
      {path: 'agregar-usuario', component: AgregarUsuarioComponent},
      {path: 'agregar-usuario/:id', component: AgregarUsuarioComponent},



      {path: '**', redirectTo: 'home-admin'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
