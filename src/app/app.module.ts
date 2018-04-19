import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import {CounterService} from './counter.service';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home' , component: HomeComponent},
  {path : 'servers' , component: ServersComponent},
  {path : 'map', component: MapComponent},
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaCppOknB4FnhGWotTSQFb6Fa7r0JlAJ4'
    })
    ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
