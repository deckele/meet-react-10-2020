import React, { useLayoutEffect, useRef, useState } from "react";
import { PICS_BASE_URL } from "../../../constants";
import { Movie } from "../../../contracts";
import "./movies-list-item.scss";
import starIcon from "../../../assets/star.svg";
type MoviesListItemProps = {
  movie: Movie;
};
export function MoviesListItem({ movie }: MoviesListItemProps) {
  const descriptionHeightSetRef = useRef(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const liRef = useRef<HTMLLIElement>(null);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState<number>();
  useLayoutEffect(() => {
    if (descriptionHeightSetRef.current) return;
    if (!descriptionRef.current) return;
    setDescriptionHeight(descriptionRef.current?.clientHeight);
    descriptionHeightSetRef.current = true;
  }, [showDescription]);
  useLayoutEffect(() => {
    function handleToggleDescription(e: MouseEvent) {
      if (!liRef.current?.contains(e.target as Node)) {
        setShowDescription(false);
      } else if (descriptionRef.current?.contains(e.target as Node)) {
        setShowDescription(true);
      } else {
        setShowDescription((prev) => !prev);
      }
    }
    document.addEventListener("click", handleToggleDescription);
    return () => document.removeEventListener("click", handleToggleDescription);
  }, []);

  return (
    <li ref={liRef} className="movies-list-item">
      <img
        className="movies-list-item-image"
        src={PICS_BASE_URL + movie.poster_path}
        alt={movie.title}
      />
      <div className="movies-list-item-rating">
        <img src={starIcon} alt={"vote average: " + movie.vote_average} />
        {movie.vote_average}
      </div>
      <div className="movies-list-item-title">{movie.title}</div>
      <div
        ref={descriptionRef}
        className="movies-list-item-description"
        style={{
          height: descriptionHeightSetRef.current
            ? showDescription
              ? `${descriptionHeight}px`
              : "0px"
            : undefined,
          transition: descriptionHeightSetRef.current
            ? "height 250ms ease-in, opacity 250ms ease-in"
            : undefined,
          opacity: showDescription ? 1 : 0,
        }}
      >
        {movie.overview}
      </div>
    </li>
  );
}
