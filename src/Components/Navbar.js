import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">KFFTO</Link>
      </h2>
      <h2>
        <Link to="/about">Nosotros</Link>
      </h2>
      <h2>
        <Link to="/gallery">Galería</Link>
      </h2>
      <h2>
        <Link to="/menu&store">Menú y Tienda</Link>
      </h2>
      <h2>
        <Link to="/contact">Contacto</Link>
      </h2>
    </nav>
  );
}

export default Navbar;
