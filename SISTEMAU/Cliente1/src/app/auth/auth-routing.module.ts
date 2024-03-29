import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { AgregarUsuarioComponent2 } from '../protected/agregar-usuario2/agregar-usuario2.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'addUser', component: AgregarUsuarioComponent2},
      { path: '**', redirectTo: 'login'},
    ] 

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
