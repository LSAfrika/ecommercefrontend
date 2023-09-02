import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { CategorynavComponent } from '../../components/categorynav/categorynav.component';
import { ProductComponent } from '../../components/product/product.component';
import { CartComponent } from '../../components/cart/cart.component';
import { ProfileComponent } from '../../components/profile/profile.component';



@NgModule({
  declarations: [
    NavComponent,
    CategorynavComponent,
    ProductComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    CategorynavComponent,
    ProductComponent,
    CartComponent,
    ProfileComponent
  ]
})
export class ComponentlibModule { }
