import NavBar from "./NavBar";
function Header() {
  return (
    <>
      <header className="header">
        <a href="#"><img src="/dota2logo.png" alt="Dota2Logo" className="logo" /></a>
        <NavBar isHeader={true}/>
      </header>
    </>
  );
}

export default Header;
