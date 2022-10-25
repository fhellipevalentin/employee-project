import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder ) { }
  
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
    if (confirm('Are you want to edit the department?')) {
      this.departmentService.updateDepartment(this.id, this.updateData).subscribe(()=>{
        this.route.navigate(['/home'])
      })
    }
  }


}
