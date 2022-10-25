import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

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
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { DeleteEmployeeComponent } from './components/system-dialogs/delete-employee/delete-employee.component';
import { DeleteDepartmentComponent } from './components/system-dialogs/delete-department/delete-department.component';



@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    EmployeeEditComponent,
    DepartmentEditComponent,
    EmployeeDetailsComponent,
    DeleteEmployeeComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    
    Ng2SearchPipeModule,

    NgxMaskModule.forRoot()
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
