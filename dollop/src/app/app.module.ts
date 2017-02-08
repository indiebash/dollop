import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularFire2';
import { SharedService } from './services';
import { AuthGuard } from './services';
import {
  NavBarComponent,
  PostPanelComponent,
  HomeComponent,
  AdminComponent,
  DashboardComponent,
  LoginComponent,
  EditPostComponent,
  PostContentDropdownComponent,
  ToggleSwitchComponent
} from './components';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAt3n8P3R7lrUsyzld3M6uYvO5bxPelGXw',
  authDomain: 'indiebash-96b8d.firebaseapp.com',
  databaseURL: 'https://indiebash-96b8d.firebaseio.com',
  storageBucket: 'indiebash-96b8d.appspot.com'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostPanelComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    EditPostComponent,
    PostContentDropdownComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterProviders,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
