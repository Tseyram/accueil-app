import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Culte, PhysicalEvent } from '../model/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {
handleLeaveCalculate() {
this.calculateFormGroup.reset();
this.route.navigateByUrl("/staraccount");

}
handleReset() {
this.calculateFormGroup.reset();
this.calculate=false;
this.search=false;
}
eventsFound: PhysicalEvent[]=[];
  errorMessage: any;
search: boolean=false;
handleSearch() {
  this.search = true;
  if (this.calculateFormGroup.get('choix')!.value==1 ){
    this.typeEvenement=this.eventsService.attributeType(this.calculateFormGroup.get('eventType')!.value);
    this.eventsService.getFiltredEventsByDateAndType(this.eventsService.attributeType(this.calculateFormGroup.get('eventType')!.value),
    this.calculateFormGroup.value.date).subscribe({
      next:(data:any)=>{this.eventsFound=data;},
      error:(err:any)=>{console.log(err);
        this.errorMessage=err.message;}
    });
  }else if(this.calculateFormGroup.get('choix')!.value!=1){
    this.eventsService.attributeType(this.calculateFormGroup.get('eventType')!.value);
    this.eventsService.getFiltredEvents(this.eventsService.attributeType(this.calculateFormGroup.get('eventType')!.value),
    this.calculateFormGroup.value.debut, this.calculateFormGroup.value.fin).subscribe({
      next:(data:any)=>{this.eventsFound=data;},
      error:(err:any)=>{console.log(err);
        this.errorMessage=err.message;}
    });
  }else if(this.calculateFormGroup.get('eventType')!.value==undefined)
  {this.eventsService.filterByDateBetween(
  this.calculateFormGroup.get('debut')?.value,this.calculateFormGroup.get('fin')?.value).subscribe({
    next:(data:any)=>{this.eventsFound=data;},
    error:(err:any)=>{console.log(err);
    this.errorMessage=err.message;}
  });
}
}
events!:PhysicalEvent[];
typeDePersonne!: string;
typeEvenement!: string;
value!: number;
mean!: number;
sum!: number;
calculate:boolean=false;
handleCalculate() {
  this.calculate=true;
if(this.calculateFormGroup.get('choix')!.value==1 && this.eventsFound.length!=0){

  if(this.eventsFound.length==1){
    this.value=this.choiceOfAttribute(this.eventsFound[0])
  } else{
    console.log('cas spécial')
  }

}
else if (this.calculateFormGroup.get('choix')!.value==2 && this.eventsFound.length!=0){
this.mean=this.moyenne(this.eventsFound);
}
else if (this.calculateFormGroup.get('choix')!.value==3 && this.eventsFound.length!=0){
  this.mean=this.somme(this.eventsFound)
  }
}

choice!:string
calculateFormGroup!: FormGroup;

constructor(private fb:FormBuilder, private eventsService: EventsService
  ,private route:Router){}

ngOnInit(): void {
  this.calculateFormGroup=this.fb.group(
    {
      choix:this.fb.control(null),
      numberType:this.fb.control(null),
      eventType:this.fb.control(null),
      date:this.fb.control('01/01/2024'),
      debut:this.fb.control('01/01/2024'),
      fin:this.fb.control('01/01/2024'),

    }
  );
}
choiceOfAttribute(event: PhysicalEvent): number  {
  if(this.calculateFormGroup.get('numberType')!.value==1){
    this.typeDePersonne= "d'hommes";
    return event.nombreHommes;
  }else if(this.calculateFormGroup.get('numberType')!.value==2){
    this.typeDePersonne= "de femmes"
    return event.nombreFemmes;
  }else if(this.calculateFormGroup.get('numberType')!.value==3){
    this.typeDePersonne= "d'enfants"
    return event.nombreEnfants;
  }else if(this.calculateFormGroup.get('numberType')!.value==4){
    this.typeDePersonne= "de connexions"
    return event.connexions;
  }else if(this.calculateFormGroup.get('numberType')!.value==5){
    this.typeDePersonne= "d'hommes nouveaux"
    return (event as Culte).nouveauxHommes;
  }else if(this.calculateFormGroup.get('numberType')!.value==6){
    this.typeDePersonne= "de femmes"
    return (event as Culte).nouveauxFemmes;
  } else{
    return 0;
  }

}
somme(e:Array<PhysicalEvent>):number{
  let sum:number=0;
  for(let x of e){
    let value:number=this.choiceOfAttribute(x);
    sum+=value;
  }
  return sum;
}
moyenne(e:Array<PhysicalEvent>):number{
  return this.somme(e)/e.length;
}
}


