import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Feature1Module, Feature2Module, Feature3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
