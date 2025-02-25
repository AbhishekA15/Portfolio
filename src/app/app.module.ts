import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from "./footer/footer.component";
import { StackCardComponent } from './stack-card/stack-card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponentComponent,
    CommonModule,
    BrowserAnimationsModule,
    FooterComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
