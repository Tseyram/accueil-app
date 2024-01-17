import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StaraccountComponent } from './staraccount/staraccount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfosComponent,
    HomeComponent,
    AboutComponent,
    ConnexionComponent,
    StaraccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
