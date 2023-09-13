import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { NewComponent } from './new/new.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    LazyComponent,
    NewComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
