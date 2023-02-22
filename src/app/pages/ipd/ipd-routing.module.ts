import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IPDComponent } from './ipd.component';

const routes: Routes = [{ path: '', component: IPDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IPDRoutingModule { }
