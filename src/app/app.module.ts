import {environment} from "./../environments/environment"

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Compomnent imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderComponent } from './header/header.component';
import { CallusComponent } from './callus/callus.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


//form and httpclient
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase related imports
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

//for toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderComponent,
    CallusComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    GalleryComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
