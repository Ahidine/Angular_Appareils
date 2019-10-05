import { Component, OnInit } from '@angular/core';
import { AppareilService} from '../service/appareil.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil-component',
  templateUrl: './single-appareil-component.component.html',
  styleUrls: ['./single-appareil-component.component.scss']
})
export class SingleAppareilComponentComponent implements OnInit {

  constructor(private appareilService :AppareilService,private activatedRoute : ActivatedRoute) { }
  name : string='Name';
  status : string='Stauts';

  ngOnInit() {
  	const id=this.activatedRoute.snapshot.params['id'];
  	this.name=this.appareilService.getAppareilById(+id).name;
  	this.status=this.appareilService.getAppareilById(+id).status;

  }

}
