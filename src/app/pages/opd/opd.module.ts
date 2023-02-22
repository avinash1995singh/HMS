import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OPDRoutingModule } from './opd-routing.module';
import { OPDComponent } from './opd.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [
    OPDComponent,
    RegistrationComponent,
    NewRegistrationComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    OPDRoutingModule,
    SharedModule
  ]
})
export class OPDModule { }
