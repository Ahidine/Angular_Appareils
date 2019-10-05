import { Component, OnInit,OnDestroy } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit,OnDestroy {
  appareils:any[];
  appareilsSubscription :Subscription;

  isAuth=false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 10000
    );
  });
  allumer=false;

constructor( private appareilService : AppareilService){
	  setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
}
 ngOnInit()
 {
   this.appareilsSubscription=this.appareilService.AppareilSubject.subscribe(
     (appareils :any[])=>{
       this.appareils=appareils;
     }  
   );
   this.appareilService.emitAppareilSubject();
 }
onAllumer()
{
	this.appareilService.onAllumeTout();
}
onEteindre()
{
  this.appareilService.onEteindreTout();
}
ngOnDestroy()
{
  this.appareilsSubscription.unsubscribe();
}
onSave()
{
  this.appareilService.saveDataToServe();
}
onGet()
{
  this.appareilService.getDataFromServer();
}

}
