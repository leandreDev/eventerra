import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [BlogComponent, ArticleComponent, MagazineComponent, ListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
