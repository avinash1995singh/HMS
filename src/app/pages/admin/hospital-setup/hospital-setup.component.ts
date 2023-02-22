import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/allService/data.service';
import { AddHospitalDetailsComponent } from './add-hospital-details/add-hospital-details.component';

@Component({
  selector: 'app-hospital-setup',
  templateUrl: './hospital-setup.component.html',
  styleUrls: ['./hospital-setup.component.css']
})
export class HospitalSetupComponent {
  constructor(private fb: FormBuilder,public dialog: MatDialog,private spinner: NgxSpinnerService,private service:DataService) {
  
  }
  ngOnInit(){
}
 


  openDialog(){
    const dialogRef = this.dialog.open(AddHospitalDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit()
    })

}
}
