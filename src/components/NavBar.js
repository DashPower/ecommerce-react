import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar()
  {

    return(
        <nav className="navbar">
          <Link to="/category/Figuras">Figuras </Link>
          <Link to="/category/Coleccionable">Coleccionable</Link>
          <Link to="/category/Ropa">Ropa </Link>
          <Link to="/category/Juguete">Juguete</Link>
          <Link to="/category/Sticker">Sticker</Link>
          <Link to="/cart"><CartWidget/></Link>
        </nav>  
    )
  }



export default NavBar;