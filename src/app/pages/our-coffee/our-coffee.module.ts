import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OurCoffeeRoutingModule } from './our-coffee-routing.module';

// Components
import { OurCoffeeComponent } from './our-coffee.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

// Pipes
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    OurCoffeeComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    SearchPipe,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    OurCoffeeRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class OurCoffeeModule { }
