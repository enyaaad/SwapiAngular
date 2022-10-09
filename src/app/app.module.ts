import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ResidentsComponent } from './components/residents/residents.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';

const appRoutes: Routes =[

  {path:'planets',component: PlanetsComponent},
  {path:'residents',component: ResidentsComponent},
  {path:'planets/:name',component:PlanetPageComponent},
  {path: '',   redirectTo: '/planets', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ResidentsComponent,
    PageNotFoundComponent,
    PlanetPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
