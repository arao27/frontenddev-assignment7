import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;