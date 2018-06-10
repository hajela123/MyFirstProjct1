import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1f1Component } from './c1f1/c1f1.component';
import { F1c1Component } from './f1c1/f1c1.component';
import { F1c2Component } from './f1c2/f1c2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [C1f1Component, F1c1Component, F1c2Component],
  exports: [F1c1Component, F1c2Component ,SharedModule]
})
export class Feature1Module { }
