import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppareilService} from '../service/appareil.service' ;
import {Router} from '@angular/router';



@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
off: string ='eteint';
  constructor(private appareilService :AppareilService , private Router :Router) { }

  ngOnInit() {
  }
  onSubmit(form :NgForm)
  {
  	this.appareilService.addAppareil(form);
  	this.Router.navigate(['appareils']);
  }

}
