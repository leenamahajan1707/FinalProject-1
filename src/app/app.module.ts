import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    HomepageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    RouterModule
  ],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
