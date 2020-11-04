import React, { useEffect, useState } from "react";
import { Movie, MoviesResponse } from "../../contracts";
import { MoviesListItem } from "./movies-list-item/movies-list-item";
import "./movies-list.scss";

const MIN_PAGE = 1;
export function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(MIN_PAGE);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  useEffect(() => {
    function getMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((res: MoviesResponse) => {
          setMovies(res.results);
          setTotalPages(res.total_pages);
        });
    }
    getMovies();
  }, [page]);
  function handlePrevPage() {
    setPage((currentPage) => {
      const prevPage = currentPage - 1;
      return prevPage < MIN_PAGE ? MIN_PAGE : prevPage;
    });
  }
  function handleNextPage() {
    totalPages &&
      setPage((currentPage) => {
        const nextPage = currentPage + 1;
        return nextPage > totalPages ? totalPages : nextPage;
      });
  }
  function handlePageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!totalPages) {
      return;
    }
    const value = Number(e.target.value);
    if (!Number.isInteger(value)) {
      return;
    }
    if (value > totalPages) {
      setPage(totalPages);
      return;
    }
    if (value < MIN_PAGE) {
      setPage(MIN_PAGE);
      return;
    }
    setPage(value);
  }
  return (
    <>
      <h1>Movies List!</h1>
      <div>
        <button onClick={handlePrevPage}>{"<<< prev page"}</button>
        <span>
          <input
            className="movies-page-input"
            type="number"
            value={page}
            onChange={handlePageChange}
          />{" "}
          / {totalPages}
        </span>
        <button onClick={handleNextPage}>{"next page >>>"}</button>
      </div>

      {JSON.stringify(movies)}
      <ul>
        <MoviesListItem />
        <MoviesListItem />
        <MoviesListItem />
      </ul>
    </>
  );
}
