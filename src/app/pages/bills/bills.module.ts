import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';
import { materialize } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BillsComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,
    SharedModule
  ]
})
export class BillsModule { }
