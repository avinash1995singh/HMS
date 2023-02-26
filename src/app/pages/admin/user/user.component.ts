import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { DataService } from 'src/app/allService/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../department/department.component';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/allService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  allUser: any;
  allRole: any;
  constructor(public dialog: MatDialog,private userService :UserService,private spinner: NgxSpinnerService,private service:DataService) {
  }
  ngOnInit(){
    this.userService.getUser().subscribe((res:any)=>{
      console.log(res)
        this.allUser= res.data
    })

    this.userService.getRole().subscribe((res:any)=>{
      this.allRole=res.data
    })
  }


  openDialog(){
    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  edit(name:any){
    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.componentInstance.dataSourse = name;
    dialogRef.afterClosed().subscribe(result => {
    })
}
}
