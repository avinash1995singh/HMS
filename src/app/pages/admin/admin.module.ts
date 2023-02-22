import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DepartmentComponent } from './department/department.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignationComponent } from './designation/designation.component';
import { AddDesignationComponent } from './designation/add-designation/add-designation.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { AddSpecializationComponent } from './specialization/add-specialization/add-specialization.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { RoomBadComponent } from './room-bad/room-bad.component';
import { AddRoomBadComponent } from './room-bad/add-room-bad/add-room-bad.component';
import { WardComponent } from './ward/ward.component';
import { AddWardComponent } from './ward/add-ward/add-ward.component';
import { ServiceComponent } from './service/service.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AddConsultantComponent } from './consultant/add-consultant/add-consultant.component';
import { ServiceGroupComponent } from './service-group/service-group.component';
import { AddServiceGroupComponent } from './service-group/add-service-group/add-service-group.component';
import { HospitalSetupComponent } from './hospital-setup/hospital-setup.component';
import { AddHospitalDetailsComponent } from './hospital-setup/add-hospital-details/add-hospital-details.component';
import { AddServiceComponent } from './service/add-service/add-service.component';




@NgModule({
  declarations: [
    AdminComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    DesignationComponent,
    AddDesignationComponent,
    SpecializationComponent,
    AddSpecializationComponent,
    UserComponent,
    AddUserComponent,
    RoomBadComponent,
    AddRoomBadComponent,
    WardComponent,
    AddWardComponent,
    ServiceComponent,
    ConsultantComponent,
    AddConsultantComponent,
    ServiceGroupComponent,
    AddServiceGroupComponent,
    HospitalSetupComponent,
    AddHospitalDetailsComponent,
    AddServiceComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
