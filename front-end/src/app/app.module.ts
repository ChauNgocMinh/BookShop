import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [ AppComponent, LoginComponent, HomeComponent, ProductsComponent],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
