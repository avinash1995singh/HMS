import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-service-group',
  templateUrl: './add-service-group.component.html',
  styleUrls: ['./add-service-group.component.css']
})
export class AddServiceGroupComponent {
  @Input() dataSourse: any;
  serviceGroup!: FormGroup;
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.serviceGroup = this.fb.group({
      servicename: ["", Validators.required],
      servicetype: ["", Validators.required]
  });
  if(this.dataSourse){
    this.serviceGroup.patchValue({
      servicename:this.dataSourse.servicename,
      servicetype:this.dataSourse.servicetype,

    })
  }
    }

    saveGroups(){
  if(this.dataSourse){
    this.service.updateServiceGroup(this.dataSourse.id,this.serviceGroup.value).subscribe((res:any)=>{
      if(res){
      Swal.fire({
        icon: 'success',
        title: 'Service Group Update',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    } 
       })
  }
  else{
    this.service.serviceGroup(this.serviceGroup.value).subscribe((res:any)=>{
      if(res){
      Swal.fire({
        icon: 'success',
        title: 'Service Group has been saved',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    } 
       })
  }

  }
}
