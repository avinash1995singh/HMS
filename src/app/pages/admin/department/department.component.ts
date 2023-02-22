import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  id: number;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(public dialog: MatDialog,private spinner: NgxSpinnerService,private service:DataService) {
  }
  displayedColumns: string[] = ['id', 'name','Action'];
  listData!:PeriodicElement[];
  dataSource:any;
  isEdit:boolean=false
  ngOnInit(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

this.service.getDepartment().subscribe((res:any)=>{
  this.listData=res.data;
  this.dataSource=new MatTableDataSource(this.listData)
})
   


}
  openDialog(){
    const dialogRef = this.dialog.open(AddDepartmentComponent);
    dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit()
    })

   
  }
  edit(name:any){
    const dialogRef = this.dialog.open(AddDepartmentComponent);
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
        this.service.deleteDepartment(id).subscribe((res:any)=>{
          if(res.message){
            this.ngOnInit();
          }
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  }




