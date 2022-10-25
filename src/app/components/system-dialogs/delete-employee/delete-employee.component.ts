import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor( 
    public dialogRef:MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public employee:Employee,
    public employeeService: EmployeeService,
    private snackBar: MatSnackBar
    ) { }
  
  ngOnInit(): void {
    
  }
  close() {
    this.dialogRef.close();
  }

  deleteData(id:any) {
      this.employeeService.deleteEmployeeById(id).subscribe(()=>{
        this.dialogRef.close();
      })
      this.snackBar.open('The Employee has been deleted', 'Success!', {
        duration: 2000
      })
  }
}
