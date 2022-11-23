import { Injectable } from '@angular/core';
import {Planet, ResidentName} from "../../models/Planet";
import axios, {} from "axios";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor() {
  }

  PlanetList:Array<Planet> =[];
  ResidentList:Array<ResidentName>=[];

  getPlanetsAxios(page:number):Planet[]{
    axios.get('https://swapi.dev/api/planets/?page='+page).then((res)=>{
      this.PlanetList = [];
      res.data.results.forEach((el: Planet) =>{
       this.PlanetList.push(el)
     })
    })
    return this.PlanetList;
  }


 getPlanetByName(PlanetName:string):Planet{
    return this.getPlanetsAxios(1).find(planet => planet.name == PlanetName) ?? new Planet();
  }

  getResident(resLink:any):ResidentName[]{
    axios.get(resLink).then((res)=>{
      console.log(res);
      this.ResidentList.push(res.data.name)
    })
    return this.ResidentList;
  }
}

