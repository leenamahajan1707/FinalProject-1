import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { RegisterpComponent } from './auth/components/registerp/registerp.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DoctorViewComponent } from './dashboard1/doctor-view/doctor-view.component';
import { GetHistoryComponent } from './dashboard1/get-history/get-history.component';
import { HistoryComponent } from './dashboard1/history/history.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
// import { SearchComponent } from './dashboard1/search/search.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "login",component: LoginComponent},
  { path: "register",component: RegisterComponent},
  { path: "registerp",component: RegisterpComponent},
  { path: "reset-password",component: ResetPasswordComponent},
  { path: "dashboard1",component:Dashboard1Component},
  { path: "dashboard2",component:Dashboard2Component},
  { path: "doctor-view/:patient_id",component:DoctorViewComponent},
  {path: 'get-history/:pid', component: GetHistoryComponent},
  {path: 'history/:patient_id', component: HistoryComponent},
  {path: 'about', component: AboutComponent},
  { path: "**",component:HomepageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
