import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from '../Model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private Url: string = "https://localhost:7174/Book"
  opp: any;

  constructor(public http: HttpClient) {
    //this.gettoken();
    const tokens = localStorage.getItem("jwttoken");
    const options = {
      headers: {
        Authorization: `Bearer ${tokens}`
      },
      responseType: 'text' // replace with your actual response type
    };
    this.opp = options
  }
  gettoken() {
    const tokens = localStorage.getItem("jwttoken");
    //this.token = tokens;
    const headers = new HttpHeaders('token');

    //headers.append('Authorization', `Bearer ${this.token}`);
    //const sets = req.clone({ setHeaders: { Authorization: `Bearer ${this.token}` }});
    return headers;
  }



  getbook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.Url,)
  }
  getbookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.Url + '/' + id);
  }
  addbook(book: Book): Observable<any> {
    return this.http.post(this.Url, book, { responseType: 'text' })
  }
  Updatebook(book: Book): Observable<any> {
    return this.http.put(this.Url, book, { responseType: 'text' })
  }
  Deletebook(id: number): Observable<any> {
    return this.http.delete<any>(this.Url + '/' + id)
  }

}

 //   console.warn(   + "   ");

 // newbook : Book[] = [
  //   {"id" :9 ,"name":"Entity Framework","authore":"Microsoft","price":700},
  //   {"id" :10 ,"name":"Entity Core","authore":"Microsoft","price":800},
  // ]

  // hotcodeddata():Book[] {
  //   return [
  //     {"id" :9 ,"name":"Entity Framework","authore":"Microsoft","price":700},
  //   {"id" :10 ,"name":"Entity Core","authore":"Microsoft","price":800},
  //   ]
  // }