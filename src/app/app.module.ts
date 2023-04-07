import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './Components/Book/addbook/addbook.component';
import { EditbookComponent } from './Components/Book/editbook/editbook.component';
import { BooklistComponent } from './Components/Book/booklist/booklist.component';
import { BookServiceService } from './Components/Book/Service/book-service.service';
import { SignUpComponent } from './Components/User/sign-up/sign-up.component';
import { SignInComponent } from './Components/User/sign-in/sign-in.component';
import { AuthInterceptor } from './Components/tokenInjector/auth.interceptor';
import { HttpErrorHandler } from './Components/HttpErrorHandler';
import { HomeComponent } from './Components/home/home.component';
import { DelayRouteService } from './Components/Delayserviec';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    EditbookComponent,
    BooklistComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [BookServiceService, HttpErrorHandler,DelayRouteService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: HttpErrorHandler }],

  bootstrap: [AppComponent]
})
export class AppModule { }
