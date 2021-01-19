import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../../History';
import { HistoryService } from '../../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: History = new  History();
  p_id: number
  
  ngOnInit(): void {
    this.history.patient_id = this.route.snapshot.params['patient_id'];
     console.log("PId in history "+this.history.patient_id);
  }


  constructor(
    private router: Router,
    private http: HttpClient,
    private historyService: HistoryService,
    private route: ActivatedRoute
  ) {}


  

  addHistory(){
    // this.patient_id = this.route.snapshot.params['patient_id'];
    // console.log(this.patient_id);

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

}

