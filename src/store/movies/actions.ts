import { createAction } from '@reduxjs/toolkit';
import { AddFavoriteMoviePayload, FetchMovieDetailsFailurePayload, FetchMovieDetailsRequestPayload, FetchMovieDetailsSuccessPayload, MovieDetails, MovieListPayload, MovieListSuccessPayload, RemoveFavoriteMoviePayload } from '../../typings/movie';

const MovieActions = {
    fetchMoviesRequest: createAction<MovieListPayload>('MOVIES/FETCH_MOVIES_REQUEST'),
    fetchMoviesSuccess: createAction<MovieListSuccessPayload>('MOVIES/FETCH_MOVIES_SUCCESS'),
    fetchMoviesFailure: createAction<string>('MOVIES/FETCH_MOVIES_FAILURE'),

    fetchMovieDetailsRequest: createAction<FetchMovieDetailsRequestPayload>('MOVIE_DETAILS/FETCH_MOVIE_DETAILS_REQUEST'),
    fetchMovieDetailsSuccess: createAction<FetchMovieDetailsSuccessPayload>('MOVIE_DETAILS/FETCH_MOVIE_DETAILS_SUCCESS'),
    fetchMovieDetailsFailure: createAction<FetchMovieDetailsFailurePayload>('MOVIE_DETAILS/FETCH_MOVIE_DETAILS_FAILURE'),
    
    addFavoriteMovie: createAction<AddFavoriteMoviePayload>('FAVORITES//ADD_FAVORITE_MOVIE'),
    removeFavoriteMovie: createAction<RemoveFavoriteMoviePayload>('FAVORITES//REMOVE_FAVORITE_MOVIE')
}

export default MovieActions;
