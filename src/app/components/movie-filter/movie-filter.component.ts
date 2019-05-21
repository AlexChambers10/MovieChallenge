import { Component, OnInit, Input } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { Genre } from 'src/app/models/genre';
import { FilterService } from 'src/app/services/filter-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.sass']
})
export class MovieFilterComponent implements OnInit {

  @Input() movieGenres: Genre[];
  private ratingOptions: number[] = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  // add and remove genre filter from filter service
  public updateGenres(event) {
    if (event.checked) {
      this.filterService.addGenreFilter(event.source.value);
    } else {
      this.filterService.removeGenreFilter(event.source.value);
    }
  }
  // update rating filter
  public updateMovieRating(event) {
    this.filterService.setMinimumRating(event.value);
  }

}
