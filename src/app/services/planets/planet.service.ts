import { Injectable } from '@angular/core';
import {isNextPrev, Planet, ResidentName} from "../../models/Planet";
import axios, {} from "axios";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor() {
  }

  PlanetList:Array<Planet> =[];

  getPlanetsAxios(page:number):Planet[]{
    if(page!=0){
      axios.get('https://swapi.dev/api/planets/?page='+page).then((res)=>{
        res.data.results.forEach((el: Planet) =>{
          let res = {
            name:el.name,
            residents:el.residents
          }
          this.PlanetList.push(res)
        })
      })
    }
    return this.PlanetList;
  }


 getPlanetByName(PlanetName:string):Planet{
    return this.getPlanetsAxios(1).find(planet => planet.name == PlanetName) ?? new Planet();
  }

  async getResident(resLink:any):Promise<{residentName:string}>{
    let res = await axios.get(resLink);
    return {
      residentName: res.data.name
    }
  }

  async isNext(page:number):Promise<{next:string,previous:string}>{
    let res = await axios.get('https://swapi.dev/api/planets/?page=' + page);
    return {
      next: res.data.next || null,
      previous: res.data.previous || null
    }
  }
}

