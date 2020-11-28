import React, { useRef } from "react";
import { useMovies } from "../../hooks/use-movies";
import { usePaginator } from "../../hooks/use-paginator";
import { MoviesListItem } from "./movies-list-item/movies-list-item";
import "./movies-list.scss";
import { ReactComponent as BackIcon } from "../../assets/left-arrow.svg";
import { ReactComponent as ForwardIcon } from "../../assets/right-arrow.svg";

export function MoviesList() {
  const totalPagesRef = useRef(0);
  const { nextPage, prevPage, setPage, page } = usePaginator(
    totalPagesRef.current
  );
  const { movies, totalPages } = useMovies(page);
  totalPagesRef.current = totalPages;
  return (
    <>
      <h1>Movies List!</h1>
      <div className="movies-page-controls">
        <button className="movies-page-button" onClick={prevPage}>
          <BackIcon className="movies-page-button-icon" />
        </button>
        <span>
          <input
            className="movies-page-input"
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
          />{" "}
          / {totalPages}
        </span>
        <button className="movies-page-button" onClick={nextPage}>
          <ForwardIcon className="movies-page-button-icon" />
        </button>
      </div>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MoviesListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
