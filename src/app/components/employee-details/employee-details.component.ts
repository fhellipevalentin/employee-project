import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( 
    public dialogRef:MatDialogRef<EmployeeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public employee:Employee
    ) { }
  
  ngOnInit(): void {
    
  }
  close() {
    this.dialogRef.close();
  }
}
