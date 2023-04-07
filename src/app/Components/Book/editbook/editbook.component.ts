import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Components/Book/Model/Book';
import { BookServiceService } from 'src/app/Components/Book/Service/book-service.service';
import { DelayRouteService } from '../../Delayserviec';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  public bookform: FormGroup;
  book: Book = {};
  alertclass: any = null;
  ResponseMsg: any = null;
  ErrorResponse: any;
  errErr: any;
  errmsg: any;

  constructor(private route: ActivatedRoute,
    private service: BookServiceService,
    private form: FormBuilder,
    private routeservice : DelayRouteService,
    private errhandler: ErrorHandler) {
    this.bookform = this.form.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      authore: ["", Validators.required],
      price: ["", Validators.required]
    })

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["b.id"];

    this.service.getbookById(id).subscribe(res => {
      this.book = res;
      this.fillform(this.book);
    }, error => {
      this.ResponseMsg = this.errhandler.handleError(error);
      console.warn(this.ResponseMsg);
    })

  }
  submit() {
    this.service.Updatebook(this.bookform.value).subscribe((response: string) => {
      this.alertclass = "alert alert-success";
      this.ResponseMsg = response;
      this.clearform();
      this.routeservice.navigateWithDelay('/book')
    }, (error: any) => {
      this.alertclass = "alert alert-danger";
      this.ErrorResponse = this.errhandler.handleError(error);
      this.errErr = this.ErrorResponse.Errormsg;
      this.errmsg = this.ErrorResponse.Message;
    });
  }

  fillform(b: Book) {
    this.bookform.setValue({
      id: b.id,
      name: b.name,
      authore: b.authore,
      price: b.price
    })
  }

  clearform() {
    this.bookform = this.form.group({
      id: "",
      name: "",
      authore: "",
      price: ""
    })
  }

  emptydata() {
    this.bookform.setValue({
      id: "Updated",
      name: "Updated",
      authore: "Updated",
      price: "0000000",
    })
  }
}//       console.warn(  );  //  alert("an error occred" + error)

