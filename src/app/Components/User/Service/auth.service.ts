import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { signinmodel, signupmodel } from '../Model/usermodel';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url: string = "https://localhost:7174/Account";
  response: any;
  //private isAuthenticated = false;

  constructor(private http: HttpClient) { }


  login(sIn: signinmodel): Observable<any> {
    return this.http.post(this.Url + "/login", sIn, { responseType: 'text' });
  }

  register(sUp: signupmodel): Observable<any> {
    return this.http.post(this.Url + "/signup", sUp,{ responseType: 'text' });
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('jwttoken');
    return (authToken !== null); //returns true if jwt token Exist: check if the JWT token is present in Local Storage
  }

}