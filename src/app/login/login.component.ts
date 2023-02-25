import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public CustomControler: any;
  public Toggledata = true;
  loginForm = new FormGroup({
    Email: new FormControl("", [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.loginForm.controls;
  }

logo: string='HMS';

constructor(private router:Router,private spinner: NgxSpinnerService){}

ngOnInit() {
  this.spinner.show();
  setTimeout(()=>{
    this.spinner.hide()
  },2000)
}

submit() {
  this.loginForm.markAllAsTouched();
  //this.storage.Login(this.form.value);
  if (this.loginForm.invalid) {
    return;
  }
  else{
    console.log(this.loginForm.value)
    this.spinner.show();
  if(this.loginForm.value.Email=='avinash@gmail.com' && this.loginForm.value.Password=='123456')
{
  this.spinner.hide()
  this.router.navigate(['/pages/admin']);

}
  }
  // this.spinner.showLoader();
  // this._authService.loginUser(this.form.value).subscribe((res: ResponseModel) => {
  //   console.log(res);
  //   if (!res.responseMsg.isError) {
  //     this.spinner.hideLoader();
  //     this._appService.setStorageData('_A', res.responseData.data);
  //     this._appService.setStorageData('_T', res._tokenData);
  //     this._appService.setStorageData('_R', res.responseData.role);

  //   } else {
  //     this.toastr.error("", "Invalid Email/Password, Please try again.");
  //   }
  // }, err => this.spinner.hideLoader())
}

ngOnDestroy() {
  //this.subscription.unsubscribe();
}

iconLogle() {
  this.Toggledata = !this.Toggledata
}

}
