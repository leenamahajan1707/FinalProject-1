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

  ngOnInit(): void {}

  // public fbFormGroup = this.fb.group({
  //   pname: ['', Validators.required],
	//   age: ['', Validators.required] ,
	//   mob_no: ['', Validators.required],
  //   date_visited: ['', Validators.required],
  //   reason_for_visit : ['', Validators.required],
  //   symptoms: ['', Validators.required],
  //   medicine_Prescribed: ['', Validators.required],
  //   allergy_if_any: ['', Validators.required],
  //   is_admitted: [''],
  //   date_of_admitted: [''],
  //   date_of_released: [''],
  //   test_Done: ['', Validators.required],
  //   //private String testReport;
  //   hosp_name: ['', Validators.required],
  //   doctor_Name: ['', Validators.required],
  //   doctor_Designation: ['', Validators.required],
  //   hosp_address: ['', Validators.required]
  // });

  constructor(
    private router: Router,
    private http: HttpClient,
    private historyService: HistoryService
  ) {}

  //  addHistory() {
  //   const data = this.fbFormGroup.value;
  //   const url = 'http://localhost:8080/api/v1/history';

  //   this.http.post(url, data).toPromise();

  //   //this.router.navigate(['login']);
  // }

  history: History = new  History();

  addHistory(){
    this.historyService.saveHistory(this.history).subscribe( data =>{
      console.log(data);
      //this.goToHistory();
    },
    error => console.log(error));
  }

  goToHistory(){
    this.router.navigate(['/searchHistory']);
  }

  onSubmit(){
    console.log(this.history);
    this.addHistory();
  }

}

