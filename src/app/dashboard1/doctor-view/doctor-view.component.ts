import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from 'src/app/history.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {

  patient_id: number

  constructor(
      private router: Router,
      private http: HttpClient,
      private historyService: HistoryService,
      private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }

  add(){
    this.patient_id = this.route.snapshot.params['patient_id'];
    console.log(this.patient_id);
    this.router.navigate(['history',this.patient_id]);
  }

  selectPatient(){
    this.patient_id = this.route.snapshot.params['patient_id'];
    console.log(this.patient_id);
    this.router.navigate(['get-history', this.patient_id]);
  }

}
