import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../Models/User.model';




@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
	usersForm :FormGroup;
  constructor(private formbuilder :FormBuilder,
  				private userService : UserService,
  				private router : Router) { }

  ngOnInit() {
  	this.initForm()
  }
  initForm()
  {
  	this.usersForm=this.formbuilder.group({
  		name:['',Validators.required],
  		lastName:['',Validators.required],
  		email: ['',[Validators.required,Validators.email]],
  		drinkPreference:['',Validators.required]
  	});
  }
  onSubmit()
  {
  	const formValue=this.usersForm.value;
  	console.log('values : '+formValue);
  	const user= new User(formValue['name'],
  						formValue['lastName'],
  						formValue['email'],
  						formValue['drinkPreference']);
  	this.userService.AddUser(user);
  	this.router.navigate(['/users']);
  }

}
