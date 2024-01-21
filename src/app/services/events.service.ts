import { EventHistory, EventsDTO } from './../model/event.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EVENT_TYPE, PhysicalEvent } from '../model/event.model';
import { userList } from '../model/fake.data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
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
public saveEvent(event:PhysicalEvent): Observable<PhysicalEvent> {
  return this.http.post<PhysicalEvent>("http://localhost:8081/events", event)
}

public handleUserConnexion(username:string, password:string):User|null{
for(let user of userList){
  if(username==user.username && password==user.password){
    return user;
  }
}
return null;
}
public filterByType(type:EVENT_TYPE,events:EventHistory):EventsDTO[]{
let filteredEvents:EventsDTO[]=[];
  for (let event of events.eventsDTOs){
if (event.name=='CULTE'){
  filteredEvents.push(event);
  console.log('culte');
}
return filteredEvents;
  }
return filteredEvents;
}
}
