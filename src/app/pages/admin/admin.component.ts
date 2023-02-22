import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private spinner: NgxSpinnerService){}


  ngOnInIt(){
    console.log("hnbbv")
    this.spinner.show("loading");
  }

}
