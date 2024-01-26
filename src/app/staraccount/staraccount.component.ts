import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { EVENT_TYPE, PhysicalEvent } from '../model/event.model';
import { USER_ROLE } from '../model/user.model';
import { EventHistory } from './../model/event.model';
import { EventsService } from './../services/events.service';

@Component({
  selector: 'app-staraccount',
  templateUrl: './staraccount.component.html',
  styleUrl: './staraccount.component.css'
})

export class StaraccountComponent {
attributeType(arg0: number) {
let typeList:EVENT_TYPE[]=[EVENT_TYPE.CULTE,EVENT_TYPE.TPA,EVENT_TYPE.MHI,EVENT_TYPE.MFI,
  EVENT_TYPE.MJI,EVENT_TYPE.CORPORATE,EVENT_TYPE.SEMINAIRE,EVENT_TYPE.BAPTEME,
  EVENT_TYPE.MCEP,EVENT_TYPE.MIJ,EVENT_TYPE.STAR,EVENT_TYPE.BIENVENUE,
  EVENT_TYPE.AUTRE];
  this.type=typeList[arg0-1];
  console.log('attribution',this.type)
}


closeShow() {
this.show=false;
}

handleShow(e:PhysicalEvent) {
this.show=true;
this.eventToShow=e;
}
type!:EVENT_TYPE;
filtredEvents!:EventHistory;
show:boolean=false;
eventToShow!:PhysicalEvent;




handleUpdate(_t38: any) {
throw new Error('Method not implemented.');
}
handleDeleteEvent(e: PhysicalEvent) {
  // console.log(this.events.eventsDTOs.length);
  // this.events.eventsDTOs=this.events.eventsDTOs.slice(this.events.eventsDTOs.indexOf(e),1);
  // console.log(this.events.eventsDTOs.length);
  // this.events.totalPages=Math.ceil(this.events.eventsDTOs.length/this.events.pageSize);
  // console.log(this.events.totalPages);
//   let conf =confirm("Are you sure?")
//   if (!conf) return;
// this.eventsService.delete(e.id).subscribe({
//   next: resp=>{this.events.eventsDTOs=this.events.eventsDTOs.pipe(map(
//     (data:EventHistory)=> {let index=data.eventsDTOs.indexOf(e);
//       data.eventsDTOs=data.eventsDTOs.slice(index,1)
//       return data;

//     })

//   );},
//   error:err=>{console.log(err);}
// })
}
handleSearchEvents() {
console.log('hi');
this.type=EVENT_TYPE.CULTE;
console.log(this.events.eventsDTOs[0].name);
this.filtredEvents=this.events;
console.log(this.filtredEvents.eventsDTOs[0].name);
this.filtredEvents.eventsDTOs=this.events.eventsDTOs.filter((event)=>event.name="AUTRE");
this.filtredEvents.totalPages=Math.ceil(this.filtredEvents.eventsDTOs.length/this.filtredEvents.pageSize);
console.log(this.filtredEvents.eventsDTOs[0].name);
// this.eventsService.filterByType(this.type).subscribe({
//   next:(data:any)=>{this.filtredEvents=data;},
//   error:(err:any)=>{(console.log(err))}
// });
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
