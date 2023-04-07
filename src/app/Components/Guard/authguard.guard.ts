import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { AuthService } from '../User/Service/auth.service';
import { DelayRouteService } from '../Delayserviec';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private service: AuthService,
    private routeservice: DelayRouteService) {

  }
  canActivate(): boolean {

    const token = localStorage.getItem('jwttoken');
    if (!token) { // //if token = null if statement will execute
      this.routeservice.navigateWithDelay('user/signin', 0)
      return false;
    }

    const decodedToken = jwt_decode(token);
    const isAuthenticated = this.service.isAuthenticated();
    if (!decodedToken) {
      this.routeservice.navigateWithDelay('user/signup', 0)
      return false;
    }
    return true;
  }
}//  console.warn("              ")
