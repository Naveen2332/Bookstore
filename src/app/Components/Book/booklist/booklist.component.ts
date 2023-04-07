import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Components/Book/Model/Book';
import { BookServiceService } from 'src/app/Components/Book/Service/book-service.service';
import { HttpErrorHandler } from 'src/app/Components/HttpErrorHandler';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];
  Response: any;
  constructor(private service: BookServiceService,
    private forms: FormBuilder,
    private errhandler: HttpErrorHandler) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.getbook().subscribe(SucessResponse => {
      debugger
      this.books = SucessResponse;
    }, ErrorResponse => {
      debugger
      this.Response = this.errhandler.handleError(ErrorResponse);
      console.warn(this.Response)
    })
  }

  confirm(b: any) {
    if (confirm("Are you sure to delete Book " + b.name)) {
      this.service.Deletebook(b.id).subscribe(res => {
        console.info(res);
      }, error => {
        console.warn(error);
      })
      this.get();
    }
    this.get();
  }
}
