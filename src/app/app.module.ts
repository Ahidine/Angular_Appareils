import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './service/appareil.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/authGuard.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { SingleAppareilComponentComponent } from './single-appareil-component/single-appareil-component.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http'
const appRoutes : Routes =[
{ path: 'appareils',canActivate:[AuthGuard] ,component: AppareilViewComponent},
{ path: 'auth',component: AuthComponent},
{ path: '',component: AppareilViewComponent},
{ path: 'appareils/:id',canActivate:[AuthGuard],component: SingleAppareilComponentComponent},
{ path: 'not-found',component: FourOhFourComponent},
{ path: 'edit',component: EditAppareilComponent},
{ path: 'users',component: UserListComponent},
{ path: 'addUser',component: NewUserComponent},
{ path: '**',redirectTo: 'not-found'},

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponentComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  AppareilService,
  AuthService,
  AuthGuard,
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
