import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'department-edit/:id', component: DepartmentEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
