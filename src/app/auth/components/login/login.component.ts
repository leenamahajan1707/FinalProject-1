import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  patient = new Patient();
  msg = '';

  ngOnInit(): void {
  }

  constructor(private service: RegistrationService, private _router: Router) { }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    this.service.loginUserFromRemote(this.patient).subscribe(

      data => {


      // sessionStorage.setItem('emailId', data.patient.emailId)
      //  sessionStorage.setItem('patient_id', data.patient_id);

        console.log(this.patient.role);

        if (this.patient.role == "Patient") {

          this._router.navigate(['/dashboard2']
          );
        }
        else if (this.patient.role == "Doctor") {
          this._router.navigate(['/dashboard1']);
        }
        else
          this._router.navigate(['/login']);
        console.log("resp received");

      },
      error => {
        console.log("Error occured");
        this.msg = "Enter valid credentials for login";
      }
    )
  }

  Reghere() {
    this._router.navigate(['register']);
  }

  gotoforgot(page) {
    this._router.navigate(['/forgot']);
  }



}
