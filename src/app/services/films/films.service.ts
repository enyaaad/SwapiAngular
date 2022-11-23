import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  FilmObject={};
  titleFilm: string ="";
  opening_crawlFilm: string ="";
  release_dateFilm: string ="";
  constructor() {
    console.log(this.FilmObject)
  }

  async getFilmById(id: number){
    let res = await axios.get('https://swapi.dev/api/films/'+ id);

    let newObj={
      title: res.data.title,
      opening_crawl: res.data.opening_crawl,
      release_date: res.data.release_date,
    }
    return Object.assign(this.FilmObject, newObj);
  }
}
