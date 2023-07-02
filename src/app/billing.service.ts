import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private baseUrl='http://localhost:4000';

  constructor(private http:HttpClient) { }
  getPayList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/getpay');
  }
  deletepay(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/deletepay/${id}`, { responseType: 'text' });

   }

createPay(payment: object): Observable<object> {

console.log("Sachin",payment)

return this.http.post(`${this.baseUrl}`+'/addpay', payment);

}
}
