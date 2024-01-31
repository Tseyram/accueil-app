import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PhysicalEvent } from '../model/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private fb:FormBuilder, private eventService: EventsService,private router:Router){}

handleLeaveSearch() {
  this.searchFormGroup.reset();
this.router.navigateByUrl("/staraccount");
}
handleShow(_t152: any) {
throw new Error('Method not implemented.');
}
  eventsFound: PhysicalEvent[]=[];
  errorMessage: any;

handleSearch() {
  if (this.searchFormGroup.get('filtre')!.value==1 ){
    this.eventService.getFiltredEventsByDateAndType(this.eventService.attributeType(this.searchFormGroup.get('typeEvent')!.value),
    this.searchFormGroup.value.date).subscribe({
      next:(data:any)=>{this.eventsFound=data;},
      error:(err:any)=>{console.log(err);
        this.errorMessage=err.message;}
    });
  }else if(this.searchFormGroup.get('filtre')!.value==2){
    this.eventService.getFiltredEvents(this.eventService.attributeType(this.searchFormGroup.get('typeEvent')!.value),
    this.searchFormGroup.value.debut, this.searchFormGroup.value.fin).subscribe({
      next:(data:any)=>{this.eventsFound=data;},
      error:(err:any)=>{console.log(err);
        this.errorMessage=err.message;}
    });
  }else{this.eventService.filterByType(this.eventService.attributeType(this.searchFormGroup.get('typeEvent')!.value)).subscribe({
    next:(data:any)=>{this.eventsFound=data;},
    error:(err:any)=>{console.log(err);
    this.errorMessage=err.message;}
  });
if (this.searchFormGroup.get('filtre')!.value==3){this.eventsFound=this.eventsFound.filter(
  (event)=>event.conducteur.includes(this.searchFormGroup.value.conducteur))}
else if(this.searchFormGroup.get('filtre')!.value==4){this.eventsFound=this.eventsFound.filter(
  (event)=>event.conducteur.includes(this.searchFormGroup.value.titre))}
  else if(this.searchFormGroup.get('filtre')!.value==5){this.eventsFound=this.eventsFound.filter(
    (event)=>event.conducteur.includes(this.searchFormGroup.value.moderateur))}}


}
choice!:string;
searchFormGroup!: FormGroup;
ngOnInit(){
  this.searchFormGroup=this.fb.group({
    typeEvent:this.fb.control(null),
    filtre:this.fb.control(null),
    date:this.fb.control(null,[Validators.required]),
    debut:this.fb.control(null,[Validators.required]),
    fin:this.fb.control(null,[Validators.required]),
    conducteur:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    titre:this.fb.control("")


  });
}
}
