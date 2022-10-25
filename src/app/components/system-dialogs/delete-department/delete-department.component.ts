import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from '../../model/department';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {

  constructor( 
    public dialogRef:MatDialogRef<DeleteDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public department:Department,
    public departmentService: DepartmentService,
    private snackBar: MatSnackBar
    ) { }
  
  ngOnInit(): void {
    
  }
  close() {
    this.dialogRef.close();
  }

  deleteData(id:any) {
      this.departmentService.deleteDepartmentById(id).subscribe(()=>{
        this.dialogRef.close();
      })
      this.snackBar.open('The Department has been deleted', 'Success!', {
        duration: 4000
      })
  }
}
