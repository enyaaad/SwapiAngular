import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor() {
  }
  async getFilmsCount():Promise<{count:number}>{
    let res = await axios.get('https://swapi.dev/api/films/')
    return {
      count: res.data.count
    }
  }
  async getFilmById(id: number):Promise<{title: string, opening_crawl: string, release_date: string}>{
    let res = await axios.get('https://swapi.dev/api/films/'+ id);

    return {
      title: res.data.title,
      opening_crawl: res.data.opening_crawl,
      release_date: res.data.release_date,
    };
  }
}
