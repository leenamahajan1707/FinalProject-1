import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../../History';
import { HistoryService } from '../../history.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private historyService: HistoryService,
     private fb: FormBuilder
  ) {}


  ngOnInit(): void {
  }

  history: History = new  History();

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
      this.history = data;
      //this.goToHistory();
    },
    error => console.log(error));
  }



  selectPatient(pid: number){
    console.log(pid)
    this.router.navigate(['get-history', pid]);

  }


}
