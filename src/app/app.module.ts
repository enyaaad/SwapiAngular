import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { ResidentsComponent } from './residents/residents.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes =[
  {path:'planets',component: PlanetsComponent},
  {path:'residents',component: ResidentsComponent},
  {path: '',   redirectTo: '/planets', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ResidentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
