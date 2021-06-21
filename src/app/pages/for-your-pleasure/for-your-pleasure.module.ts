import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForYourPleasureRoutingModule } from './for-your-pleasure-routing.module';

// Components
import { ForYourPleasureComponent } from './for-your-pleasure.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProductsComponent } from './pages/products/products.component';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ForYourPleasureComponent,
    AboutComponent,
    HeroComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ForYourPleasureRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ForYourPleasureModule { }
