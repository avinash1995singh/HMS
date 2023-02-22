import { Component ,OnInit} from '@angular/core';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PeriodicElement } from '../department/department.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name','Action'];
  listData!:PeriodicElement[];
  dataSource:any;
  
  constructor(public dialog: MatDialog,private spinner: NgxSpinnerService,private service : DataService) {
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.service.getdesignation().subscribe((res:any)=>{
      this.listData=res.data;
      this.dataSource=new MatTableDataSource(this.listData)
    })
  }
  openDialog(){
    const dialogRef = this.dialog.open(AddDesignationComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  edit(name:any){
    const dialogRef = this.dialog.open(AddDesignationComponent);
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
            this.service.deleteDesignation(id).subscribe((res:any)=>{
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
