import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http:HttpClient) { }

  createlog(register: Object): Observable<object> {

    console.log("Sachin",register)
  
    return this.http.post(`${this.baseUrl}`+'/login', register);
  
    }
}
