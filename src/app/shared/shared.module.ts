import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransparentNavComponent } from './transparent-nav/transparent-nav.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { HeadingComponent } from './heading/heading.component';
import { FeatureComponent } from './feature/feature.component';
import { ThreeFeaturesComponent } from './three-features/three-features.component';
import { FeatComponent } from './three-features/feat/feat.component';
import { HeadingFatComponent } from './heading-fat/heading-fat.component';
import { SliderComponent } from './slider/slider.component';
import { AccordionComponent } from './accordion/accordion.component';




@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    RelatedProductComponent,
    TransparentNavComponent,
    ParallaxComponent,
    HeadingComponent,
    FeatureComponent,
    ThreeFeaturesComponent,
    FeatComponent,
    HeadingFatComponent,
    SliderComponent,
    AccordionComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    AccordionComponent,
    ProductCardComponent,
    RelatedProductComponent,
    TransparentNavComponent,
    ParallaxComponent,
    HeadingComponent,
    FeatureComponent,
    ThreeFeaturesComponent,
    FeatComponent,
    FlexLayoutModule

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
