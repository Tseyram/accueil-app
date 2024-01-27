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
filterFormGroup!: FormGroup;
//annuler les filtres
handleCancelFilters() {
  this.filterFormGroup.reset();
this.isFiltred=false;
this.handleGetEvents();
}
attributeType(arg0: number) :EVENT_TYPE{
let typeList:EVENT_TYPE[]=[EVENT_TYPE.CULTE,EVENT_TYPE.TPA,EVENT_TYPE.MHI,EVENT_TYPE.MFI,
  EVENT_TYPE.MJI,EVENT_TYPE.CORPORATE,EVENT_TYPE.SEMINAIRE,EVENT_TYPE.BAPTEME,
  EVENT_TYPE.MCEP,EVENT_TYPE.MIJ,EVENT_TYPE.STAR,EVENT_TYPE.BIENVENUE,
  EVENT_TYPE.AUTRE];
  return typeList[arg0-1];
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
  let conf =confirm("Are you sure?")
  if (!conf) return;
this.eventsService.delete(e.id).subscribe({
// next: resp=>{let index=this.events.eventsDTOs.indexOf(e);
//     this.events.eventsDTOs=this.events.eventsDTOs.slice(index,1);
// },
  error:err=>{console.log(err);}
});
this.handleGetEvents();
}

//filtrer les évènements par type et par dates
handleSearchEvents() {

  console.log(this.filterFormGroup.get("typeEvent")!.value)
this.type=this.attributeType(this.filterFormGroup.get("typeEvent")!.value);
this.eventsService.getFiltredEvents(this.type,this.filterFormGroup.value.debut,this.filterFormGroup.value.fin)
.subscribe({
  next:(data: any)=>{this.events.eventsDTOs=data;
  this.events.totalPages=Math.ceil(this.events.eventsDTOs.length/this.events.pageSize)}
  ,error:(err)=>{if(this.type ==undefined){alert('veuillez définir le type')}
else if(this.filterFormGroup.value.debut ==undefined){alert('veuillez définir la date de debut')}
else if(this.filterFormGroup.value.fin ==undefined){alert('veuillez définir la date de fin')}}
});
// this.filtredEvents=this.events;
// console.log(this.filtredEvents.eventsDTOs[0].name);
// this.filtredEvents.eventsDTOs=this.events.eventsDTOs.filter((event)=>event.typeEvent=EVENT_TYPE.CORPORATE);
// this.filtredEvents.totalPages=Math.ceil(this.filtredEvents.eventsDTOs.length/this.filtredEvents.pageSize);
// console.log(this.filtredEvents.eventsDTOs[0].name);
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
this.filterFormGroup=this.fb.group({
  typeEvent:this.fb.control(null ),
  debut:this.fb.control("01/01/2024"),
  fin:this.fb.control("01/01/2024")
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
