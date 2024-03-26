import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { EventsService } from '../services/events.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  formLogin :FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService,private  router:Router) {
    this.formLogin=this.fb.group({username:this.fb.control(""),
      password:this.fb.control("")}
    )

  }

  handleLogin() {
    this.authService.login(this.formLogin.value.username,this.formLogin.value.password).subscribe(
      {
        next: data =>{

          this.authService.loadProfile(data);
          this.router.navigateByUrl("/staraccount");},
        error: err=>{console.log(err)}
      }
    )
  }






}
