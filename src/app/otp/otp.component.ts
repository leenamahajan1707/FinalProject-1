import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private service: RegistrationService,
              private route:ActivatedRoute,
              private router:Router) { }
  emailId:String;
  password:String;
  ngOnInit(): void {
    this.emailId = this.route.snapshot.params['emailId'];
  }

  otp :number;
  msg ='';
  onSubmit(f: NgForm) 
  {
    console.log("otp = "+this.otp+" passw "+this.password);
    if(this.otp != null && this.otp != undefined)
    {
      
      this.service.updatePassword(this.emailId,this.password,this.otp).subscribe(

        data => {
  
          console.log(this.otp);
  
             this.router.navigate(['/login']);
        
  
         },
        error => {
          console.log("Error occured");
          this.msg = "Enter valid OTP";
        }
      )
    }
    else if(this.otp == null){
      this.msg = "Enter otp ";
    }
    

  }

}
