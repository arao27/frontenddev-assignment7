import "./Footer.css";

function Footer({ storeName, email }) {
  return (
    <footer className="footer">
      <p>© 2026 {storeName}</p>
      <p>{email}</p>
    </footer>
  );
}

export default Footer;