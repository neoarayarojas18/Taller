import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { ProtectedModule } from './protected/protected.module';
import { AgregarUsuarioComponent2 } from './protected/agregar-usuario2/agregar-usuario2.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent2,
  ],
  imports: [
    ProtectedModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
