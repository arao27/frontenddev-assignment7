import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button className="product-button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;