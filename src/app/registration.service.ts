import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { Doctor } from './doctor';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(patient: Patient): Observable<any> {

    var plogin = this.http.post<any>("http://localhost:8080/loginPatient", patient).pipe(map(data => {
      sessionStorage.setItem('patient_id', data.patient_id);
      sessionStorage.setItem('emailId', data.emailId);

    }
    ));

    console.log(plogin);
    console.log(patient);
    return plogin;

  }

  public loginDoctorFromRemote(doctor: Doctor): Observable<any> {

    var dlogin = this.http.post<any>("http://localhost:8080/loginDoctor", doctor).pipe(map(data => {
      sessionStorage.setItem('doctor_id', data.id);
      sessionStorage.setItem('emailId', data.emailId);

    }
    ));

    console.log(dlogin);
    console.log(doctor);
    return dlogin;

  }

  public RegisterUserFromRemote(patient: Patient): Observable<any> {

    return this.http.post<any>("http://localhost:8080/registerPatient", patient)
  }

  public RegisterDoctorFromRemote(doctor: Doctor): Observable<any> {

    return this.http.post<any>("http://localhost:8080/registerDoctor", doctor)
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
