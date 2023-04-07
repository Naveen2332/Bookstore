import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from 'src/app/Components/Book/Service/book-service.service';
import { HttpErrorHandler } from '../../HttpErrorHandler';
import { DelayRouteService } from '../../Delayserviec';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  bookform: FormGroup;
  alertclass: any = null;
  ResponseMsg: any = null;
  ErrorResponse: any;
  errError: any;
  errmsg: any;
  constructor(private service: BookServiceService,
    private forms: FormBuilder,
    private errhandler: HttpErrorHandler,
    private routeservice : DelayRouteService) {

    this.bookform = this.forms.group({
      name: ["", Validators.required],
      authore: ["", Validators.required],
      price: ["", Validators.required]
    })
  }
  submit() {
    debugger
    this.service.addbook(this.bookform.value).subscribe((response: string) => {
      this.alertclass = "alert alert-success";
      this.ResponseMsg = response;
      this.clearform();
      this.routeservice.navigateWithDelay('/book')
    }, (error: any) => {
      this.alertclass = "alert alert-danger";
      this.ErrorResponse = this.errhandler.handleError(error);
      this.errError = this.ErrorResponse.Errormsg;
      this.errmsg = this.ErrorResponse.Message;
      console.warn(error);
    });
  }


  clearform() {
    this.bookform.setValue({
      name: '',
      authore: '',
      price: ''
    })
  }
}// console.log(    );