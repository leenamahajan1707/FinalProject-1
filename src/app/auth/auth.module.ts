import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';


import { RegisterpComponent } from './components/registerp/registerp.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent,  RegisterComponent, RegisterpComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,  RegisterComponent, RegisterpComponent,ResetPasswordComponent
  ]
})
export class AuthModule { }
