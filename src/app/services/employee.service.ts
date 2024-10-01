import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empApiUrl = 'http://localhost:8082/sprbootdemo/semployee';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.empApiUrl}/listallemp`);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.empApiUrl}/findemp/${id}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.empApiUrl}/addempl}`, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.empApiUrl}/updateemp/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/deleteemp/${id}`);
  }
}
