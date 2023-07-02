// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   submit(){

//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register=new Register();
  // namefirst: any;
  // namelast: any;
  // emailId: any;
  // mobileNum: any;
  // passcode: any;
  edited: any;
  message: any;
  mithresh: any;
  registers: any;
  deleteMessage: any;
  firstname: any;
  lastname: any;
  email:any;
  mobilenumber: any;
  password:any;

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void { }
  
  profileForm = new FormGroup({
    firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
    ]),
    lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),

    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(20),

  ]), 
  mobilenumber: new FormControl('', [
    Validators.required,
    Validators.minLength(10),

  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]),

});
get f(){
  return this.profileForm.controls;

}
submit(){

  // console.log("Amit Trying to connect TS from HTML File");

  this.firstname=this.f['firstname'].value;

  this.lastname=this.f['lastname'].value;

  this.email=this.f['email'].value;

  this.mobilenumber=this.f['mobilenumber'].value;

  this.password=this.f['password'].value;

  // console.log("bbb",this.discountProduct);



  this.register.firstname=this.firstname;

  this.register.lastname=this.lastname;

  this.register.email=this.email;

  this.register.mobilenumber=this.mobilenumber;

  this.register.password=this.password;

  console.log("HI",this.register)

  this.registerService.createUser(this.register)

  .subscribe(

    (data) => {alert("Registered");this.router.navigate(['/login']);},

  (error) => {alert("This email already exits.Please sign up with another email address");}

  );

  this.message = "Registered Successfully"

  this.edited = true;

   }
// submit(){
//   this.firstname=this.f['firstname'].value;
//   this.lastname=this.f['lastname'].value;
//   this.email=this.f['email'].value;
//   this.mobilenumber=this.f['mobilenumber'].value;
//   this.password=this.f['password'].value;

//   this.registerService
//             .createUser(this.register).subscribe(
//                 (data) => {alert("Registered Successfully");},                    
//                 (error) => {alert("This email already exits.Please sign up with another email address");}
//             );
//             // this.message="Form submitted successfully";
//             // this.edited = true; 

//   console.log('ready data: ',this.register)

//   // this.saveObject();
//         // this.registerService
//         //     .createUser(this.register).subscribe(
//         //         (data) => {alert("Registered Successfully");},                    
//         //         (error) => {alert("This email already exits.Please sign up with another email address");}
//         //     );
//         //     this.message="Form submitted successfully";
//         //     this.edited = true; 
          
// }
// saveObject() {

  // this.register.firstname = this.namefirst;
  // this.register.lastname = this.namelast;
  // this.register.email = this.emailId;
  // this.register.mobilenumber = this.mobileNum;
  // this.register.password = this.passcode;
//   this.registerService
//             .createUser(this.register).subscribe(
//                 (data) => {alert("Registered Successfully");},                    
//                 (error) => {alert("This email already exits.Please sign up with another email address");}
//             );
//             // this.message="Form submitted successfully";
//             // this.edited = true; 

//   console.log('ready data: ',this.register)

// }
getdata() {
  this.mithresh = 'mithresh';
  this.registerService.getUserList().subscribe((data: any) => {
      console.log('Hii all');
      this.registers = data; 
  });

}
deletedata(id: any) {
  
  this.registerService.deletereg(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMessage = true;
              this.registerService.getUserList().subscribe(data => {
                  this.registers = data
              })
          },
          error => console.log(error));
}
}