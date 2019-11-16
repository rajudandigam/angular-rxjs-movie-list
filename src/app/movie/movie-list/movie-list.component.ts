import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';
import { MovieService } from '../serices/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.MovieService.getMovies();
  }

}
