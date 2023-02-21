import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const abrir = () => {
    setMenu(true);
  };
  const cerrar = () => {
    setMenu(false);
  };
  return (
    <div className="displayNavbar">
      <span className="material-symbols-outlined abrir-menu" onClick={abrir}>
        menu
      </span>
      <nav
        className={`navbar ${
          menu
            ? "visible animate__animated animate__fadeInRight animate__fast"
            : ""
        }}`}
      >
        <span
          className="material-symbols-outlined cerrar-menu "
          onClick={cerrar}
        >
          close
        </span>
        <ul className="nav-list">
          <Link to="/category/Figuras" onClick={cerrar}>
            Figuras{" "}
          </Link>
          <Link to="/category/Coleccionable" onClick={cerrar}>
            Coleccionable
          </Link>
          <Link to="/category/Ropa" onClick={cerrar}>
            Ropa{" "}
          </Link>
          <Link to="/category/Juguete" onClick={cerrar}>
            Juguete
          </Link>
          <Link to="/category/Sticker" onClick={cerrar}>
            Sticker
          </Link>
        </ul>
        <Link to="/cart" className="cart-widget" onClick={cerrar}>
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
