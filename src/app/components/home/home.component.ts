import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/components/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }
  
  formulary!: FormGroup;

  employeeList: any = []
  columns : string[] = ['name', 'email', 'phone', 'department', 'options']

  ngOnInit(): void {
    this.showData();
    this.formulary = this.formBuilder.group( {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required)
    })

  }

  showData() {
    this.employeeService.listDataEmployee().subscribe((data: {})=> {
      this.employeeList = data
    })
  }

  submit() {
    const formValues = this.formulary.value
    const employee: Employee = new Employee(formValues.name, formValues.email, 
      formValues.phone, formValues.department);
    this.employeeService.insertEmployee(employee).subscribe(response => {
      let list: Employee[] = [...this.employeeList, response]
        this.employeeList = list
      this.snackBar.open('The Task has been added', 'Success!', {
        duration: 2000
      })
      this.formulary.reset();
      console.log(response)
    })
  }
  deleteData(id:any) {
    if(confirm('Are yout sure you want to delete this task?')) {
      this.employeeService.deleteEmployeeById(id).subscribe(()=>{
        this.showData()
      })
    }
  }

}
