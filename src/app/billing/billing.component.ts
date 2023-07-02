import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Billing } from '../billing';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billing=new Billing();
  cardnumber:any;
	cardholder:any;
  number:any;
  month:any;
	year:any;
	cvv:any;
  Sachin:any;
  constructor(private billingService:BillingService,private router:Router) {}

  ngOnInit(): void { }
  
  paymentForm = new FormGroup({
    cardnumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
    ]),
    cardholder: new FormControl('', [
        Validators.required,
        Validators.minLength(10),

    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    month: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
});
get c(){
  return this.paymentForm.controls;

}
submit(){
  this.cardnumber=this.c['cardnumber'].value;
  this.cardholder=this.c['cardholder'].value;
  this.number=this.c['number'].value;
  this.month=this.c['month'].value;
  this.year=this.c['year'].value;
  this.cvv=this.c['cvv'].value;

  this.saveObject();
  this.billingService.createPay(this.billing).subscribe(
    (data)=>{alert("Payment Successful");},
    (error)=>{alert("Invalid email address or password");}
  );
  
}
saveObject(){
  this.billing.cardnumber=this.cardnumber;
  this.billing.cardholder=this.cardholder;
  this.billing.number=this.number;
  this.billing.month=this.month;
  this.billing.year=this.year;
  this.billing.cvv=this.cvv;

  console.log('ready data: ',this.billing)
}
getdata() {
  this.Sachin = 'Sachin';
  this.billingService.getPayList().subscribe((data: any) => {
      console.log('Hii all');
      this.billing = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
// deletedata(id: any) {
//   //Add some Logic here to delete the
//   this.contactService.deletecon(id)
//       .subscribe(
//           data => {
//               console.log(data);
//               this.deleteMess = true;
//               this.contactService.getConList().subscribe(data => {
//                   this.contacts = data
//               })
//           },
//           error => console.log(error));
// }
}