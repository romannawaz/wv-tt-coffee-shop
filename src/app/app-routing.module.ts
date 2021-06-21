import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'our-coffee', loadChildren: () => import('./pages/our-coffee/our-coffee.module').then(m => m.OurCoffeeModule) },
  { path: 'for-your-pleasure', loadChildren: () => import('./pages/for-your-pleasure/for-your-pleasure.module').then(m => m.ForYourPleasureModule) },
  { path: '**', redirectTo: 'home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
