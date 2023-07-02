// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl='http://localhost:4000';
  deleteCon:any;

  constructor(private http:HttpClient) { }
  getConList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/getcon');
  }
  deletecon(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/deletecon/${id}`, { responseType: 'text' });

  }

createCon(contact: object): Observable<object> {

console.log("Sachin",contact)

return this.http.post(`${this.baseUrl}`+'/addcon', contact);

}

}
