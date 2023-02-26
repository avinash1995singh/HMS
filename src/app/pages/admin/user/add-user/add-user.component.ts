import { Component,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/allService/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Input() dataSourse: any;
  user!: FormGroup;
  s_Group: any;
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private fb: FormBuilder,private _userService :UserService) {
  }
  ngOnInit(){
    this.user = this.fb.group({
      userName: ["", Validators.required],
      userId: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
  });
  this._userService.getUser().subscribe((res:any)=>{
    this.s_Group=res.data
  })
  if(this.dataSourse){
    this.user.patchValue({
      sName:this.dataSourse.sName,
      sCharge:this.dataSourse.sCharge,

    })
  }
    }

    saveUser(){
   if(this.dataSourse){
    this._userService.updateUser(this.dataSourse.id,this.user.value).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: 'Service Update',
          showConfirmButton: false,
          timer: 1200
        });
        this.dialog.closeAll()
      }
    })
   }
   else{
    this._userService.saveUser(this.user.value).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: 'Service has been saved',
          showConfirmButton: false,
          timer: 1200
        });
        this.dialog.closeAll()
      }
    })
   }

  }
}
