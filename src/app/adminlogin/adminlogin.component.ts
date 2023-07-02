import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminlogin } from '../adminlogin';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adlogin =new Adminlogin();
  email : any;
  password : any;
  resp: any;

  ngOnInit(): void {
  }
  constructor(private adminloginService:AdminloginService,private router:Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
  ]), 
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]),
});
get f(){
  return this.loginForm.controls;

}
  submit(){
    this.email=this.f['email'].value;
    this.password=this.f['password'].value;
    this.adlogin.email = this.email;
    this.adlogin.password = this.password;


    this.adminloginService
            .createlog(this.adlogin).subscribe(
              (data) => {alert("Login Success"); 
              console.log(data);
              this.resp=data;
              sessionStorage.setItem('userId',this.resp.id);
              console.log(sessionStorage.getItem('userId'));
              this.router.navigate(['/users'])},                    
              (error) => {alert("Invalid email address or password");}
            );
    
  }
  // gotohome(){
  //   this.router.navigate(['/home'])
  // }

}
