import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewRegistrationComponent } from '../new-registration/new-registration.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { PeriodicElement } from '../../admin/department/department.component';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public dialog: MatDialog,private spinner: NgxSpinnerService,private service:DataService) {
  }
  displayedColumns: string[] = ['id', 'name','Department','Specialization','GeneralVisit','Action'];
  listData!:PeriodicElement[];
  dataSource:any;
  ngOnInit(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

this.service.getConsultant().subscribe((res:any)=>{
  this.listData=res.data;
  console.log(res.data)
  this.dataSource=new MatTableDataSource(this.listData)
})
}
  openDialog(){
    const dialogRef = this.dialog.open(NewRegistrationComponent);
    dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit()
    })
   
  }
  edit(name:any,id:any){
console.log(id)
console.log(name)

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
