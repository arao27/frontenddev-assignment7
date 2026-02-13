import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products, addToCart }) {
  return (
    <div>
      <h1>All Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}       // pass the product here
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}