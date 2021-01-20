import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { History } from '../../History';
import { HistoryService } from '../../history.service';

@Component({
  selector: 'app-get-history',
  templateUrl: './get-history.component.html',
  styleUrls: ['./get-history.component.css']
})
export class GetHistoryComponent implements OnInit {




  // history:any;
  // username:string;

  // constructor(private fb: FormBuilder,
  //   private router: Router,
  //   private http: HttpClient) { }

  // ngOnInit() {
  //   this.findHistoryById();
  // }

  // public fbFormGroup = this.fb.group({
  //   id: ['', Validators.required]
  // });


  //  findHistoryById() {
  //   const data = this.fbFormGroup.value;
  //   console.log(data.id);
  //   console.log();

  //   const url = 'http://localhost:8080/api/v1/history/'+data.id;

  //    this.http.get(url).subscribe((res)=>{
  //      console.log(res);
  //    });

  //   //this.router.navigate(['login']);
  // }

  id: number
  history: History
  constructor(private route: ActivatedRoute, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pid'];

    //this.id=this.route.snapshot.params.pid;       //this one also working
    console.log("id = "+this.id);
    this.history = new History();
    this.historyService.getHistoryById(this.id).subscribe( data => {
      this.history = data;
    });
  }

  toggleNav(){

  }
  logout(){

  }
  
  navToggle: any

}
