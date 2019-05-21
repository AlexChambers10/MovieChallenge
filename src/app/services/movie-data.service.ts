import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  private tmdbMovieUrl = 'https://api.themoviedb.org/3/movie/';
  private nowShowingUrl = 'now_playing';
  private tmdbApiKeyUrl = '?api_key=039d66f7e0bef8beb80e1441b23bd34f';
  private languageUrl = '&language=en-US';
  private sortUrl = '&sort_by=popularity.desc';

  private tmdbGenreUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  constructor(private http: HttpClient) { }

  public getMovieData() {
    const url = this.tmdbMovieUrl + this.nowShowingUrl + this.tmdbApiKeyUrl + this.languageUrl + this.sortUrl;
    return this.http.get<Movie[]>(url);
  }

  public getGenreData() {
    const genreUrl = this.tmdbGenreUrl + this.tmdbApiKeyUrl + this.languageUrl;
    return this.http.get<Genre[]>(genreUrl);
  }
}
