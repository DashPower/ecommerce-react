import CartWidget from "./CartWidget";

function NavBar(parametro){
    if(parametro.isHeader===true){
      return(
        <nav className="navbar">
          <a href="#">Catalogo</a>
          <a href="#">Unete ahora</a>
          <a href="#">
            <CartWidget/>
          </a>
        </nav>  
    )}

    else{
      return(
        <nav className="navbar">
        </nav>
      )
    }
  
}
export default NavBar;