import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillsComponent } from './bills/bills.component';
import { IPDComponent } from './ipd/ipd.component';
import { OPDComponent } from './opd/opd.component';
import { PagesComponent } from './pages.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [{ path: '', component: PagesComponent,children:[{path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},{path:"opd",loadChildren: () => import('./opd/opd.module').then(m => m.OPDModule)},{path:"Ipd",loadChildren: () => import('./ipd/ipd.module').then(m => m.IPDModule)},{path:"reports",loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},{path:"bills",loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule)}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
