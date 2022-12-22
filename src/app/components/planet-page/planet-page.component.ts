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
      if(params['name']){
        this.planet = planetService.getPlanetByName(params['name']);
        console.log('adasdfsafasf', this.planet);
      }
    })
  }

  getResidents():void{
    this.planet.residents?.forEach(resident=>{
      if(resident.link)
        this.planetService.getResident(resident).then((res)=>{
          let name = {
            name:res.residentName
          }
          this.residentNames.push(name)
        });
    })

}

  ngOnInit(): void {
    this.getResidents();
  }

}
