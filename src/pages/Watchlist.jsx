import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import ProductCard from "../components/ProductCard";

const Watchlist = ({ addToCart }) => {
  const { watchlist, removeFromWatchlist } = useContext(MovieContext);

  return (
    <div>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No items in your watchlist yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {watchlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}  // ✅ now works
              watchlistAction={() => removeFromWatchlist(product.id)} // optional remove
              watchlistText="Remove from Watchlist"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;