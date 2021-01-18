import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { RegisterpComponent } from './auth/components/registerp/registerp.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { GetHistoryComponent } from './dashboard1/get-history/get-history.component';
import { HistoryComponent } from './dashboard1/history/history.component';
import { SearchComponent } from './dashboard1/search/search.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "login",component: LoginComponent},
  { path: "register",component: RegisterComponent},
  { path: "registerp",component: RegisterpComponent},
  { path: "reset-password",component: ResetPasswordComponent},
  { path: "dashboard1",component:Dashboard1Component},
  {path: 'get-history/:pid', component: GetHistoryComponent},
  {path: 'searchPatient', component: SearchComponent},
  { path: "**",component:HomepageComponent},
  {path: '', component: HistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
