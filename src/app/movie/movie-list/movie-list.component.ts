import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';
import { MovieService } from '../serices/movie.service';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(
    private MovieService: MovieService,
    private navbarService: NavbarService
    ) { }

  ngOnInit() {
    this.movies$ = this.MovieService.getMovies();
    this.navbarService.title.next('Movie List');
  }

}
