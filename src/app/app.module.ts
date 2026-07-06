import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon';
import { StudentDashComponent } from './component/student-dash/student-dash.component';
import { StdFormComponent } from './component/std-form/std-form.component';
import { StdTableComponent } from './component/std-table/std-table.component'; 
import { HttpClientModule } from '@angular/common/http';
import { GetconfirmComponent } from './component/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashComponent,
    StdFormComponent,
    StdTableComponent,
    GetconfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
