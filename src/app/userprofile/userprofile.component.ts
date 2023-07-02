import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  resp: any;
  mithresh: any;
  registers: any;
  getid:any;

  constructor(private userprofileService:UserprofileService, private router:Router) { }

  ngOnInit(): void {
    this.resp.firstname=sessionStorage.getItem('firstname');
  }
  // getdataId(id:any) {
  //   this.userprofileService.findById(id).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.getid=true;
  //      this.userprofileService.findById(id).subscribe(data=>{
  //       this.registers=data
  //     })
  //   }
  //     )
  // }
  
    // this.mithresh = 'mithresh';
    // this.userprofileService.findById().subscribe((data: any) => {
    //     console.log('Hii all');
    //     this.registers = data; 
    // });
  
  

}
