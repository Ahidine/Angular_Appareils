import { Component, OnInit,OnDestroy } from '@angular/core';
import {User} from '../Models/User.model';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,OnDestroy {
users : User[];
userSubscription : Subscription;

  constructor(private userService : UserService) { }

  ngOnInit() {
  	this.userSubscription= this.userService.UserSubject.subscribe(
  	 (users : User[]) => {
  	 	this.users=users;
  	 }	
  	 );
  	this.userService.emitUsers();
  	//this.userService.AddUser(new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']));
  }
ngOnDestroy()
{
	this.userSubscription.unsubscribe();
}
}
