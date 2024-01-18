import { Component } from '@angular/core';
import { map } from 'rxjs';
import { USER_ROLE } from '../model/user.model';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  handleUserDeconnexion() {
    this.eventService.user.next(undefined);
    this.router.navigateByUrl('/');
  }
  role: USER_ROLE | undefined;
  constructor(private eventService: EventsService, private router: Router) {}
  ngOnInit(): void {
    this.eventService.user
      .pipe(
        map((resultat) => {
          this.role = resultat?.role;
        })
      )
      .subscribe();

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
