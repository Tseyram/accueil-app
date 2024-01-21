import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AddupdateComponent } from './addupdate/addupdate.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CountComponent } from './count/count.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ModifyComponent } from './modify/modify.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlotComponent } from './plot/plot.component';
import { SearchComponent } from './search/search.component';
import { StaraccountComponent } from './staraccount/staraccount.component';

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
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'},
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {constructor(){registerLocaleData(fr.default);} }
