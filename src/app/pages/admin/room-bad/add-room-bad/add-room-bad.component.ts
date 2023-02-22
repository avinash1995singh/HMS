import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  FormGroup, Validators, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/allService/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-room-bad',
  templateUrl: './add-room-bad.component.html',
  styleUrls: ['./add-room-bad.component.css']
})
export class AddRoomBadComponent {
  @Input() dataSourse: any;
  room!: FormGroup;
  ward: any;
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private fb: FormBuilder,private service :DataService) {
  }
  ngOnInit(){
    this.room = this.fb.group({
      room: ["", Validators.required],
      ward: ["", Validators.required],
      status : ["Avilable", Validators.required]
  });

  this.service.getWard().subscribe((res:any)=>{
    this.ward=res.data
  })
  if(this.dataSourse){
    this.room.patchValue({
      room:this.dataSourse.room
    })
  }

    }

    saveRoom(){
   if(this.dataSourse){
    this.service.updateRoom(this.dataSourse.id,this.room.value).subscribe((res:any)=>{
      if(res){
      Swal.fire({
        icon: 'success',
        title: 'Room Update',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    }
        })
    
   }
   else{
    this.service.room(this.room.value).subscribe((res:any)=>{
      if(res){
      Swal.fire({
        icon: 'success',
        title: 'Room has been saved',
        showConfirmButton: false,
        timer: 1200
      });
      this.dialog.closeAll()
    }
        })
    
   }
  }

 


 

}
