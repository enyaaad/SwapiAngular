import {Component, Input, OnInit, Output} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";

@Component({
  selector: 'app-planet-preview',
  templateUrl: './planet-preview.component.html',
  styleUrls: ['./planet-preview.component.sass']
})
export class PlanetPreviewComponent implements OnInit {
  @Input() episodeId = 1;
  @Output() epId = this.episodeId;
  FilmObj = this.filmService.FilmObject;

  FilmTitle: string ="";
  OpCrawl: string ="";
  ReleaseDate: string ="";

  constructor(private filmService: FilmsService) {

  console.log("asdasdasdasdasdasd"+ this.FilmObj);
  }

  ngOnInit(): void {
  }

}
