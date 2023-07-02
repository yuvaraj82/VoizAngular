// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=new Users();
  namefirst: any;
  namelast: any;
  emailId: any;
  mobileNum: any;
  passcode: any;
  edited: any;
  message: any;
  mithresh: any;
  registers: any;
  deleteMessage: any;
  

  constructor(private usersService:UsersService,private router:Router) { }

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
  this.namefirst=this.f['firstname'].value;
  this.namelast=this.f['lastname'].value;
  this.emailId=this.f['email'].value;
  this.mobileNum=this.f['mobilenumber'].value;
  this.passcode=this.f['password'].value;

  this.saveObject();
        this.usersService
            .createUser(this.users).subscribe(
                (data) => console.log(data),                    
                (error) => console.log(error)
            );
            this.message="Form submitted successfully";
            this.edited = true; 
          
}
saveObject() {

  this.users.firstname = this.namefirst;
  this.users.lastname = this.namelast;
  this.users.email = this.emailId;
  this.users.mobilenumber = this.mobileNum;
  this.users.password = this.passcode;

  console.log('ready data: ',this.users)

}
getdata() {
  this.mithresh = 'mithresh';
  this.usersService.getUserList().subscribe((data: any) => {
      console.log('Hii all');
      this.registers = data; 
  });

}
deletedata(id: any) {
  
  this.usersService.deletereg(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMessage = true;
              this.usersService.getUserList().subscribe(data => {
                  this.registers = data
              })
          },
          error => console.log(error));
}
}