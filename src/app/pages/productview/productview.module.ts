import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductviewRoutingModule } from './productview-routing.module';
import { ProductviewComponent } from './productview.component';


@NgModule({
  declarations: [
    ProductviewComponent
  ],
  imports: [
    CommonModule,
    ProductviewRoutingModule
  ]
})
export class ProductviewModule { }
