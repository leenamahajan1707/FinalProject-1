import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  // onSubmit(f: NgForm) {
  //   console.log(f.value);  // { first: '', last: '' }
  //   console.log(f.valid);  // false
  // }

  ngOnInit(): void {
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private registrationService: RegistrationService
  ) {}

  doctor: Doctor = new  Doctor();

  regDoctor(){
    this.registrationService.RegisterDoctorFromRemote(this.doctor).subscribe( data =>{
      console.log(data);
      this.goToLogin();
    },
    error => console.log(error));
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.regDoctor();
  }
}
