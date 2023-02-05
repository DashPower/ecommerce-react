import NavBar from "./NavBar";
import {Link} from "react-router-dom";
function Header() {
  return (
      <header className="header">
        <Link to={`/`}><img src="/dota2logo.png" alt="Dota2Logo" className="logo" /></Link>
        <NavBar isHeader={true}/>
      </header>
  );
}

export default Header;
