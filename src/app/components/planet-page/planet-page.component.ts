import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/Planet";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.sass']
})
export class PlanetPageComponent implements OnInit {
  planet!:Planet;
  constructor(activatedRoute:ActivatedRoute,planetService:PlanetService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['name'])
        this.planet = planetService.getPlanetByName(params['name'])
    })
  }

  ngOnInit(): void {
  }

}
