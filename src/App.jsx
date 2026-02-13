import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Watchlist from "./pages/Watchlist"; // NEW
import { MovieProvider } from "./contexts/MovieContext"; // NEW

function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart by id (removes only one instance)
  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return; // nothing to remove

    const newCart = [...cart];
    newCart.splice(index, 1); // remove only the first matching item
    setCart(newCart);
  };

  // Sample products
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones with 30-hour battery life" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with heart rate monitor and GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker with 360-degree sound" },
    { id: 4, name: "Laptop Stand", price: 49.99, image: "https://placehold.co/600x400", description: "Ergonomic aluminum stand for laptops and tablets" },
    { id: 5, name: "Webcam", price: 129.99, image: "https://placehold.co/600x400", description: "4K webcam with auto-focus and noise reduction" },
    { id: 6, name: "Mechanical Keyboard", price: 159.99, image: "https://placehold.co/600x400", description: "RGB backlit keyboard with custom switches" }
  ];

  return (
    <MovieProvider>
      <Router>
        <Header storeName="ComponentCorner" cartCount={cart.length} />
        <Routes>
          <Route
            path="/"
            element={<HomePage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/watchlist"
            element={<Watchlist addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </MovieProvider>
  );
}

export default App;