import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DelayRouteService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  Delay(delayTime: number = 2000) {
    setTimeout(() => {

    }, delayTime);
  }
  navigateWithDelay(url: string, delayTime: number = 1000) {
    setTimeout(() => {
      this.router.navigate([url], { relativeTo: this.route });
    }, delayTime);
  }
}
