import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EVENT_TYPE, PhysicalEvent } from '../model/event.model';
import { EventsService } from '../services/events.service';
import { Culte } from './../model/event.model';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent {
handleLeaveModify() {
  this.modifyFormGroup.reset();
  this.route.navigateByUrl("/staraccount");
}
handleCancelModify() {
this.enableModification=false;
this.isDirect=false;
this.initSearchFomrGroup();
}
  enableModification: boolean=false;
searchFormGroup!: FormGroup;
  eventToModify!: PhysicalEvent;
isDirect: boolean=false;
handleDeleteEvent(e: PhysicalEvent) {
  let conf =confirm("Are you sure?")
  if (!conf) return;
this.eventsService.delete(e.id).subscribe({

  error:err=>{console.log(err);}
});
}
displayEventTomodify(e: PhysicalEvent):FormGroup{
  console.log(e)
  this.enableModification=true;
if (e.typeEvent==EVENT_TYPE.CULTE){
  this.eventsService.getCulte(e.id).subscribe({
    next:(data:Culte)=>{e=data},
    error:err=>{console.log(err)}
  });
  this.isCulte=true;
  this.modifyFormGroup.get("typeEvent")!.setValue(1);
  this.modifyFormGroup.controls['name'].setValue(e.name);
  this.modifyFormGroup.controls['conducteur'].setValue(e.conducteur);
  this.modifyFormGroup.controls['date'].setValue(e.date);
  this.modifyFormGroup.controls['debut'].setValue(e.debut);
  this.modifyFormGroup.controls['fin'].setValue(e.fin);
  this.modifyFormGroup.controls['hommes'].setValue(e.nombreHommes);
  this.modifyFormGroup.controls['femmes'].setValue(e.nombreFemmes);
  this.modifyFormGroup.controls['enfants'].setValue(e.nombreEnfants);
  this.modifyFormGroup.controls['connexions'].setValue(e.connexions);
  this.modifyFormGroup.controls['titre'].setValue(e.titre);
  this.modifyFormGroup.controls['hommesIntercession'].setValue((e as Culte).hommesIntercession);
  this.modifyFormGroup.controls['femmesIntercession'].setValue((e as Culte).femmesIntercession);
  this.modifyFormGroup.controls['enfantsIntercession'].setValue((e  as Culte).enfantsIntercession);
  this.modifyFormGroup.controls['conducteurIntercession'].setValue((e as Culte).conducteurIntercession);
  this.modifyFormGroup.controls['enfantsMIJ'].setValue((e as Culte).enfantsMIJ);
  this.modifyFormGroup.controls['moderatrice'].setValue((e as Culte).moderatrice);
  this.modifyFormGroup.controls['nouveauxHommes'].setValue((e as Culte).nouveauxHommes);
  this.modifyFormGroup.controls['.nouveauxFemmes'].setValue((e as Culte).nouveauxFemmes);

}else{
this.modifyFormGroup.controls['typeEvent'].setValue(this.eventsService.typeList.indexOf(e.typeEvent)+1);
  this.modifyFormGroup.controls['name'].setValue(e.name);
  this.modifyFormGroup.controls['conducteur'].setValue(e.conducteur);
  this.modifyFormGroup.controls['date'].setValue(e.date);
  this.modifyFormGroup.controls['debut'].setValue(e.debut);
  this.modifyFormGroup.controls['fin'].setValue(e.fin);
  this.modifyFormGroup.controls['hommes'].setValue(e.nombreHommes);
  this.modifyFormGroup.controls['femmes'].setValue(e.nombreFemmes);
  this.modifyFormGroup.controls['enfants'].setValue(e.nombreEnfants);
  this.modifyFormGroup.controls['connexions'].setValue(e.connexions);
  this.modifyFormGroup.controls['titre'].setValue(e.titre);

}
return this.modifyFormGroup;

}
type: any;
  events: PhysicalEvent[]=[];
  search: boolean=false;
handleSearch() {

  this.type=this.eventsService.attributeType(this.searchFormGroup.get("typeEvent")!.value);
  this.eventsService.getFiltredEventsByDateAndType(this.type,this.searchFormGroup.value.date)
  .subscribe({
    next:(data: any)=>{this.events=data;}
    ,error:(err)=>{if(this.type ==undefined){alert('veuillez définir le type')}
  else if(this.searchFormGroup.value.date ==undefined){alert('veuillez définir la date')}

  }});
  this.search=true;
}
handleModify() {
  let event:PhysicalEvent=this.modifyFormGroup.value;
  // event.type=

  if(this.modifyFormGroup.get("typeEvent")!.value==1){
    this.modifyFormGroup.value.typeEvent=this.eventsService.attributeType(1);
this.eventsService.saveCulte(event).subscribe({
  next: (data:any)=> {alert("Evenement proposé en ajout");
this.modifyFormGroup.reset();
this.route.navigateByUrl("/staraccount");},
  error:(err:any)=> {console.log(err); }
});
  }
  else{
    this.modifyFormGroup.value.typeEvent=this.eventsService.attributeType(this.modifyFormGroup.get("typeEvent")!.value);
    console.log(this.modifyFormGroup.value.typeEvent)

this.eventsService.savePhysicalEvent(event).subscribe({
  next: (data:any)=> {alert("Evenement proposé en modification");
this.modifyFormGroup.reset();
this.route.navigateByUrl("/staraccount");},
  error:(err:any)=> {console.log(err); }
});
  }
}
modifyFormGroup!: FormGroup;
isCulte:boolean=false;
constructor(private fb:FormBuilder, private eventsService: EventsService, private route:Router){}

ngOnInit(): void {
  if(this.eventsService.isDirect){
    this.isDirect=true;
    this.initModifyFormGroup()
    this.displayEventTomodify(this.eventsService.eventToModify);
  }
else{
  this.initSearchFomrGroup()
this.initModifyFormGroup()
}


}
initSearchFomrGroup(){
  this.searchFormGroup=this.fb.group({
    date:this.fb.control('01/01/2024'),
    typeEvent:this.fb.control(null)
  });
}
initModifyFormGroup(){
  this.modifyFormGroup=this.fb.group({
    typeEvent:this.fb.control(null),
    name:this.fb.control(null),
    conducteur:this.fb.control(null),
    date:this.fb.control(null),
    debut:this.fb.control(null),
    fin:this.fb.control(null),
    hommes:this.fb.control(null),
    femmes:this.fb.control(null),
    enfants:this.fb.control(null),
    connexions:this.fb.control(null),
    titre:this.fb.control(null),
    hommesIntercession:this.fb.control(null),
    femmesIntercession:this.fb.control(null),
    enfantsIntercession:this.fb.control(null),
    conducteurIntercession:this.fb.control(null),
    enfantsMIJ:this.fb.control(null),
    moderatrice:this.fb.control(null),
    nouveauxHommes:this.fb.control(null),
    nouveauxFemmes:this.fb.control(null),
    commentaire:this.fb.control("")
  })
}

}
