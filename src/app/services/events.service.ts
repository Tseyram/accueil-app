import { Culte, EventHistory, PhysicalEvent } from './../model/event.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { EVENT_TYPE } from '../model/event.model';
import { userList } from '../model/fake.data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  isDirect:boolean=false
  eventToModify!: PhysicalEvent
  sendEventToModify(e: PhysicalEvent, arg:boolean) {
    this.isDirect=arg;
    this.eventToModify=e;
  }
  getCulte(id: number): Observable<Culte> {
    return this.http.get<Culte>("http://localhost:8081/events/cultecomplet/"+id);
  }
  getFiltredEventsByDateAndType(type: EVENT_TYPE, date: any):Observable<Array<PhysicalEvent>> {
    if(date===undefined){
      return this.filterByType(type);
    }
      else if (type===undefined){
        return this.filterByDate(date);

      }else {return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/search2?date="+date+"&type="+type);}

  }
  getFiltredEvents(type: EVENT_TYPE, debut: any, fin: any):Observable<Array<PhysicalEvent>> {
    if(debut==undefined && fin==undefined){
      return this.filterByType(type);    }
      else if(type==undefined){
        return this.filterByDateBetween(debut,fin);
      }else {
    return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/search4?debut="+debut+"&fin="+fin+"&type="+type);}
  }
  savePhysicalEvent(event:any): Observable<any> {
    return this.http.post("http://localhost:8081/events", event)
  }

  delete(id:any) {
    return this.http.delete("http://localhost:8081/events/"+id);
  }
  choice!:string;
  sendChoice(choice: string):void {
    this.choice=choice;
  }
  saveCustomer(customer: any) {
    throw new Error('Method not implemented.');
  }
  user = new BehaviorSubject<User | undefined>(undefined); // A ne pas initialiser ici
  constructor(private http:HttpClient){}



  public getEvents(): Observable<any> {
    return this.http.get("http://localhost:8081/events")
}

public getEventHistory(page: number, size: number): Observable<EventHistory> {
  return this.http.get<EventHistory>("http://localhost:8081/events/history?page="+page+"&size="+size)
}
public saveCulte(event:any): Observable<any> {
  return this.http.post("http://localhost:8081/events/cultes", event)
}

public handleUserConnexion(username:string, password:string):User|null{
for(let user of userList){
  if(username==user.username && password==user.password){
    return user;
  }
}
return null;
}
public filterByType(typeEvent:EVENT_TYPE):Observable<Array<PhysicalEvent>>{
  return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/"+typeEvent);
}
public filterByDate(date:any):Observable<Array<PhysicalEvent>>{
  return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/search1?date="+date);
}

public filterByDateBetween(debut:any,fin:any):Observable<Array<PhysicalEvent>>{
  return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/search3?debut="+debut+"&fin="+fin);
}
typeList:EVENT_TYPE[]=[EVENT_TYPE.CULTE,EVENT_TYPE.TPA,EVENT_TYPE.MHI,EVENT_TYPE.MFI,
  EVENT_TYPE.MJI,EVENT_TYPE.CORPORATE,EVENT_TYPE.SEMINAIRE,EVENT_TYPE.BAPTEME,
  EVENT_TYPE.MCEP,EVENT_TYPE.MIJ,EVENT_TYPE.STAR,EVENT_TYPE.BIENVENUE,
  EVENT_TYPE.AUTRE];
attributeType(arg0: number) :EVENT_TYPE{

    return this.typeList[arg0-1];
  }

  displayEventTomodify(e: PhysicalEvent, modifyFormGroup:FormGroup):Array<boolean>{
    console.log(e)


  if (e.typeEvent==EVENT_TYPE.CULTE){
    this.getCulte(e.id).subscribe({
      next:(data:Culte)=>{e=data},
      error:err=>{console.log(err)}
    });

    modifyFormGroup.value.name=e.name;
    modifyFormGroup.value.conducteur=e.conducteur;
    modifyFormGroup.value.date=e.date;
    modifyFormGroup.value.debut=e.debut;
    modifyFormGroup.value.fin=e.fin;
    modifyFormGroup.value.hommes=e.nombreHommes;
    modifyFormGroup.value.femmes=e.nombreFemmes;
    modifyFormGroup.value.enfants=e.nombreEnfants
    modifyFormGroup.value.connexions=e.connexions;
    modifyFormGroup.value.titre=e.titre;
    modifyFormGroup.value.hommesIntercession=(e as Culte).hommesIntercession;
    modifyFormGroup.value.femmesIntercession=(e as Culte).femmesIntercession;
    modifyFormGroup.value.enfantsIntercession=(e  as Culte).enfantsIntercession;
    modifyFormGroup.value.conducteurIntercession=(e as Culte).conducteurIntercession;
    modifyFormGroup.value.enfantsMIJ=(e as Culte).enfantsMIJ;
    modifyFormGroup.value.moderatrice=(e as Culte).moderatrice;
    modifyFormGroup.value.nouveauxHommes=(e as Culte).nouveauxHommes;
    modifyFormGroup.value.nouveauxFemmes=(e as Culte).nouveauxFemmes;
  return([true, true, true]);
  }else{

    modifyFormGroup.value.name=e.name;
    modifyFormGroup.value.conducteur=e.conducteur;
    modifyFormGroup.value.date=e.date;
    modifyFormGroup.value.debut=e.debut;
    modifyFormGroup.value.fin=e.fin;
    modifyFormGroup.value.hommes=e.nombreHommes;
    modifyFormGroup.value.femmes=e.nombreFemmes;
    modifyFormGroup.value.enfants=e.nombreEnfants
    modifyFormGroup.value.connexions=e.connexions;
    modifyFormGroup.value.titre=e.titre;
    return([true, true, false]);
  }


  }
  }

