import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent {
  @Input() dataSourse: any;
  designation!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.designation = this.fb.group({
      designation: ["", Validators.required]
  });
  if(this.dataSourse){
    this.designation.patchValue({
      designation:this.dataSourse.designation
    })
  }
    
    }

    saveDesignation(){

if(this.dataSourse){
  this.service.updateDesignation(this.dataSourse.id,this.designation.value).subscribe((res:any)=>{
    if(res){
      Swal.fire({
        icon: 'success',
        title: 'Designation Update',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    }
        })

}
else{
  this.service.designation(this.designation.value).subscribe((res:any)=>{
    if(res){
      Swal.fire({
        icon: 'success',
        title: 'Designation has been saved',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    }
        })

}

  
  }
 
}
