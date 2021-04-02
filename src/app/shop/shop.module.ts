import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductComponent } from './product/product.component';
import { ProductPremiumComponent } from './product-premium/product-premium.component';
import { ProductRelatedComponent } from './product-related/product-related.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [ShopComponent, ProductComponent, ProductPremiumComponent, ProductRelatedComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
