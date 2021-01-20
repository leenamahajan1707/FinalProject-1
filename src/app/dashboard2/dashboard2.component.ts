import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(private router: Router, 
              private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  patient_id = sessionStorage.getItem("patient_id");

  showData()
  {
    this.router.navigate(['get-history',this.patient_id]);
  }

  logout(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);

  }

  navToggle(){

  }
  toggleNav(){}


}
