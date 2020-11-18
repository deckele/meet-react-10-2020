import { useEffect, useState } from "react";
import { Movie, MoviesResponse } from "../contracts";
import { apiService } from "../services/api";
import { useDebounce } from "./use-debounce";

export function useMovies(
  page: number,
  onTotalPagesChanged: (total: number) => void
) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const debouncedPage = useDebounce(page, 300);

  useEffect(() => {
    apiService.getMovies(debouncedPage).then(({ movies, totalPages }) => {
      setMovies(movies);
      onTotalPagesChanged(totalPages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPage]);
  return {
    movies,
  };
}
