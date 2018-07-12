import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DefaultComponent } from './default/default.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmptyContactService } from './empty-contact.service';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    DefaultComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  providers: [EmptyContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
