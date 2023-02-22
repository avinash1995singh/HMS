import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,MaterialModule,
  ],
  exports: [MaterialModule,CommonModule,NgxSpinnerModule ,ReactiveFormsModule,FormsModule]
})
export class SharedModule { }
