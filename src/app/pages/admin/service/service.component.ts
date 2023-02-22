import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddServiceComponent } from './add-service/add-service.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../department/department.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor(public dialog: MatDialog,private spinner: NgxSpinnerService,private service:DataService) {
  }
  serviceGroup:any;
  displayedColumns: string[] = ['id', 'Service Name', 'Service Charge','Action'];
  listData!:PeriodicElement[];
  dataSource:any;
  
  ngOnInit(){
    this.spinner.show();
    this.service.getserviceGroup().subscribe((res:any)=>{
      this.serviceGroup=res.data
    })
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);   
}
getSericeData(e:any){
this.service.getService(e.target.value).subscribe((res:any)=>{
  this.listData=res.data;
  this.dataSource=new MatTableDataSource(this.listData)
})
}
  openDialog(){
    const dialogRef = this.dialog.open(AddServiceComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  edit(name:any){
    const dialogRef = this.dialog.open(AddServiceComponent);
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
