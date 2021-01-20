import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { Patient } from 'src/app/patient';
import { RegistrationService } from 'src/app/registration.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  patient = new Patient();
  msg = '';
  doctor: Doctor = new  Doctor();
// patient:Patient;
// doctor:Doctor;
  
constructor(private service: RegistrationService,
            private _router: Router,
            private loginservice: AuthenticationService
  ) { }


  ngOnInit(): void {
    if(this.loginservice.isUserLoggedIn)
    {
      if(sessionStorage.getItem("patient_id")!=undefined)
        this._router.navigate(['/dashboard2']); 
      else if(sessionStorage.getItem("doctor_id")!=undefined)
        this._router.navigate(['/dashboard1']); 
      
    }
  }


  onSubmit(f: NgForm) {
    console.log("in on submit");
    console.log(this.patient);  // { first: '', last: '' }
    console.log(f.valid);  // false

    if (this.patient.role == "Patient")
    {

      this.PatientLogin(this.patient);
    }
    else if(this.patient.role == "Doctor")
    {
      this.doctor.emailId = this.patient.emailId;
      this.doctor.password = this.patient.password;
      this.doctor.role = this.patient.role;
      this.DoctorLogin();
    }
  }

  PatientLogin(patient:Patient){

    console.log("patienlogint");
    console.log(patient);
    this.service.loginUserFromRemote(patient).subscribe(

      data => {

        console.log(this.patient.role);

        if (this.patient.role == "Patient") {

          // sessionStorage.setItem('emailId', data.patient.emailId);
          // sessionStorage.setItem('patient_id', data.patient.patient_id);

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
    console.log("drlogint");
    console.log(this.doctor);
    console.log("+++++++"+this.doctor.role);
    this.service.loginDoctorFromRemote(this.doctor).subscribe(

      data => {

        console.log(this.doctor.role);

        if (this.patient.role == "Doctor") {
          // sessionStorage.setItem('emailId', data.doctor.emailId);
          // sessionStorage.setItem('doctor_id', data.doctor.id);

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
