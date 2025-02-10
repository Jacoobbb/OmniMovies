export interface Movie {
    Title: string;
    Year?: string;
    imdbID: string;
    Type?: string;
    Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieListPayload {
  search: string; 
  page: number;
}


export interface AddFavoriteMoviePayload {
  movieDetails: MovieDetails;
}

export interface RemoveFavoriteMoviePayload {
  imdbID: string;
}

export interface MovieListResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

export interface MovieListSuccessPayload {
  movies: Movie[];
  totalResults: number;
  page: number
}

export interface FetchMovieDetailsRequestPayload {
  imdbID: string;
}

export interface FetchMovieDetailsSuccessPayload {
  movieDetails: MovieDetails;
}

export interface FetchMovieDetailsFailurePayload {
  error: string;
}