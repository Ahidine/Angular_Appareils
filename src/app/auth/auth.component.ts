import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
authStatus : boolean;
  constructor(private authService: AuthService,private router : Router) {
   }

  ngOnInit() {
  	this.authStatus=this.authService.isAuth;
  }
  onSeConnecte()
  {
  	console.log('here !!');
  	this.authService.Connecter().then(
  	 ()=>{
  	 	console.log('connecter !!');
  	 	this.authStatus=this.authService.isAuth;
  	 	this.router.navigate(['appareils']);
  	 }	);
  }
  onSeDeconnecte()
  {
  	this.authService.deconnecter();
  	this.authStatus=this.authService.isAuth;
  }

}
