import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {

  @Input() movieGenres: Genre[] = new Array();
  private tmdbBaseUrl = 'http://image.tmdb.org/t/p/w185/';
  @Input() movie: Movie;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {}

  // use to get names of genres
  getGenres(ids: number[]): string {
    return ids.map(m => {
      return this.movieGenres.find(f => f.id === m).name;
    }).join(', ');
  }

}
