import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { USER_ROLE } from '../model/user.model';
import { EventsService } from './../services/events.service';

@Component({
  selector: 'app-staraccount',
  templateUrl: './staraccount.component.html',
  styleUrl: './staraccount.component.css'
})

export class StaraccountComponent {
handleUpdate(_t38: any) {
throw new Error('Method not implemented.');
}
handleDeleteEvent(_t38: any) {
throw new Error('Method not implemented.');
}
handleSearchEvents() {
throw new Error('Method not implemented.');
}
searchFormGroup!: FormGroup;
handleDeconnexion() {
  throw new Error('Method not implemented.');
}
  events:any;
  errorMessage!:string;
  role!:USER_ROLE;



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

        this.eventsService.getEvents().subscribe({
      next:(data: any)=>{
        this.events=data;
      },
      error:(err: any)=>{this.errorMessage=err.message;
    }
})
  }
}
