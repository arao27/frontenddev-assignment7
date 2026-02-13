import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  const { watchlist = [], addToWatchlist, removeFromWatchlist } =
    useContext(MovieContext);

  if (!product) return null; // safety check

  const isInWatchlist = watchlist.some(item => item.id === product.id);

  const handleWatchlistClick = () => {
    if (isInWatchlist) {
      removeFromWatchlist(product.id);
    } else {
      addToWatchlist(product);
    }
  };

  return (
    <div className="product-card" style={{ border: "1px solid #ddd", padding: "1rem", width: "250px" }}>
      <img
        src={product.image || "https://placehold.co/600x400"}
        alt={product.name}
        style={{ width: "100%" }}
      />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={onAddToCart}>Add to Cart</button>

      <button onClick={handleWatchlistClick}>
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}