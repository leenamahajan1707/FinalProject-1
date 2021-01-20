import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
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
  doctor: Doctor = new  Doctor();

  


  ngOnInit(): void {
  }

  constructor(private service: RegistrationService, private _router: Router) { }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    if (this.patient.role == "Patient")
    {

      this.PatientLogin();
    }
    else if(this.patient.role == "Doctor")
    {
      this.doctor.emailId = this.patient.emailId;
      this.doctor.password = this.patient.password;
      this.doctor.role = this.patient.role;
      this.DoctorLogin();
    }
  }

  PatientLogin(){
    console.log("+++++++"+this.patient.role);
    this.service.loginUserFromRemote(this.patient).subscribe(

      data => {

        console.log(this.patient.role);

        if (this.patient.role == "Patient") {

          this._router.navigate(['/dashboard2']
          );
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

  DoctorLogin()
  {
    console.log("+++++++"+this.doctor.role);
    this.service.loginDoctorFromRemote(this.doctor).subscribe(

      data => {

        console.log(this.doctor.role);

        if (this.patient.role == "Doctor") {

          this._router.navigate(['/dashboard1']
          );
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
