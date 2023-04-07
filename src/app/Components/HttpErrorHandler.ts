import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  

  handleError(error: any): HttpErrorResponseProps {
    
    if (error instanceof HttpErrorResponse) {
      const httpError: HttpErrorResponseProps = {
        Errormsg : error.error,
        Status: error.status,
        Message: error.message,
        Headers: error.headers
      };
      return httpError;
    }
    else {
      const otherResponse: HttpErrorResponseProps = {
        Errormsg : error.error,
        Status: 0,
        Message: error.message,
        Headers: {}
      };
      return otherResponse;
    }
  }
}
interface HttpErrorResponseProps {
  Errormsg:any,
  Status: number;
  Message: string;
  Headers: object;
}