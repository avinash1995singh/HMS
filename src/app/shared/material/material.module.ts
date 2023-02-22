import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';


const materialComponent=[
  MatSidenavModule,MatToolbarModule,MatIconModule,MatMenuModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatListModule,
  MatDividerModule,MatGridListModule,MatTableModule,MatDialogModule,MatSelectModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule
]

@NgModule({
 
  imports: materialComponent,
    exports:materialComponent
})
export class MaterialModule { }
