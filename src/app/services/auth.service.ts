import { Injectable, inject } from '@angular/core';
import { User } from '../model/user.model';
import { EventsService } from './events.service';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private eventService: EventsService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.eventService.user.value);
    if (this.eventService.user.value === undefined) {
      this.router.navigate(['/connexion']);
      return false;
    }
    return true;
  }
}

export const canActivateAuthGuard: CanActivateFn = (): boolean => {
  console.log('je suis dans canActivateAuthGuard');
  console.log(inject(PermissionsService).canActivate());
  return inject(PermissionsService).canActivate();
};
