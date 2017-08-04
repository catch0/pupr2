import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

import {PupService} from './pup.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    RegisterComponent,
  ],
  providers: [
    PupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
