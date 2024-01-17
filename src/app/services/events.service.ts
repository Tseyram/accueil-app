import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userList } from '../model/fake.data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  user = new BehaviorSubject<User | undefined>(undefined); // A ne pas initialiser ici
  constructor(private http:HttpClient){}


  public getEvents(): Observable<any> {
    return this.http.get("http://localhost:8081/events")
}
public searchCustomers(keyword:string): Observable<any> {
  return this.http.get("http://localhost:8081/customers/search?keyword="+keyword)
}

public handleUserConnexion(username:string, password:string):User|null{
for(let user of userList){
  if(username==user.username && password==user.password){
    return user;
  }
}
return null;
}

}
