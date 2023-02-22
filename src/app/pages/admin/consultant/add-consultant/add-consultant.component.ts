import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent implements OnInit {
  consultant: any;
  department: any;
  designation: any;
  specialization: any;
  constructor(private fb: FormBuilder,private service:DataService,public dialog: MatDialog) {
    this.consultant = fb.group({
      DoctorName: new FormControl(''),
      Gender: new FormControl(''),
      age: new FormControl(''),
      GeneralVisit: new FormControl(''),
      EmergencyVisit: new FormControl(''),
      NightVisit: new FormControl(''),
      Department: new FormControl(''),
      desingnation: new FormControl(''),
      Specialization: new FormControl(''),
      Qualification: new FormControl(''),
      RegNumber: new FormControl(''),
      DOJ: new FormControl(''),
      ApponitmentDuration: new FormControl(''),
      OPDChambNo: new FormControl(''),
      complateAddress: new FormControl(''),
      Email: new FormControl(''),
      Mobile: new FormControl(''),
      EmgContact: new FormControl(''),
      OPDTiming: new FormControl(''),
      status: new FormControl(''),
      ChannelingCharge: new FormControl(''),
     } )
     
    }
  ngOnInit(): void {
this.service.getDepartment().subscribe((department:any)=>{
  this.department=department.data
});
this.service.getdesignation().subscribe((designation:any)=>{
  this.designation=designation.data
})
this.service.getSpecialization().subscribe((specialization:any)=>{
  this.specialization=specialization.data
})

  }
  
  saveConsultant() {
    console.log(this.consultant.value);
    this.service.saveConsultant(this.consultant.value).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: 'Consultant Save Succesfully ',
          showConfirmButton: false,
          timer: 1200
        });
        this.dialog.closeAll()
      }  
    })


  }

}


