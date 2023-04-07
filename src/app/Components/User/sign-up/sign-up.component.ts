import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpErrorHandler } from '../../HttpErrorHandler';
import { DelayRouteService } from '../../Delayserviec';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  sUpForm: FormGroup;
  alertclass: any = null;
  Response: any = null;
  ErrResponse : any = null;
  errError: any;
  errmsg: any;
  errstatus: any;
  errheaders: any;
  

  constructor(private service: AuthService,    
    private routeservice : DelayRouteService,
    private form: FormBuilder,
    private errhandler: HttpErrorHandler) {
    this.sUpForm = this.form.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      })
  }

  SignUp(): void {
    debugger
    this.service.register(this.sUpForm.value).subscribe(sucess => {
      this.alertclass = 'alert alert-sucess text-center';
      this.Response = sucess;
      this.clearform();      
      this.routeservice.navigateWithDelay('user/signin')
    }, error => {
      this.alertclass = 'alert alert-danger text-center';
      this.ErrResponse = this.errhandler.handleError(error);
      this.errError = this.ErrResponse.Errormsg;
      this.errmsg = this.ErrResponse.Message;
      this.errstatus = this.ErrResponse.Status;
      this.errheaders = this.ErrResponse.Headers.value;

      console.warn
        (`Api Error Response: ${this.errError}\n 
      Status code: ${this.errstatus}\n  
      header: ${this.errheaders}\n 
      Message: ${this.errmsg} `)
      //this.clearform();
    })
  }

  clearform() {
    this.sUpForm.setValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

}
