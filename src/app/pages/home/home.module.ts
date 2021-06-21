import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurBestComponent } from './pages/our-best/our-best.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutUsComponent,
    OurBestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
