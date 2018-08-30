import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './shared_service/user.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'createuser', component: UserFormComponent },
  { path: 'allusers', component: ListuserComponent },
  { path: 'login', component: LoginPageComponent },
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ListuserComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
