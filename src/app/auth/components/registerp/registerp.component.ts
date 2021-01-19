import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registerp',
  templateUrl: './registerp.component.html',
  styleUrls: ['./registerp.component.css']
})
export class RegisterpComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private registrationService: RegistrationService
  ) {}

  patient: Patient = new  Patient();

  addHistory(){
    this.registrationService.RegisterUserFromRemote(this.patient).subscribe( data =>{
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
    this.addHistory();
  }
}
