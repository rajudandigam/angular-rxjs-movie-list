import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie, movies } from '../models/movie.model'; 

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }
  
  getMovies() {
    return of(movies);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  movie(id: number) {
    return of(
      movies.find(movie => +movie.id === +id)
    );
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }
}
