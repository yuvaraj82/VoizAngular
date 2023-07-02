import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminbilling } from '../adminbilling';
import { AdminbillingService } from '../adminbilling.service';

@Component({
  selector: 'app-adminbilling',
  templateUrl: './adminbilling.component.html',
  styleUrls: ['./adminbilling.component.css']
})
export class AdminbillingComponent implements OnInit {
  adminbilling=new Adminbilling();
  adminbillings:any;
  cardnumber:any;
	cardholder:any;
  number:any;
  month:any;
	year:any;
	cvv:any;
  Sachin:any;
  deleteMess:any
  constructor(private adminbillingService:AdminbillingService,private router:Router) {}

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
  this.adminbillingService.createPay(this.adminbilling).subscribe(
    (data)=>console.log(data),
    (error)=>console.log(error)
  );
  
}
saveObject(){
  this.adminbilling.cardnumber=this.cardnumber;
  this.adminbilling.cardholder=this.cardholder;
  this.adminbilling.number=this.number;
  this.adminbilling.month=this.month;
  this.adminbilling.year=this.year;
  this.adminbilling.cvv=this.cvv;

  console.log('ready data: ',this.adminbilling)
}
getdata() {
  this.Sachin = 'Sachin';
  this.adminbillingService.getPayList().subscribe((data: any) => {
      console.log('Hii all');
      this.adminbillings = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
deletedata(id: any) {
  //Add some Logic here to delete the
  this.adminbillingService.deletepay(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMess = true;
              this.adminbillingService.getPayList().subscribe(data => {
                  this.adminbillings = data
              })
          },
          error => console.log(error));
}
}