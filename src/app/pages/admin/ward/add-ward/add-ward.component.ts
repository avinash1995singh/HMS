import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-ward',
  templateUrl: './add-ward.component.html',
  styleUrls: ['./add-ward.component.css']
})
export class AddWardComponent {
  @Input() dataSourse: any;
  ward!: FormGroup;
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.ward = this.fb.group({
      ward: ["", Validators.required]
  });
  if(this.dataSourse){
    this.ward.patchValue({
      ward:this.dataSourse.ward
    })
  }
    
    }

    saveWard(){
   if(this.dataSourse){

    this.service.updateWard(this.dataSourse.id,this.ward.value).subscribe((res:any)=>{
      if(res){
       Swal.fire({
         icon: 'success',
         title: 'Ward Update',
         showConfirmButton: false,
         timer: 1200
       });
       this.dialog.closeAll()
     }
         })
   }
   else{
    this.service.ward(this.ward.value).subscribe((res:any)=>{
      if(res){
       Swal.fire({
         icon: 'success',
         title: 'Ward has been saved',
         showConfirmButton: false,
         timer: 1200
       });
       this.dialog.closeAll()
     }
         })
   }

  }
}
