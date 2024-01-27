import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EVENT_TYPE, PhysicalEvent } from '../model/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrl: './addupdate.component.css'
})
export class AddupdateComponent {
handleCancel() {
  this.route.navigateByUrl("/staraccount");
}
type: any;
attributeType(arg0: number):EVENT_TYPE  {
  let typeList:EVENT_TYPE[]=[EVENT_TYPE.CULTE,EVENT_TYPE.TPA,EVENT_TYPE.MHI,EVENT_TYPE.MFI,
    EVENT_TYPE.MJI,EVENT_TYPE.CORPORATE,EVENT_TYPE.SEMINAIRE,EVENT_TYPE.BAPTEME,
    EVENT_TYPE.MCEP,EVENT_TYPE.MIJ,EVENT_TYPE.STAR,EVENT_TYPE.BIENVENUE,
    EVENT_TYPE.AUTRE];
    console.log('attribution')
    return typeList[arg0-1];

  }
handleaddUpdate() {

 let event:PhysicalEvent=this.addupdateFormGroup.value;
  // event.type=

  if(this.addupdateFormGroup.get("typeEvent")!.value==1){
    this.addupdateFormGroup.value.typeEvent=this.attributeType(1);
this.eventService.saveCulte(event).subscribe({
  next: (data:any)=> {alert("Evenement proposé en ajout");
this.addupdateFormGroup.reset();
this.route.navigateByUrl("/staraccount");},
  error:(err:any)=> {console.log(err); }
});
  }
  else{
    this.addupdateFormGroup.value.typeEvent=this.attributeType(this.addupdateFormGroup.get("typeEvent")!.value);
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
    mij:this.fb.control(0,[Validators.required]),
    connexions:this.fb.control(0),
    moderateur:this.fb.control(""),
    conducteurIntercession:this.fb.control("",[Validators.required]),
    nouveauxF:this.fb.control(0,[Validators.required]),
    nouveauxH:this.fb.control(0,[Validators.required]),
    commentaire:this.fb.control("")

  })
}
}
