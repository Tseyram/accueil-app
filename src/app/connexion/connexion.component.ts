import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
handleConnexion() {
  let username:string=this.connexionFormGroup.value.username.trim();
  let mdp:string=this.connexionFormGroup.value.mdp.trim();
  let user:User|null=this.eventService.handleUserConnexion(username,mdp);


  if (user){
    this.eventService.user.next(user);
    this.router.navigateByUrl("/staraccount");
  }

}
  connexionFormGroup!:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private eventService:EventsService){}
  ngOnInit(): void {
    this.connexionFormGroup=this.fb.group({
      username:this.fb.control(""),
      mdp:this.fb.control("")
  });
  }


}
