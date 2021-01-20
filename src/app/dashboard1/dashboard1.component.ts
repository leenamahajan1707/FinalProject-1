import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from '../history.service';
import { History } from '../History';
import { Patient } from '../patient';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private historyService: HistoryService,
     private fb: FormBuilder,
     private authenticationService:AuthenticationService
  ) {}


  ngOnInit(): void {
  }

  //history: History = new  History();
  patient: Patient = new Patient();

  public fbFormGroup = this.fb.group({
    pname: ['', Validators.required],
	  psurname: ['', Validators.required] ,
	  mob_no: ['', Validators.required],
  });

  SearchPatient(){
    const info = this.fbFormGroup.value;
    let name= info.pname;
    let surname = info.psurname;
    let mob = info.mob_no;
    console.log(name);
    console.log(surname);
    console.log(mob);
    this.historyService.getPatientList(name,surname,mob).subscribe( data =>{
      console.log(data);
      this.patient = data;
      //this.goToHistory();
    },
    error => console.log(error));
  }

  // goToHistory(){
  //   this.router.navigate(['/searchHistory']);
  // }

  // selectPatient(pid: number){
  //   this.router.navigate(['get-history', pid]);
  // }
  select(patient_id: number){
    this.router.navigate(['doctor-view', patient_id]);
  }

  toggleNav(){

  }
  logout(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
  
  navToggle: any
 
}
