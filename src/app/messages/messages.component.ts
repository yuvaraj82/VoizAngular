// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-messages',
//   templateUrl: './messages.component.html',
//   styleUrls: ['./messages.component.css']
// })
// export class MessagesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Messages } from '../messages';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages=new Messages();
  namecon:any;
  emailcon:any;
  messagecon:any;
  contacts: any;
  Sachin: any;
  deleteMess: any;
  

  constructor(private messagesService:MessagesService,private router:Router) {}

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
  this.messagesService
    .createCon(this.messages).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    );
  
}
saveObject(){
  this.messages.name=this.namecon;
  this.messages.email=this.emailcon;
  this.messages.message=this.messagecon;

  console.log('ready data: ',this.messages)
}
getdata() {
  this.Sachin = 'Sachin';
  this.messagesService.getConList().subscribe((data: any) => {
      console.log('Hii all');
      this.contacts = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
deletedata(id: any) {
  //Add some Logic here to delete the
  this.messagesService.deletecon(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMess = true;
              this.messagesService.getConList().subscribe(data => {
                  this.contacts = data
              })
          },
          error => console.log(error));
}
}