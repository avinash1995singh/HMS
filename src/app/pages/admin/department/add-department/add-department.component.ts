import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  @Input() dataSourse: any;
  department!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.department = this.fb.group({
      name: ["", Validators.required]
  });

  if(this.dataSourse){
    this.department.patchValue({
      name:this.dataSourse.name
    })
  }
    }

  saveDepartment(){
    if(this.dataSourse){
  this.service.updateDepartment(this.dataSourse.id,this.department.value).subscribe((res)=>{
  if(res){
    Swal.fire({
      icon: 'success',
      title: 'Department Update ',
      showConfirmButton: false,
      timer: 1200
    });
    this.dialog.closeAll()
  }
})

    }
    else{
      this.service.department(this.department.value).subscribe((res:any)=>{
        if(res){
          Swal.fire({
            icon: 'success',
            title: 'Department has been saved',
            showConfirmButton: false,
            timer: 1200
          });
          this.dialog.closeAll()
        }
      })
    }
  }
 
}
