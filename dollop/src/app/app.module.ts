import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularFire2';
import { SharedService } from './services';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAt3n8P3R7lrUsyzld3M6uYvO5bxPelGXw',
  authDomain: 'indiebash-96b8d.firebaseapp.com',
  databaseURL: 'https://indiebash-96b8d.firebaseio.com',
  storageBucket: 'indiebash-96b8d.appspot.com'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

import {
  NavBarComponent,
  PostPanelComponent,
  HomeComponent,
  AdminComponent,
  DashboardComponent,
  LoginComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostPanelComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    appRouterProviders,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
