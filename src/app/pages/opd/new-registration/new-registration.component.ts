import { formatDate } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DataService } from "src/app/allService/data.service";
import { OpdService } from "src/app/allService/opd.service";
import { PdfComponent } from "../pdf/pdf.component";
import Swal from "sweetalert2";

@Component({
  selector: "app-new-registration",
  templateUrl: "./new-registration.component.html",
  styleUrls: ["./new-registration.component.css"],
})
export class NewRegistrationComponent implements OnInit {
  @ViewChild('Pdf') Pdf: any;
  print() {
    this.Pdf?.downloadPDF();
  }
filterConsultent:any
  department: any;
  currentDate = new Date();
  opdForm: any;
  today: any;
  cTime:any
  currentDoctor: any;
  Charges: number=0;
  constructor(
    private fb: FormBuilder,
    private service: DataService,
    public dialog: MatDialog,
    private opdServicce:OpdService
  ) {
    this.opdForm = this.fb.group({
      Counsultant: new FormControl(""),
      PatientName: new FormControl(""),
      F_H_Name: new FormControl(""),
      Relation: new FormControl(""),
      Weight: new FormControl(""),
      Gender: new FormControl(""),
      age: new FormControl(""),
      BP: new FormControl(""),
      Temparature: new FormControl(""),
      charges: new FormControl(""),
      Department: new FormControl(""),
      DiscountBY: new FormControl(""),
      NetAmount: new FormControl(""),
      Adharnumber: new FormControl(""),
      Date: new FormControl(  new Date().toLocaleDateString() ),
      consType: new FormControl(""),
      complateAddress: new FormControl(""),
      // Time: new FormControl(""),
      Token: new FormControl(),
      Email: new FormControl("", [ Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),]),
      Mobile: new FormControl(""),
      Diagnosis: new FormControl(""),
      UHID: new FormControl(""),
      DiscountAmount:new FormControl(""),
      paymentMode:new FormControl(""),
      remarks:new FormControl("")

    });
  }
  ngOnInit(): void {
   this.cTime =   formatDate(this.currentDate, ' h:mm:ss a', 'en-US');    
    this.service.getDepartment().subscribe((department: any) => {
      this.department = department.data;
    });

       
console.log(this.opdForm.value.CRDate)

  }

  saveOpdRecords() {
    this.opdForm.value.Counsultant_Id = this.currentDoctor.id
    this.opdServicce.saveOpdRecords(this.opdForm.value).subscribe((res:any)=>{
console.log(res);
    })
    // this.service.saveConsultant(this.opdForm.value).subscribe((res: any) => {
    //   if (res) {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Consultant Save Succesfully ",
    //       showConfirmButton: false,
    //       timer: 1200,
    //     });
    //     this.dialog.closeAll();
    //   }
    // });
    
  }
  getConsultant(e:any){
    this.opdServicce.getConsultantByDept(e.target.value).subscribe((res:any)=>{
      this.filterConsultent=res.data
      console.log(this.filterConsultent)
    })
  }
  consType(e:any){
if(e.target.value=='General Visit'){
  this.Charges =this.currentDoctor.GeneralVisit
}
else if (e.target.value=='Emergency Visit'){
  this.Charges =this.currentDoctor.EmergencyVisit
}
else{
  this.Charges =this.currentDoctor.NightVisit
}
  }
  discountAmount(e:any){
console.log(e.target.value)
    this.Charges=this.Charges - e.target.value

  }

  selectDoctor(event:any){
this.filterConsultent.forEach((element:any) => {
  console.log(event.target.value)
  if(element.DoctorName==event.target.value){
    this.currentDoctor = element
  }
});
 
  }


}
