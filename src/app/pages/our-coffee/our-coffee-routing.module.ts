import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurCoffeeComponent } from './our-coffee.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '', component: OurCoffeeComponent, children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurCoffeeRoutingModule { }
