import React, { useEffect, useState } from "react";
import { Movie, MoviesResponse } from "../../contracts";
import { useDebounce } from "../../hooks/use-debounce";
import { usePaginator } from "../../hooks/use-paginator";
import { MoviesListItem } from "./movies-list-item/movies-list-item";
import "./movies-list.scss";

export function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const { nextPage, prevPage, setPage, page } = usePaginator(totalPages || 0);
  const debouncedPage = useDebounce(page, 300);
  useEffect(() => {
    function getMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${debouncedPage}`
      )
        .then((res) => res.json())
        .then((res: MoviesResponse) => {
          setMovies(res.results);
          setTotalPages(res.total_pages);
          console.count("set movies");
        });
    }
    getMovies();
  }, [debouncedPage]);

  return (
    <>
      <h1>Movies List!</h1>
      <div>
        <button onClick={prevPage}>{"<<< prev page"}</button>
        <span>
          <input
            className="movies-page-input"
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
          />{" "}
          / {totalPages}
        </span>
        <button onClick={nextPage}>{"next page >>>"}</button>
      </div>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MoviesListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
