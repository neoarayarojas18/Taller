import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { SliderComponent } from './slider/slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SliderComponent,

    HomeAdminComponent,
    
    ListarUsuarioComponent,
    AgregarUsuarioComponent,

  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    NgbCarouselModule,
    ReactiveFormsModule


    
  ]
})
export class ProtectedModule { }
