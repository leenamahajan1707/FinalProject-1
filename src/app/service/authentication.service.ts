import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(email,password)
  {
    //check the login credentials from db
    if(email=="snehal@gmail.com" && password=="1234")
    {
      sessionStorage.setItem('email',email);
      return true;
    }
    else
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('doctor_id')
    sessionStorage.removeItem('patient_id')
  }

}
