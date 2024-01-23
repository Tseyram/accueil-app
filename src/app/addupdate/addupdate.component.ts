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

handleaddUpdate() {

  let event:PhysicalEvent=this.addupdateFormGroup.value;

  if(this.isCulte==true){
this.eventService.saveCulte(event).subscribe({
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
    date:this.fb.control(null,[Validators.required]),
    debut:this.fb.control(null,[Validators.required]),
    fin:this.fb.control(null,[Validators.required]),
    nom:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    conducteur:this.fb.control("",[Validators.required,Validators.minLength(4)]),
    titre:this.fb.control(""),
    hommes:this.fb.control(0),
    femmes:this.fb.control(0),
    enfants:this.fb.control(0),
    hommesIntercession:this.fb.control(0),
    femmesIntercession:this.fb.control(0),
    enfantsIntercession:this.fb.control(0),
    mij:this.fb.control(0),
    connexions:this.fb.control(0),
    moderateur:this.fb.control(""),
    conducteurIntercession:this.fb.control(""),
    nouveauxF:this.fb.control(0),
    nouveauxH:this.fb.control(0),
    commentaire:this.fb.control("")

  })
}
}
