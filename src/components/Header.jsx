// ---------- HEADER Component ----------
// Import packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// Import components
import Button from "./Button";
import Search from "./Search";

// Import assets
import Logo from "../assets/img/logo.png";

const Header = ({ visible, setVisible, token, setToken, setModalName }) => {
  const handleSignUp = () => {
    setVisible(true);
    // ICI CHANGEMENT
    setModalName("signUp");
  };
  const handleLogin = () => {
    setVisible(true);
    // ICI CHANGEMENT
    setModalName("login");
  };

  const handleLogout = () => {
    Cookies.remove("userToken");
    setToken("");
    // setIsConnected(false);
  };

  const handleCloseModals = () => {
    setVisible(false);
  };

  return (
    <header style={{ display: "flex" }}>
      <Link to="/" onClick={handleCloseModals}>
        <img src={Logo} alt="Logo de Vinted" style={{ width: "150px" }} />
      </Link>
      <Search />
      <Button
        text="S'inscrire"
        onClick={handleSignUp}
        disabled={token ? true : false}
      />
      <Button
        text="Se connecter"
        onClick={handleLogin}
        disabled={token ? true : false}
      />
      <Button
        text="Se déconnecter"
        onClick={handleLogout}
        disabled={token ? false : true}
      />
      <Button text="Vends tes articles" />
    </header>
  );
};

export default Header;
