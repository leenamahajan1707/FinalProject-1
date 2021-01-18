import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '././History';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private baseURL = "http://localhost:8080/api/v1/history";
  private searchURL = "http://localhost:8080/api/psearch/doctorsearch";

  constructor(private httpClient: HttpClient) { }

  // getHistoryList(): Observable<History[]>
  // {
  //   return this.httpClient.get<History[]>(`${this.baseURL}`);
  // }

  // public getHistoryByUsername(id){
  //   this.httpClient.get("http://localhost:8080/api/v1/history/"+id).subscribe((res)=>
  //   {
  //     return res;
  //   });
  // }

  // getHistoryList(id : number): Observable<History[]>
  // {
  //   return this.httpClient.get<History[]>(`${this.baseURL}/${id}`);
  // }

  // public saveHistory(history){
  //   return this.httpClient.post("http://localhost:8080/api/v1/history",history,{responseType:'text' as 'json'});
  // }

  saveHistory(history: History): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, history);
  }

  getHistoryById(id: number): Observable<History>{
    return this.httpClient.get<History>(`${this.baseURL}/${id}`);
  }

  getPatientList(name: String,surname: String ,mob: String): Observable<History>{
    return this.httpClient.get<History>(`${this.searchURL}/${name}/${surname}/${mob}`);
  //  console.log(name,surname,mob);
  //  console.log("http://localhost:8080/api/psearch/doctorsearch/${name}/${surname}/${mob}");

  }


}
