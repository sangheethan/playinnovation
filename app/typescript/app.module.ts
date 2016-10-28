import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersComponent } from './players.component';
import { PlayerService } from './player.service';
import { DashboardComponent } from './dashboard.component'; 

import { AppRoutingModule } from './app-routing.module';

// We are using the routerModule forRoot method to configure the paths and its specific components.
// On line 26 I am using the redirectTo property to redirect the main page to the dashboard component.
// **MOCKS ALERT
// We're going to trick the HTTP client into fetching and saving data from a mock service, the in-memory web API.
@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent, PlayerDetailComponent, PlayersComponent ],
  providers: 	[ PlayerService ],
  bootstrap:	[ AppComponent ]  
})
export class AppModule { }