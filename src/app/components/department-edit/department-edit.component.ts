import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  constructor( 
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar, 
    ) { }
  
  formulary!: FormGroup;
  id = this.activatedRoute.snapshot.params['id']
  updateData: any = {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.departmentService
      .accessDataDepartmentById(id)
      .subscribe((data) => {
        this.updateData = data;/*
        this.updateData.created_At = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()*/
      });
      this.formulary = this.formBuilder.group( {
        categoria: new FormControl('', Validators.required)
      })
  }
  
  updatingData() {
      this.departmentService.updateDepartment(this.id, this.updateData).subscribe(()=>{
        this.snackBar.open('The Department has been edited', 'Success!', {
          duration: 2000
        })
        this.route.navigate(['/home'])
      })
    }
}
