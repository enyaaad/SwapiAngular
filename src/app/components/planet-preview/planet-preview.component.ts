import {Component, Input, OnInit, Output} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";

@Component({
  selector: 'app-planet-preview',
  templateUrl: './planet-preview.component.html',
  styleUrls: ['./planet-preview.component.sass']
})
export class PlanetPreviewComponent implements OnInit {
  @Input() episodeId!: number;
  FilmTitle: string ="";
  OpCrawl: string ="";
  ReleaseDate: string ="";

  constructor(private filmService: FilmsService) {
  }

  ngOnInit(): void {
    console.log(this.episodeId);
    this.filmService.getFilmById(this.episodeId).then(response=>{
        this.FilmTitle = response.title
        this.OpCrawl = response.opening_crawl
        this.ReleaseDate = response.release_date
      }
    );
  }

}
