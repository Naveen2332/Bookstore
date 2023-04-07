import { Component, OnInit } from '@angular/core';
import { DelayRouteService } from './Components/Delayserviec';
import { AuthService } from './Components/User/Service/auth.service';
import { AuthguardGuard } from './Components/Guard/authguard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
  btnname = "";
  islogged: boolean = this.service.isAuthenticated();

  constructor(
    private routeservice: DelayRouteService,
    private service: AuthService) { }


  login() {
    this.routeservice.navigateWithDelay('user/signin', 0)
    this.islogged = this.service.isAuthenticated();
  }

  logout() {
    localStorage.removeItem("jwttoken");
    this.islogged = this.service.isAuthenticated();
    this.routeservice.navigateWithDelay('', 0)
  }

  search(query: string) {
    this.routeservice.navigateWithDelay(query, 0)
    // this.router.navigate([query])
    //  ////hotcoded route syntax (['user/signin']) , dynamic route syntax ([query]) 
  }
}//  console.warn(query);
