import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import "./MovieCard.css"; // optional, for styling

const MovieCard = ({ movie }) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);

  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name || movie.title} className="movie-image" />
      <h3>{movie.title || movie.name}</h3>
      <p>{movie.description || movie.overview}</p>
      <button
        onClick={() =>
          inWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
        }
      >
        {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;