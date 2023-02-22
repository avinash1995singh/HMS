import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-specialization',
  templateUrl: './add-specialization.component.html',
  styleUrls: ['./add-specialization.component.css']
})
export class AddSpecializationComponent {
  @Input() dataSourse: any;
  specialization!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.specialization = this.fb.group({
      specialization: ["", Validators.required]
  });
  if(this.dataSourse){
    this.specialization.patchValue({
      specialization:this.dataSourse.specialization
    })
  }
    
    }

    saveSpecialization(){
      if(this.dataSourse){
        this.service.updateSpecialization(this.dataSourse.id,this.specialization.value).subscribe((res:any)=>{
          if(res){
         Swal.fire({
          icon: 'success',
          title: 'Specialization has been saved',
          showConfirmButton: false,
          timer: 1200
        });
        this.dialog.closeAll()
         }
          })
      }
  else{
    this.service.specialization(this.specialization.value).subscribe((res:any)=>{
      if(res){
     Swal.fire({
      icon: 'success',
      title: 'Specialization has been saved',
      showConfirmButton: false,
      timer: 1200
    });
    this.dialog.closeAll()
     }
      })
  }

  }





}
