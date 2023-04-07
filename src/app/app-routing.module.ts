import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Components/Book/addbook/addbook.component';
import { BooklistComponent } from './Components/Book/booklist/booklist.component';
import { EditbookComponent } from './Components/Book/editbook/editbook.component';
import { SignInComponent } from './Components/User/sign-in/sign-in.component';
import { SignUpComponent } from './Components/User/sign-up/sign-up.component';
import { AuthguardGuard } from './Components/Guard/authguard.guard';
import { HomeComponent } from './Components/home/home.component';
import { userguardGuard } from './Components/Guard/userguard.guard';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "book", component: BooklistComponent, canActivate: [AuthguardGuard] },
  { path: "book/add", component: AddbookComponent, canActivate: [AuthguardGuard] },
  { path: "book/edit/:b.id", component: EditbookComponent, canActivate: [AuthguardGuard] }, //Working
  { path: "book/edit", component: EditbookComponent, canActivate: [AuthguardGuard] }, //Working only for checking purpose
  { path: "user/signup", component: SignUpComponent, canActivate: [userguardGuard] },
  { path: "user/signin", component: SignInComponent, canActivate: [userguardGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
