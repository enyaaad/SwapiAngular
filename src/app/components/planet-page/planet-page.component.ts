import { Component, OnInit } from '@angular/core';
import {Planet, ResidentName} from "../../models/Planet";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../services/planets/planet.service";

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.sass']
})

export class PlanetPageComponent implements OnInit {

  planet!:Planet;
  residentNames:ResidentName[] = [];

  constructor( activatedRoute:ActivatedRoute, private planetService:PlanetService ) {
   activatedRoute.params.subscribe((params)=>{
      if(params['name'])
        this.planet = planetService.getPlanetByName(params['name'])
    })
    this.planetService.ResidentList =[]
    this.getResidents();
  }

  getResidents():void{
    this.planet.residents?.forEach(resident=>{
      if(resident.link)
        this.planetService.getResident(resident);

    })

    this.residentNames = this.planetService.ResidentList;
    console.log(this.residentNames)
}

  ngOnInit(): void {
  }

}
