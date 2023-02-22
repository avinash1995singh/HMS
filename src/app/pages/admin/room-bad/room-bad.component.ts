import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddRoomBadComponent } from './add-room-bad/add-room-bad.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../department/department.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room-bad',
  templateUrl: './room-bad.component.html',
  styleUrls: ['./room-bad.component.css']
})
export class RoomBadComponent implements OnInit{
  constructor(public dialog: MatDialog,private spinner: NgxSpinnerService,private service:DataService) {
  }
  ward:any;
  displayedColumns: string[] = ['id', 'name', 'Status','Action'];
  listData!:PeriodicElement[];
  dataSource:any;
  
  ngOnInit(){
    this.spinner.show();
    this.service.getWard().subscribe((res:any)=>{
      this.ward=res.data
    })
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

this.service.getDepartment().subscribe((res:any)=>{
 
})
   
}
getrooms(e:any){
this.service.getRoom(e.target.value).subscribe((res:any)=>{
  this.listData=res.data;
  this.dataSource=new MatTableDataSource(this.listData)
})
}
  openDialog(){
    const dialogRef = this.dialog.open(AddRoomBadComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
 
  edit(name:any){
    const dialogRef = this.dialog.open(AddRoomBadComponent);
    dialogRef.componentInstance.dataSourse = name;
    dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit()
    })
    
      }
      delete(name:any,id:any){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
    
    
      }

}
