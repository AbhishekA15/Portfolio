import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
