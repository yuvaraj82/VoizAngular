import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { BillingComponent } from './billing/billing.component';
import { SimcardComponent } from './simcard/simcard.component';
import { PostpaidsimcardComponent } from './postpaidsimcard/postpaidsimcard.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { AdmindongleComponent } from './admindongle/admindongle.component';
import { AdminbillingComponent } from './adminbilling/adminbilling.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { UserprepaidComponent } from './userprepaid/userprepaid.component';
import { UserpostpaidComponent } from './userpostpaid/userpostpaid.component';
import { UserdongleComponent } from './userdongle/userdongle.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PrepaidComponent,
    PostpaidComponent,
    RechargeComponent,
    BillingComponent,
    SimcardComponent,
    PostpaidsimcardComponent,
    DongleplansComponent,
    LoginsuccessComponent,
    AdminComponent,
    UsersComponent,
    MessagesComponent,
    PostpaidplansComponent,
    PrepaidplansComponent,
    AdmindongleComponent,
    AdminbillingComponent,
    AdminnavComponent,
    AdminloginComponent,
    UsernavComponent,
    UserhomeComponent,
    UsercontactComponent,
    UserprepaidComponent,
    UserpostpaidComponent,
    UserdongleComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
