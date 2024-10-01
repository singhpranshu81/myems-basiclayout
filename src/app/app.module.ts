import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { ContactusComponent } from './comps/contactus/contactus.component';
import { LoginComponent } from './comps/login/login.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
