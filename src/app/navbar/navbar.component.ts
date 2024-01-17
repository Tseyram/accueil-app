import { Component } from '@angular/core';
import { map } from 'rxjs';
import { USER_ROLE } from '../model/user.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  role : USER_ROLE | undefined;
  constructor(private eventService:EventsService){}
  ngOnInit(): void {
    this.eventService.user.pipe(
      map((resultat) => {

        this.role = resultat?.role;
      })
    ).subscribe();

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
