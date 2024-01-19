import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { USER_ROLE } from '../model/user.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
handleChoice(choice: string) {
throw new Error('Method not implemented.');
}
handleSave() {
throw new Error('Method not implemented.');
}
  countFormGroup!:FormGroup
decrementer() {
throw new Error('Method not implemented.');
}
incrementer() {
throw new Error('Method not implemented.');
}
  role : USER_ROLE | undefined;
  constructor(private eventService:EventsService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.countFormGroup=this.fb.group({
      value:this.fb.control(0)
    })
    this.eventService.user.pipe(
      map((resultat) => {

        this.role = resultat?.role;
      })
    ).subscribe();

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
