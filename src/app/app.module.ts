import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetHistoryComponent } from './dashboard1/get-history/get-history.component';
import { HistoryComponent } from './dashboard1/history/history.component';
// import { SearchComponent } from './dashboard1/search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { DoctorViewComponent } from './dashboard1/doctor-view/doctor-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './service/authentication.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CounterParams, Styles } from '@fortawesome/fontawesome-svg-core';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    HomepageComponent,
    Dashboard2Component,
    GetHistoryComponent,
    HistoryComponent,
    // SearchComponent,
    LogoutComponent,
    ErrorPageComponent,
    AboutComponent,
    DoctorViewComponent,
    OtpComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
exports: [RouterModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
