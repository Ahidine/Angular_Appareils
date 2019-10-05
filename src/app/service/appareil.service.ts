import {Subject} from "rxjs/Subject";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService  {
  AppareilSubject = new Subject<any[]>();

	constructor(private httpClient :HttpClient){}
private appareils=[
  {
  	id:1,
  	name:'Machine á laver',
  	status: 'eteint'
  },
  {
  	id:2,
  	name:'Television',
  	status:'Allumer'
  },
  {
  	id:3,
  	name:'Radio',
  	status:'eteint'
  }
  ];
addAppareil(form){
  const AppObject ={
    name:form.value['name'],
    status:form.value['status'],
    id:this.appareils[this.appareils.length - 1].id+1,
  }
  this.appareils.push(AppObject);
  this.emitAppareilSubject();

}
emitAppareilSubject()
{
  this.AppareilSubject.next(this.appareils.slice());
}
 getAppareilById(id:number)
 {
 	const appareil=this.appareils.find(
 		(s)=>{
 			return s.id===id;
 		}	
 		)
 	return appareil;
 }
 onAllumeTout()
 {
 	for(let app of this.appareils)
 	{
 		app.status='Allumer';
 	}
   this.emitAppareilSubject();
 }
 onEteindreTout()
 {
 	for(let app of this.appareils)
 	{
 		app.status='eteint';
 	}
   this.emitAppareilSubject();
 }
 On(index: number)
 {
 	this.appareils[index].status='Allumer';
   this.emitAppareilSubject();
 }
  Off(index : number)
 {
 	this.appareils[index].status='eteint';
   this.emitAppareilSubject();
 }
 saveDataToServe()
 {
   this.httpClient.put('https://angular-oc-1bebe.firebaseio.com/appareils.json',this.appareils)
   .subscribe(
     () => {
       console.log('enregistrement bien fait')
     },
     (error) => {
       console.log('erreur : '+error)
     } 
     );

 }
 getDataFromServer()
 {
   this.httpClient.get<any[]>('https://angular-oc-1bebe.firebaseio.com/appareils.json')
        .subscribe(
          (response) => {
            this.appareils=response;
            this.emitAppareilSubject()
          },
          (error) => {
            console.log('erreur : '+error);
          } 
          );
 }

}