import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { OPDComponent } from './opd.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{ path: '', component: OPDComponent },
{ path: 'registration', component:RegistrationComponent }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OPDRoutingModule { }
