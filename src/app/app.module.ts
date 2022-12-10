import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ResidentsComponent } from './components/residents/residents.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './components/main-page/main-page.component';
import { PlanetPreviewComponent} from "./components/planet-preview/planet-preview.component";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {LoadingInterceptor} from "./interceptors/https/loading.interceptor";

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
    MainPageComponent,
    PlanetPreviewComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
