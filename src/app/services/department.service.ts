import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Errors } from 'src/errors/Errors';
import { Department } from '../components/model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  URLBase: string = environment.apiURLBase
  
  private errorHandle: Errors = new Errors()

  constructor( private http: HttpClient ) { }

  authorizationAccess = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listDataDepartment(): Observable<Department> {
    return this.http.get<Department>(`${this.URLBase}/departments`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  accessDataDepartmentById(id:any): Observable<Department>{
    return this.http.get<Department>(`${this.URLBase}/departments/${id}`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  insertDepartment(newData: any): Observable<Department> {
    return this.http.post<Department>(`${this.URLBase}/departments`, JSON.stringify(newData), this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  updateDepartment(id: any, newData: any): Observable<Department> {
    return this.http.put<Department>(`${this.URLBase}/departments/${id}`, JSON.stringify(newData), this.authorizationAccess)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  deleteDepartmentById(id: any) {
    return this.http.delete<Department>(`${this.URLBase}/departments/${id}`, this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }
}
