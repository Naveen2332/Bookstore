import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const localtoken = localStorage.getItem('jwttoken');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localtoken}`
      }
    })
  return next.handle(request);
    // /////////return with sucess & failure method////////////////
    // //   return next.handle(request).pipe(
    // //     tap(sucessresult => {
    // //     },
    // //       errorresult => {
    // //       } 
    // //     ) 
    // //   );
    // // }

  }
}
