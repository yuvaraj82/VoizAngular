import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login =new Login();
  email : any;
  password : any;
  msg='';
  resp:any;
  LoginService: any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
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
    this.login.email = this.email;
    this.login.password = this.password;


    this.loginService
            .createlog(this.login).subscribe(
                (data) => {alert("Login Success"); 
                console.log(data);
                this.router.navigate(['/userhome']);

                this.resp=data;
                sessionStorage.setItem('userId',this.resp.id);
                console.log(sessionStorage.getItem('userId'));
                                
// sessionStorage.setItem('firstname',this.resp.data.firstname);
//       console.log("Response Received",this.resp.data.firstname,sessionStorage.getItem('firstname'));
//       

            },              
                (error) => {alert("Invalid email address or password");}
            );
    
  }
  // gotohome(){
  //   this.router.navigate(['/home'])
  // }
 

}



