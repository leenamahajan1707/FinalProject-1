import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { History } from '../../History';
import { HistoryService } from '../../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: History = new  History();
  patient:Patient = new Patient();
  p_id: number
  
  
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private historyService: HistoryService,
    private route: ActivatedRoute,
    private authenticationService:AuthenticationService
    ) {}
    
    
    ngOnInit(): void {
      this.history.patient_id = this.route.snapshot.params['patient_id'];
       console.log("PId in history "+this.history.patient_id);

       this.historyService.getPatientById(this.history.patient_id).subscribe( data =>{
        console.log(data);
        this.patient = data;
        //this.goToHistory();
      },
      error => console.log(error));
    }
       
    
  

  addHistory(){
    // this.patient_id = this.route.snapshot.params['patient_id'];
    // console.log(this.patient_id);

    this.history.pname = this.patient.pname;
    this.history.psurname = this.patient.psurname;
    this.history.age = this.patient.age;
    this.history.mob_no = this.patient.mob_no;


    this.historyService.saveHistory(this.history).subscribe( data =>{
      console.log(data);
      this.goToDoctorView();
    },
    error => console.log(error));
  }

  goToDoctorView(){
    this.router.navigate(['/dashboard1']);
  }

  onSubmit(){
    console.log(this.history);
    this.addHistory();
  }

  logout(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);

  }

  navToggle(){

  }
  toggleNav(){}


}

