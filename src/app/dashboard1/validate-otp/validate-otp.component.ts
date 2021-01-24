import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {

  constructor(private service: RegistrationService,
    private route:ActivatedRoute,
    private router:Router) { }

emailId:String;
patient_id:number;

ngOnInit(): void {
this.emailId = this.route.snapshot.params['emailId'];
this.patient_id = this.route.snapshot.params['patient_id'];
}

otp :number;
msg ='';

onSubmit(f: NgForm) 
{
console.log("otp = "+this.otp);
if(this.otp != null && this.otp != undefined)
{

  this.service.validateOtp(this.emailId,this.otp).subscribe(
  data => {

    console.log(this.otp);
    if(data == true){
    this.router.navigate(['/doctor-view',this.patient_id]);
    }
    else{
      this.router.navigate(['**']);
    }

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
