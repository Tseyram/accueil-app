import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StaraccountComponent } from './staraccount/staraccount.component';
import { CountComponent } from './count/count.component';
import { AddupdateComponent } from './addupdate/addupdate.component';
import { SearchComponent } from './search/search.component';
import { PlotComponent } from './plot/plot.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ModifyComponent } from './modify/modify.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfosComponent,
    HomeComponent,
    AboutComponent,
    ConnexionComponent,
    StaraccountComponent,
    CountComponent,
    AddupdateComponent,
    SearchComponent,
    PlotComponent,
    CalculateComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
