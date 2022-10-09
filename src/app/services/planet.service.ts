import { Injectable } from '@angular/core';
import {Planet} from "../models/Planet";
import {mockup} from "../data";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor() { }

  getAll():Planet[]{
    console.log(mockup);
    return mockup;
  }
  getPlanetByName(PlanetName:string):Planet{
    return this.getAll().find(planet => planet.name == PlanetName) ?? new Planet();
  }
}

