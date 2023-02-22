import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { ServiceComponent } from './service/service.component';
import { UserComponent } from './user/user.component';
import { WardComponent } from './ward/ward.component';
import { SpecializationComponent } from './specialization/specialization.component'
import  { RoomBadComponent } from  './room-bad/room-bad.component'
import { ServiceGroupComponent } from './service-group/service-group.component';
import { HospitalSetupComponent } from './hospital-setup/hospital-setup.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: 'department', component:DepartmentComponent },
{ path: 'designation', component:DesignationComponent },
{ path: 'ward', component:WardComponent },
{ path: 'user', component:UserComponent },
{ path: 'service', component:ServiceComponent },
{ path: 'consultant', component:ConsultantComponent },
{ path: 'specialization', component:SpecializationComponent },
{ path: 'roombad', component:RoomBadComponent },
{ path: 'service-group', component:ServiceGroupComponent },
{ path: 'hosptal-setup', component:HospitalSetupComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
