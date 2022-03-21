import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContaRoutingModule } from './conta.route';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

import { RouterModule } from '@angular/router';
import { ContaService } from './services/conta.service';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ContaGuard } from './services/conta.guard';





@NgModule({
  declarations: [
    CadastroComponent,
    ContaAppComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomFormsModule,
  ],
  providers: [
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
