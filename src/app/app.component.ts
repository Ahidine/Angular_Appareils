import { Component,OnInit,OnDestroy } from '@angular/core';
import { AppareilService } from './service/appareil.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/Observable/interval';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
	title = 'mon-projet';
	secondes : number ;
	counterSubscription : Subscription;

	ngOnInit() {
		const counter= Observable.interval(1000);

		this.counterSubscription=counter.subscribe(
			(value)=>{
				this.secondes=value;
			},
			(error)=>{
				console.log('erreur : '+error);
			},
			()=>{
				console.log('l observateur a termine ');
			}	);
	}
	ngOnDestroy()
	{
		this.counterSubscription.unsubscribe();
	}



}
