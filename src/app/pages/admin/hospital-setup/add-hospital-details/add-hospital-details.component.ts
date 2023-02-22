import { Component } from '@angular/core';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-hospital-details',
  templateUrl: './add-hospital-details.component.html',
  styleUrls: ['./add-hospital-details.component.css']
})
export class AddHospitalDetailsComponent {
  constructor( private fb: FormBuilder,private service :DataService ) {}
  hospitalDetails!: FormGroup;
  ngOnInit(){
    this.hospitalDetails = this.fb.group({
      hospitalName: ["", Validators.required],
      pathologyName: ["", Validators.required],
      hospitalAddress: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      pincode: ["", Validators.required],
      hospitalPhone: ["", Validators.required],
      hospitalMobile: ["", Validators.required],
      hospitalEmail: ["", Validators.required],
      hospitalweb: ["", Validators.required],
      opdValidDays: ["", Validators.required],
      hospitalRegNo: ["", Validators.required],
      HospitalRegDate: ["", Validators.required],
      hospitalPan: ["", Validators.required],
      HospitalGst: ["", Validators.required],
  });
}

  saveHospitalDetails(){
    this.service.saveHospitalDetails(this.hospitalDetails.value).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: 'HospitalDetails has been saved',
          showConfirmButton: false,
          timer: 1200
        });
      }
    })
  }
}
