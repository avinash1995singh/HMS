import { Component,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  @Input() dataSourse: any;
  service!: FormGroup;
  s_Group: any;
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private fb: FormBuilder,private serData :DataService) {
  }
  ngOnInit(){
    this.service = this.fb.group({
      servicename:[["", Validators.required]],
      sName: ["", Validators.required],
      sCharge: ["", Validators.required],
  });
  this.serData.getserviceGroup().subscribe((res:any)=>{
    this.s_Group=res.data
  })
  if(this.dataSourse){
    this.service.patchValue({
      sName:this.dataSourse.sName,
      sCharge:this.dataSourse.sCharge,

    })
  }
    }

    saveService(){
   if(this.dataSourse){
    this.serData.updatesaveService(this.dataSourse.id,this.service.value).subscribe((res:any)=>{
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
    this.serData.saveService(this.service.value).subscribe((res:any)=>{
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
