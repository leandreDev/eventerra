import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeConstructionComponent } from './pages/home-construction/home-construction.component';
import { HomeMagazineComponent } from './pages/home-magazine/home-magazine.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'construction',
    component: HomeConstructionComponent
  },
  {
    path: 'magazine',
    component: HomeMagazineComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
