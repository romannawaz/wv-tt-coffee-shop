import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForYourPleasureComponent } from './for-your-pleasure.component';

const routes: Routes = [{ path: '', component: ForYourPleasureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForYourPleasureRoutingModule { }
