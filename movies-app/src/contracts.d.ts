export interface Movie {
  poster_path: string;
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
