import {Component, OnInit} from '@angular/core';
import {Planet} from "../../models/Planet";
import {PlanetService} from "../../services/planets/planet.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {

  planets:Planet[] = [];
  private page:number = 1;
  constructor(private planetService:PlanetService) {

  }
   ngOnInit(): void{
    this.planetService.PlanetList = [];
    this.planets = this.planetService.getPlanetsAxios(this.page)
  }

  nextPlanetPage(): void{
    this.planetService.isNext(this.page).then(res=>{
      if(res.next != null){
        this.page++;
        this.planetService.PlanetList = [];
        this.planets = this.planetService.getPlanetsAxios(this.page)
      }
      else{
        this.page --;
      }
    })

  }
  prevPlanetPage(): void{
    this.planetService.isNext(this.page).then(res=>{
      if(res.previous != null){
        this.page--;
        this.planetService.PlanetList = [];
        this.planets = this.planetService.getPlanetsAxios(this.page)
      }
      else{
        this.page ++;
      }
    })
  }
}
