import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DelayRouteService } from '../Delayserviec';

@Injectable({
  providedIn: 'root'
})
export class userguardGuard implements CanActivate {
  constructor(private routeservice: DelayRouteService) {  }
  canActivate(): boolean {
    if (localStorage.getItem('jwttoken') != null) {
      this.routeservice.navigateWithDelay('')
      return false;
    }
    return true;
  }
}//  console.warn("              ")
