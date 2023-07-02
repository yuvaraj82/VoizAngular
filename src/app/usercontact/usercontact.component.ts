import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit {
  contact=new Contact();
  namecon:any;
  emailcon:any;
  messagecon:any;
  contacts: any;
  Sachin: any;
  deleteMess: any;

  constructor(private contactService:ContactService,private router:Router) {}

  ngOnInit(): void { }
  
  contactForm = new FormGroup({
    name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
    ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),

    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
});
get c(){
  return this.contactForm.controls;

}
submit(){
  this.namecon=this.c['name'].value;
  this.emailcon=this.c['email'].value;
  this.messagecon=this.c['message'].value;

  this.saveObject();
  this.contactService
  .createCon(this.contact).subscribe(
    (data)=>console.log(data),
    (error)=>console.log(error)
  );
  
}
saveObject(){
  this.contact.name=this.namecon;
  this.contact.email=this.emailcon;
  this.contact.message=this.messagecon;

  console.log('ready data: ',this.contact)
}
getdata() {
  this.Sachin = 'Sachin';
  this.contactService.getConList().subscribe((data: any) => {
      console.log('Hii all');
      this.contacts = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
deletedata(id: any) {
  //Add some Logic here to delete the
  this.contactService.deletecon(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMess = true;
              this.contactService.getConList().subscribe(data => {
                  this.contacts = data
              })
          },
          error => console.log(error));
}

}
