import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ResidentsComponent } from './components/residents/residents.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';
import { HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './components/main-page/main-page.component';

const appRoutes: Routes =[
  {path:'swapi',component: MainPageComponent},
  {path:'planets',component: PlanetsComponent},
  {path:'residents',component: ResidentsComponent},
  {path:'planets/:name',component:PlanetPageComponent},
  {path: '',   redirectTo: '/swapi', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ResidentsComponent,
    PageNotFoundComponent,
    PlanetPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
