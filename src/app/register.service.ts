// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:4000'; 
  deleteUser: any;

  constructor(private http:HttpClient) { }
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/getreg');
    }
    deletereg(id: number): Observable<any> {
       return this.http.delete(`${this.baseUrl}/deletereg/${id}`, { responseType: 'text' });
     }

  createUser(register: Object): Observable<object> {

  console.log("Sachin",register)

  return this.http.post(`${this.baseUrl}`+'/addreg', register);

  }
  // createlog(register: Object): Observable<object> {

  //   console.log("Sachin",register)
  
  //   return this.http.post(`${this.baseUrl}`+'/login', register);
  
  //   }

  

 }

