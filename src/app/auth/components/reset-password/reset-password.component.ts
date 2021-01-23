import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private registrationService:RegistrationService,
              private router:Router) { }

  emailId:String;
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.sendEmail();

  }

  sendEmail(){
    this.registrationService.sendEmail(this.emailId).subscribe( data =>{
      console.log("sendmail = ");
      console.log(data);
      this.router.navigate(['/otp',this.emailId]);
     
    },
    error => console.log(error));
  }

}
