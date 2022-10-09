import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/Planet";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {

  planets:Planet[]=[];
  constructor(private planetService:PlanetService) {
    this.planets = planetService.getAll();
  }

  async ngOnInit() {
  }
}
