import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CountComponent } from './count/count.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { StaraccountComponent } from './staraccount/staraccount.component';

const routes: Routes = [
  {path:"infos", component:InfosComponent},
  {path:"about", component:AboutComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"staraccount", component:StaraccountComponent},
  {path:"count",component:CountComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
