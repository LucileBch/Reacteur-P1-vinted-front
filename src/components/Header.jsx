// ---------- HEADER Component ----------
// Import packages
import { Link } from "react-router-dom";

// Import components
import Button from "./Button";
import Search from "./Search";

// Import assets
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header style={{ display: "flex" }}>
      <Link to="/">
        <img src={Logo} alt="Logo de Vinted" style={{ width: "150px" }} />
      </Link>
      <Search />
      <Button text="S'inscrire" />
      <Button text="Se connecter" />
      <Button text="Vends tes articles" />
    </header>
  );
};

export default Header;
