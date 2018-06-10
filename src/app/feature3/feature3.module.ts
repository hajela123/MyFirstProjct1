import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F3c1Component } from './f3c1/f3c1.component';
import { F3c2Component } from './f3c2/f3c2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [F3c1Component, F3c2Component],
  exports: [F3c1Component, F3c2Component]
})
export class Feature3Module { }
