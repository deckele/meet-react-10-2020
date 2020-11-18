import React, { useState } from "react";
import { useMovies } from "../../hooks/use-movies";
import { usePaginator } from "../../hooks/use-paginator";
import { MoviesListItem } from "./movies-list-item/movies-list-item";
import "./movies-list.scss";

export function MoviesList() {
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const { nextPage, prevPage, setPage, page } = usePaginator(totalPages || 0);
  const { movies } = useMovies(page, handleTotalPagesChanged);
  function handleTotalPagesChanged(total: number) {
    setTotalPages(total);
  }
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
