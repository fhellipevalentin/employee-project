import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar, 
    ) { }
  
  formulary!: FormGroup;
  id = this.activatedRoute.snapshot.params['id']
  updateData: any = {}
  
  departmentList: any = []

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.employeeService
      .accessDataEmployeeById(id)
      .subscribe((data) => {
        this.updateData = data;
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
    this.employeeService.updateEmployee(this.id, this.updateData).subscribe(()=>{
      this.snackBar.open('The Department has been edited', 'Success!', {
        duration: 2000
      })
      this.route.navigate(['/home'])
    })
  }

}
