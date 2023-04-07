import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpErrorHandler } from '../../HttpErrorHandler';
import { DelayRouteService } from '../../Delayserviec';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  sinForm: FormGroup;
  alertclass: any = null;
  ResponseMsg: any;
  errError: any;
  fail!: boolean;
  constructor(private service: AuthService,
    private routeservice: DelayRouteService,
    private form: FormBuilder,
    private errhandler: HttpErrorHandler) {
    this.sinForm = this.form.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })

  }

  SignIn(): void {
    this.service.login(this.sinForm.value).subscribe(response => {
      debugger
      localStorage.setItem('jwttoken', response)
      this.fail = false
      this.ResponseMsg = "Login Sucessfull";
      this.alertclass = "alert alert-success"
      this.routeservice.navigateWithDelay('')
    }, error => {
      debugger
      this.fail = true
      this.ResponseMsg = this.errhandler.handleError(error);
      this.alertclass = "alert alert-danger"
      this.errError = this.ResponseMsg.Errormsg;
    })
  }


}//   //    console.warn(   this.errError  );