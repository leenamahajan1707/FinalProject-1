import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(patient: Patient): Observable<any> {

    var a = this.http.post<any>("http://localhost:8080/loginPatient", patient).pipe(map(data => {
      sessionStorage.setItem('patient_id', data.patient_id);
      sessionStorage.setItem('emailId', data.emailId);

    }
    ));

    console.log(a);
    console.log(patient);
    return a;

  }

  public RegisterUserFromRemote(patient: Patient): Observable<any> {

    return this.http.post<any>("http://localhost:8080/registerPatient", patient)
  }

  // private baseurl = "http://localhost:8080/user_list";
  // public getUsersList(): Observable<Patient[]> {

  //   return this.http.get<Patient[]>(`${this.baseurl}`);
  // }

  // private baseurl1 = "http://localhost:8080/del_user";

  // public Deleteuser(id: number): Observable<Object> {
  //   //console.log("in service");
  //   return this.http.delete(`${this.baseurl1}/${id}`);
  // }
}
