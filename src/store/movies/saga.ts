import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {API_URL, OMDB_API_KEY} from "@env"
import MovieActions from './actions';
import { MovieDetails, MovieListResponse } from '../../typings/movie';

const apiUrl = `${API_URL}?apikey=${OMDB_API_KEY}`;

function* fetchMovies(action: ReturnType<typeof MovieActions.fetchMoviesRequest>) {
  const { search, page } = action.payload;

  try {
    const response: AxiosResponse<MovieListResponse> = yield call(axios.get, `${apiUrl}&s=${search}&page=${page}`); 
    yield put(MovieActions.fetchMoviesSuccess({
      movies: response.data.Search,
      totalResults: response.data.totalResults,
      page
    }));
  } catch (error) {
    yield put(MovieActions.fetchMoviesFailure((error as any)?.message));
  }
}

function* fetchMovieDetails(action: ReturnType<typeof MovieActions.fetchMovieDetailsRequest>) {
  try {
    const response: AxiosResponse<MovieDetails> = yield call(axios.get, `${apiUrl}&i=${action.payload.imdbID}`);
    yield put(MovieActions.fetchMovieDetailsSuccess({movieDetails: response.data}));
  } catch (error) {
    yield put(MovieActions.fetchMovieDetailsFailure((error as any)?.message));
  }
}

export function* watchFetchMovies() {
  yield takeEvery(MovieActions.fetchMoviesRequest.type, fetchMovies);
}

export function* watchFetchMovieDetails() {
  yield takeEvery(MovieActions.fetchMovieDetailsRequest.type, fetchMovieDetails);
}
