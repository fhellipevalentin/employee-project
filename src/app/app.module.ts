import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './services/employee.service';

import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { DepartmentService } from './services/department.service';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeEditComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
