import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ReportsModule } from './reports/reports.module';
import { OPDModule } from './opd/opd.module';
import { IPDModule } from './ipd/ipd.module';
import { AdminModule } from './admin/admin.module';
import { BillsModule } from './bills/bills.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,ProfileModule,ReportsModule,OPDModule,IPDModule,AdminModule,BillsModule,SharedModule
  ]
})
export class PagesModule { }
