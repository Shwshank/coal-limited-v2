import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './home/section1/section1.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
