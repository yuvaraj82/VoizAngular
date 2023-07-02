import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLoggedOn(){
    if(sessionStorage.getItem('userId')!=null){
      return true;
    }
    alert("Only admin can access");
    this.router.navigate(['/adminlogin']);
    return false;
  }
}
