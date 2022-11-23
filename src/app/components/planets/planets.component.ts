import { Component, OnInit } from '@angular/core';
import {Planet, ResultsType} from "../../models/Planet";
import {PlanetService} from "../../services/planets/planet.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {

  planets:Planet[] = [];

  constructor(private planetService:PlanetService) {
  }
  async ngOnInit() {
    this.planets = this.planetService.getPlanetsAxios(1);
  }
}
