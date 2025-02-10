import { FavoriteMoviesState, MovieDetailsState, MovieState } from "./reducer";

export const getMovies = (state: { movies: MovieState }) => state.movies.movies;
export const getMoviesLoading = (state: { movies: MovieState }) => state.movies.loading;
export const getTotalResults = (state: { movies: MovieState }) => state.movies.totalResults;
export const getMoviesError = (state: { movies: MovieState }) => state.movies.error;

export const getMovieDetails = (state: { movieDetails: MovieDetailsState }) => state.movieDetails.movieDetails;
export const getMovieDetailsLoading = (state: { movieDetails: MovieDetailsState }) => state.movieDetails.loading;
export const getMovieDetailsError = (state: { movieDetails: MovieDetailsState }) => state.movieDetails.error;

export const getFavoriteMovies = (state: { favorites: FavoriteMoviesState }) => state.favorites.favorites;
