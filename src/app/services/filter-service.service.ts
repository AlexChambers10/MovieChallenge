import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { FilterStore } from '../models/filter-store';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private dataStore: FilterStore;
  // tslint:disable-next-line:variable-name
  private _genreFilters = new BehaviorSubject<number[]>([]);
  // tslint:disable-next-line:variable-name
  private _minimumRating = new BehaviorSubject<number>(0);

  public readonly genreFilters: Observable<number[]> = this._genreFilters.asObservable();

  public readonly minimumRating: Observable<number> = this._minimumRating.asObservable();

  // tslint:disable-next-line:variable-name
  private _filterStore: BehaviorSubject<{}>;
  filterStore: Observable<{}>;

  constructor() {
    this.dataStore = {
      genreFilters: [],
      ratingFilter: 0
    };
    this._filterStore = new BehaviorSubject({});
    this.filterStore = this._filterStore.asObservable();
  }

  public addGenreFilter(genre: number) {
    // this._genreFilters.push(genre);
    this.dataStore.genreFilters.push(genre);
    this._genreFilters.next(Object.assign({}, this.dataStore).genreFilters);
    this._filterStore.next(Object.assign({}, this.dataStore));
  }

  public removeGenreFilter(genre: number) {
    const index = this.dataStore.genreFilters.indexOf(genre, 0);
    this.dataStore.genreFilters.map(m => console.log(m));
    this.dataStore.genreFilters.splice(index, 1);
    this._genreFilters.next(Object.assign({}, this.dataStore).genreFilters);
    this._filterStore.next(Object.assign({}, this.dataStore));
  }

  public getGenreFilters() {
    return this._genreFilters;
  }

  public setMinimumRating(rating: number) {
    this.dataStore.ratingFilter = rating;
    this._minimumRating.next(Object.assign({}, this.dataStore).ratingFilter);
    this._filterStore.next(Object.assign({}, this.dataStore));
  }

  public getMinimumRating() {
    return this._minimumRating;
  }
}
