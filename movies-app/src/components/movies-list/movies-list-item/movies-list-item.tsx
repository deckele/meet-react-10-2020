import React, { useState } from "react";
import { PICS_BASE_URL } from "../../../constants";
import { Movie } from "../../../contracts";
import "./movies-list-item.scss";
import starIcon from "../../../assets/star.svg";
type MoviesListItemProps = {
  movie: Movie;
};
export function MoviesListItem({ movie }: MoviesListItemProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <li
      onClick={() => setShowDescription((prev) => !prev)}
      className="movies-list-item"
    >
      <img src={PICS_BASE_URL + movie.poster_path} alt={movie.title} />
      <div className="movies-list-item-rating">
        <img src={starIcon} alt={"vote average: " + movie.vote_average} />
        {movie.vote_average}
      </div>
      <div className="movies-list-item-title">{movie.title}</div>
      {showDescription ? (
        <div className="movies-list-item-description">{movie.overview}</div>
      ) : null}
    </li>
  );
}
