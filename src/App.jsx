import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Products array
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones with 30-hour battery life" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with heart rate monitor and GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker with 360-degree sound" },
  ];

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart function
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header cartCount={cart.length} storeName="ComponentCorner" />
      <Hero title="Welcome to ComponentCorner" subtitle="Find the best tech gadgets here!" />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <CartItem key={index} item={item} onRemove={() => removeFromCart(index)} />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;