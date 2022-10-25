import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor( 
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder ) { }
  
  formulary!: FormGroup;
  id = this.activatedRoute.snapshot.params['id']
  updateData: any = {}
  
  departmentList: any = []

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.employeeService
      .accessDataEmployeeById(id)
      .subscribe((data) => {
        this.updateData = data;/*
        this.updateData.created_At = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()*/
      });
      this.formulary = this.formBuilder.group( {
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
        department: new FormControl('', Validators.required)
      })
    
    this.departmentService.listDataDepartment().subscribe((data: {})=> {
      this.departmentList = data
    })
  }
  
  updatingData() {
    if (confirm('Are you want to edit the employee?')) {
      this.employeeService.updateEmployee(this.id, this.updateData).subscribe(()=>{
        this.route.navigate(['/home'])
      })
    }
  }

}
