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
      sessionStorage.setItem('email', data.emailId);

    }
    ));

    console.log("====++++"+plogin);
    console.log("=====+____"+patient);
    return plogin;

  }

  public loginDoctorFromRemote(doctor: Doctor): Observable<any> {

    var dlogin = this.http.post<any>("http://localhost:8080/loginDoctor", doctor).pipe(map(data => {
      sessionStorage.setItem('doctor_id', data.id);
      sessionStorage.setItem('email', data.emailId);

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

  private updateUrl ="http://localhost:8080/updatePassword"
  public updatePassword(emailId,password,otp): Observable<any> {
    console.log("otp in sevice "+otp);
    return this.http.get<any>(`${this.updateUrl}/${emailId}/${password}/${otp}`);
  }
//for forgot password
  private baseurl2 = "http://localhost:8080/sendmail";
  public sendEmail(emailId): Observable<any> {
    console.log(emailId);
    return this.http.get<any>(`${this.baseurl2}/${emailId}`);
  }

//for validating patient otp
  private baseurl3 = "http://localhost:8080/sendotpmail";
  public sendOtpEmail(emailId): Observable<any> {
    console.log(emailId);
    return this.http.get<any>(`${this.baseurl3}/${emailId}`);
  }

  private validateOtpUrl = "http://localhost:8080/validateOtp";
  public validateOtp(emailId,otp): Observable<any> {
    console.log("otp in sevice "+otp);
    return this.http.get<any>(`${this.validateOtpUrl}/${emailId}/${otp}`);
  }

  // private baseurl1 = "http://localhost:8080/del_user";

  // public Deleteuser(id: number): Observable<Object> {
  //   //console.log("in service");
  //   return this.http.delete(`${this.baseurl1}/${id}`);
  // }
}
