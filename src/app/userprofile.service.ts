import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private baseUrl = 'http://localhost:4000'; 
  

  constructor(private http:HttpClient) { }
  findById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findID/${id}`, { responseType: 'text' });
    }
    // deletereg(id: number): Observable<any> {
    //    return this.http.delete(`${this.baseUrl}/deletereg/${id}`, { responseType: 'text' });
    //  }

 
}
