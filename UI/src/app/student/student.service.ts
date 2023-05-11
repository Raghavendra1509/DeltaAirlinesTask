import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7058/api'; // API endpoint

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    const url = `${this.apiUrl}/student`; // actual endpoint
    return this.http.post<any>(url,null);
  }
}
