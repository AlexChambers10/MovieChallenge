import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { Genre } from 'src/app/models/genre';
import { FilterService } from 'src/app/services/filter-service.service';
import { Observable } from 'rxjs';
import { FilterStore } from 'src/app/models/filter-store';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  private movieData: Movie[];
  private movieGenres: Genre[];
  private filteredMovieData: Movie [];

  constructor(private movieDataService: MovieDataService, private filterService: FilterService) { }

  ngOnInit() {
    // get all movie data
    this.movieDataService.getMovieData()
      .subscribe((data: any) => {
        this.movieData = data.results;
        this.filteredMovieData = this.movieData;
      });
      // get all ganre data
      // tslint:disable-next-line:align
      this.movieDataService.getGenreData()
      .subscribe((data: any) => {
        this.movieGenres = data.genres;
      });
    // subscribe to filter store
    // if any are set then apply necessary filters to movie data
    this.filterService.filterStore.subscribe((filters: FilterStore) => {
        // check to see if movie data is defined. The sibscription runs before aata is retrieved
        if (this.movieData !== undefined) {
          const filtersArray = filters.genreFilters.map(m => +m);
          // check to see if there are filters of any kind set
          if (filters.genreFilters.length > 0 && filters.ratingFilter !== 0) {
            if (filtersArray.length > 0) {
              this.filteredMovieData = this.movieData.filter(m => {
                if (filtersArray.every(s => m.genre_ids.includes(s))) {
                  return m;
                }
              });

              if (this.filteredMovieData !== undefined) {
                this.filteredMovieData = this.filteredMovieData.filter(m => {
                  if (m.vote_average >= filters.ratingFilter) {
                    return m;
                  }
                });
              }
            }
          } else if (filters.genreFilters.length > 0) {
            if (filtersArray.length > 0) {
              this.filteredMovieData = this.movieData.filter(m => {
                if (filtersArray.every(s => m.genre_ids.includes(s))) {
                  return m;
                }
              });
            }
          } else if (filters.ratingFilter !== 0) {
            this.filteredMovieData = this.movieData.filter(m => {
              if (m.vote_average >= filters.ratingFilter) {
                return m;
              }
            });
          } else {
            this.filteredMovieData = this.movieData;
          }
        }
      });
  }
}
