import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { EVENT_TYPE, EventHistory, EventsDTO, PhysicalEvent } from '../model/event.model';
import { USER_ROLE } from '../model/user.model';
import { EventsService } from './../services/events.service';

@Component({
  selector: 'app-staraccount',
  templateUrl: './staraccount.component.html',
  styleUrl: './staraccount.component.css'
})

export class StaraccountComponent {


closeShow() {
this.show=false;
}

handleShow(e:PhysicalEvent) {
this.show=true;
this.eventToShow=e;
}
type!:EVENT_TYPE;
filtredEvents!:EventsDTO[];
show:boolean=false;
eventToShow!:PhysicalEvent;




handleUpdate(_t38: any) {
throw new Error('Method not implemented.');
}
handleDeleteEvent(_t38: any) {
throw new Error('Method not implemented.');
}
handleSearchEvents() {
console.log('hi');
this.filtredEvents= this.eventsService.filterByType(EVENT_TYPE.CULTE, this.events);
this.isFiltred=true;
}
searchFormGroup!: FormGroup;
handleDeconnexion() {
  throw new Error('Method not implemented.');
}
  events!:EventHistory;
  original_events:any;
  errorMessage!:string;
  role!:USER_ROLE;
  currentPage:number=0;
  pageSize:number=3;
  choice:boolean=false;
  isFiltred:boolean=false;

  gotToPage(page: number) {
    this.currentPage=page;
    this.handleGetEvents();
    }
  constructor(private eventsService:EventsService, private fb: FormBuilder){}

  ngOnInit(): void {
this.searchFormGroup=this.fb.group({
  date:this.fb.control("1/1/2024")
  });
      this.eventsService.user.pipe(
        map((resultat:any) => {

          this.role = resultat?.role;

        })
      ).subscribe();

this.handleGetEvents();

  }

  handleGetEvents(){
    this.eventsService.getEventHistory(this.currentPage,this.pageSize).subscribe({
      next:(data: any)=>{
        this.events=data;

      },
      error:(err: any)=>{this.errorMessage=err.message;
    }
})
  }
}
