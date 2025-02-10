import { createReducer } from '@reduxjs/toolkit';
import { Movie, MovieDetails } from '../../typings/movie';
import MovieActions from './actions';

export interface MovieState {
  loading: boolean;
  error: string | null;
  movies: Movie[];
  page: number;
  totalResults: number;
}

export interface MovieDetailsState {
    movieDetails: MovieDetails | null;
    loading: boolean;
    error: string | null;
}

export interface FavoriteMoviesState {
  favorites: MovieDetails[];
}

const initialMovieState: MovieState = {
  loading: false,
  error: null,
  movies: [],
  page: 1,
  totalResults: 0,
};

const initialDetailsState: MovieDetailsState = {
    movieDetails: null,
    loading: false,
    error: null,
  };

const initialFavoritesState: FavoriteMoviesState = {
  favorites: [],
};

export const movieReducer = createReducer(initialMovieState, (builder) => {
  builder
    .addCase(MovieActions.fetchMoviesRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(MovieActions.fetchMoviesSuccess, (state, action) => {
      state.loading = false;
      state.movies = action.payload.page === 1 
        ? action.payload.movies
        : [...state.movies, ...action.payload.movies];
      state.totalResults = action.payload.totalResults;
    })
    .addCase(MovieActions.fetchMoviesFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export const movieDetailsReducer = createReducer(initialDetailsState, (builder) => {
    builder
      .addCase(MovieActions.fetchMovieDetailsRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(MovieActions.fetchMovieDetailsSuccess, (state, action) => {
        state.movieDetails = action.payload.movieDetails;
        state.loading = false;
      })
      .addCase(MovieActions.fetchMovieDetailsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  });

export const favoriteMoviesReducer = createReducer(initialFavoritesState, (builder) => {
  builder
    .addCase(MovieActions.addFavoriteMovie, (state, action) => {
      state.favorites.push(action.payload.movieDetails);
    })
    .addCase(MovieActions.removeFavoriteMovie, (state, action) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload.imdbID);
    });
});
