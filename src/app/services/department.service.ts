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

  listDataEmployee(): Observable<Department> {
    return this.http.get<Department>(`${this.URLBase}/employees`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  accessDataEmployeeById(id:any): Observable<Department>{
    return this.http.get<Department>(`${this.URLBase}/employees/${id}`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  insertEmployee(newData: any): Observable<Department> {
    return this.http.post<Department>(`${this.URLBase}/employees`, JSON.stringify(newData), this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  updateEmployee(id: any, newData: any): Observable<Department> {
    return this.http.put<Department>(`${this.URLBase}/employees/${id}`, JSON.stringify(newData), this.authorizationAccess)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  deleteEmployeeById(id: any) {
    return this.http.delete<Department>(`${this.URLBase}/employees/${id}`, this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }
}
