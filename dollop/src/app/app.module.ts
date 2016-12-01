import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import {
  NavBarComponent,
  PostPanelComponent,
  HomeComponent,
  AdminComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostPanelComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    appRouterProviders,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
