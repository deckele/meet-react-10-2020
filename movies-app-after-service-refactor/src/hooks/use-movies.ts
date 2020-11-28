import { useEffect, useState } from "react";
import { Movie } from "../contracts";
import { apiService } from "../services/api";
import { useDebounce } from "./use-debounce";

export function useMovies(page: number) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const debouncedPage = useDebounce(page, 300);

  useEffect(() => {
    apiService.getMovies(debouncedPage).then(({ movies, totalPages }) => {
      setMovies(movies);
      setTotalPages(totalPages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPage]);
  return {
    movies,
    totalPages,
  };
}
