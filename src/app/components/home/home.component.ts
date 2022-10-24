import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/components/model/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Department } from '../model/department';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService, 
    private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private departmentService: DepartmentService) { } 
    
  searchText = '';
  selected = 'categoria';

  formulary!: FormGroup;
  formulary2!: FormGroup;

  employeeList: any = []
  departmentList: any = []

  columnsEmp : string[] = ['name', 'email', 'phone', 'department', 'options']
  columnsDep : string[] = ['id', 'categoria', 'options2']

  ngOnInit(): void {
    this.showData();
    this.formulary = this.formBuilder.group( {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      department: new FormControl('', Validators.required)
    })
    this.formulary2 = this.formBuilder.group( {
      category: new FormControl('', Validators.required)
    })
  }

  showData() {
    this.employeeService.listDataEmployee().subscribe((data: {})=> {
      this.employeeList = data
    })
    this.departmentService.listDataDepartment().subscribe((data: {})=> {
      this.departmentList = data
    })
  }

  submit() {
    const formValues = this.formulary.value
    const employee: Employee = new Employee(formValues.name, formValues.email, 
      formValues.phone, formValues.department);
    this.employeeService.insertEmployee(employee).subscribe(response => {
      let list: Employee[] = [...this.employeeList, response]
        this.employeeList = list
      this.snackBar.open('The Employee has been added', 'Success!', {
        duration: 2000
      })
      this.formulary.reset();
      console.log(response)
    })
  }
  submit2() {
    const formValues = this.formulary2.value
    const department: Department = new Department(formValues.category)
    this.departmentService.insertDepartment(department).subscribe(response => {
      let list: Department[] = [...this.departmentList, response]
        this.departmentList = list
      this.snackBar.open('The Department has been added', 'Success!', {
        duration: 2000
      })
      this.formulary2.reset();
      console.log(response)
    })
  }

  deleteData(id:any) {
    if(confirm('Are yout sure you want to delete this task?')) {
      this.employeeService.deleteEmployeeById(id).subscribe(()=>{
        this.showData()
      })
      this.snackBar.open('The Employee has been deleted', 'Success!', {
        duration: 2000
      })
    }
  }

  deleteDpto(id:any) {
    if(confirm('Are yout sure you want to delete this task?')) {
      this.departmentService.deleteDepartmentById(id).subscribe(()=>{
        this.showData()
      })
      this.snackBar.open('The Department has been deleted', 'Success!', {
        duration: 2000
      })
    }
  }

}
