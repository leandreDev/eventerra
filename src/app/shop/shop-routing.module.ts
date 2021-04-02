import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPremiumComponent } from './product-premium/product-premium.component';
import { ProductComponent } from './product/product.component';

import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: ':id', component: ProductComponent },
  { path: 'premium/:id', component: ProductPremiumComponent },
  { path: 'go/cart', component: CartComponent },
  { path: 'go/checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
