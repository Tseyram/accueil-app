import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InfosComponent } from './infos/infos.component';

const routes: Routes = [
  {path:"infos", component:InfosComponent},
  {path:"about", component:AboutComponent},
  {path:"connexion", component:ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
