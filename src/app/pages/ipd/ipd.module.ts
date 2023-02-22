import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPDRoutingModule } from './ipd-routing.module';
import { IPDComponent } from './ipd.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IPDComponent
  ],
  imports: [
    CommonModule,
    IPDRoutingModule,
    SharedModule
  ]
})
export class IPDModule { }
