import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { BillingComponent } from './billing/billing.component';
import { SimcardComponent } from './simcard/simcard.component';
import { PostpaidsimcardComponent } from './postpaidsimcard/postpaidsimcard.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import {MessagesComponent} from './messages/messages.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { AdmindongleComponent } from './admindongle/admindongle.component';
import { AdminbillingComponent } from './adminbilling/adminbilling.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsernavComponent } from './usernav/usernav.component';
import { AuthGuard } from './adminlogin/auth.guard';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { UserprepaidComponent } from './userprepaid/userprepaid.component';
import { UserpostpaidComponent } from './userpostpaid/userpostpaid.component';
import { UserdongleComponent } from './userdongle/userdongle.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component: RegisterComponent},
  {path: 'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'prepaid',component:PrepaidComponent},
  {path:'postpaid',component:PostpaidComponent},
  {path:'recharge',component:RechargeComponent},
  {path:'billing',component:BillingComponent},
  {path:'simcard',component:SimcardComponent},
  {path:'postpaidsimcard',component:PostpaidsimcardComponent},
  {path:'dongleplans',component:DongleplansComponent},
  {path:'loginsuccess',component:LoginsuccessComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'messages',component:MessagesComponent,canActivate:[AuthGuard]},
  {path:'prepaidplans',component:PrepaidplansComponent,canActivate:[AuthGuard]},
  {path:'postpaidplans',component:PostpaidplansComponent,canActivate:[AuthGuard]},
  {path:'admindongle',component:AdmindongleComponent,canActivate:[AuthGuard]},
  {path:'adminbilling', component:AdminbillingComponent,canActivate:[AuthGuard]},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'usernav',component:UsersComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'usercontact',component:UsercontactComponent},
  {path:'userprepaid', component:UserprepaidComponent},
  {path:'userpostpaid',component:UserpostpaidComponent},
  {path:'userdongle',component:UserdongleComponent},
  {path:'userprofile',component:UserprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
