import { Movie, MoviesResponse } from "../contracts";

interface MoviesData {
  movies: Movie[];
  totalPages: number;
}
class ApiService {
  getMovies(page: number): Promise<MoviesData> {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((res: MoviesResponse) => ({
        movies: res.results,
        totalPages: res.total_pages,
      }));
  }
}

export const apiService = new ApiService();
