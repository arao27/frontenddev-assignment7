import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your one-stop shop for awesome tech gadgets"
        ctaText="Shop Now"
      />

      <div className="product-grid">
        <ProductCard
          name="Wireless Headphones"
          price="99.99"
          image="https://placehold.co/600x400"
          description="High-quality sound with noise cancellation."
        />
        <ProductCard
          name="Smart Watch"
          price="149.99"
          image="https://placehold.co/600x400"
          description="Track fitness, notifications, and more."
        />
        <ProductCard
          name="Gaming Mouse"
          price="59.99"
          image="https://placehold.co/600x400"
          description="Precision performance for serious gamers."
        />
      </div>

      <Footer storeName="ComponentCorner" email="support@componentcorner.com" />
    </>
  );
}

export default App;