import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhysicalEvent } from '../model/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrl: './addupdate.component.css'
})
export class AddupdateComponent {
handleLeave() {
  this.route.navigateByUrl("/staraccount");
  this.addupdateFormGroup.reset();
}
handleCancel() {
  this.handleLeave();
}
type: any;

handleaddUpdate() {

 let event:PhysicalEvent=this.addupdateFormGroup.value;
  // event.type=

  if(this.addupdateFormGroup.get("typeEvent")!.value==1){
    this.addupdateFormGroup.value.typeEvent=this.eventService.attributeType(1);
this.eventService.saveCulte(event).subscribe({
  next: (data:any)=> {alert("Evenement proposé en ajout");
this.addupdateFormGroup.reset();
this.route.navigateByUrl("/staraccount");},
  error:(err:any)=> {console.log(err); }
});
  }
  else{
    this.addupdateFormGroup.value.typeEvent=this.eventService.attributeType(this.addupdateFormGroup.get("typeEvent")!.value);
    console.log(this.addupdateFormGroup.value.typeEvent)

this.eventService.savePhysicalEvent(event).subscribe({
  next: (data:any)=> {alert("Evenement proposé en ajout");
this.addupdateFormGroup.reset();
this.route.navigateByUrl("/staraccount");},
  error:(err:any)=> {console.log(err); }
});
  }
}
isCulte:boolean=false;
addupdateFormGroup!: FormGroup;
constructor(private fb:FormBuilder, private eventService:EventsService,private route:Router){}
ngOnInit(): void {
  this.addupdateFormGroup=this.fb.group({
    typeEvent:this.fb.control(null),
    date:this.fb.control(null,[Validators.required]),
    debut:this.fb.control(null,[Validators.required]),
    fin:this.fb.control(null,[Validators.required]),
    name:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    conducteur:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    titre:this.fb.control(""),
    hommes:this.fb.control(0,[Validators.required]),
    femmes:this.fb.control(0,[Validators.required]),
    enfants:this.fb.control(0,[Validators.required]),
    hommesIntercession:this.fb.control(0,[Validators.required]),
    femmesIntercession:this.fb.control(0,[Validators.required]),
    enfantsIntercession:this.fb.control(0,[Validators.required]),
    enfantsMIJ:this.fb.control(0,[Validators.required]),
    connexions:this.fb.control(0),
    moderatrice:this.fb.control(""),
    conducteurIntercession:this.fb.control("",[Validators.required]),
    nouveauxFemmes:this.fb.control(0,[Validators.required]),
    nouveauxHommes:this.fb.control(0,[Validators.required]),
    commentaire:this.fb.control("")

  })
}
}
