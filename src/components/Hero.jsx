import "./Hero.css";

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button>{ctaText}</button>
    </section>
  );
}

export default Hero;