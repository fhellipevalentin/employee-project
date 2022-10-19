import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Errors } from 'src/errors/Errors';
import { Employee } from '../components/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URLBase: string = environment.apiURLBase
  
  private errorHandle: Errors = new Errors()

  constructor( private http: HttpClient ) { }

  authorizationAccess = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listDataEmployee(): Observable<Employee> {
    return this.http.get<Employee>(`${this.URLBase}/employees`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  accessDataEmployeeById(id:any): Observable<Employee>{
    return this.http.get<Employee>(`${this.URLBase}/employees/${id}`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  insertEmployee(newData: any): Observable<Employee> {
    return this.http.post<Employee>(`${this.URLBase}/employees`, JSON.stringify(newData), this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  updateEmployee(id: any, newData: any): Observable<Employee> {
    return this.http.put<Employee>(`${this.URLBase}/employees/${id}`, JSON.stringify(newData), this.authorizationAccess)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  deleteEmployeeById(id: any) {
    return this.http.delete<Employee>(`${this.URLBase}/employees/${id}`, this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }
}
