import { EventHistory, PhysicalEvent } from './../model/event.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EVENT_TYPE } from '../model/event.model';
import { userList } from '../model/fake.data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getFiltredEvents(type: EVENT_TYPE, debut: any, fin: any):Observable<Array<PhysicalEvent>> {
    return this.http.get<Array<PhysicalEvent>>("http://localhost:8081/events/search4?debut="+debut+"&fin="+fin+"&type="+type)
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

  }

