// ---------- HEADER Component ----------
// Import packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// Import components
import Button from "./Button";
import Search from "./Search";

// Import assets
import Logo from "../assets/img/logo.png";

const Header = ({
  visible,
  setVisible,
  visibleLogin,
  setVisibleLogin,
  isConnected,
  setIsConnected,
  token,
  setToken,
}) => {
  const handleSignUp = () => {
    setVisible(!visible);
    setVisibleLogin(false);
  };
  const handleLogin = () => {
    setVisibleLogin(!visibleLogin);
    setVisible(false);
  };

  const handleLogout = () => {
    Cookies.remove("userToken");
    setToken("");
  };

  const handleCloseModals = () => {
    setVisible(false);
    setVisibleLogin(false);
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
        disabled={isConnected === false ? false : true}
      />
      <Button
        text="Se connecter"
        onClick={handleLogin}
        disabled={isConnected === false ? false : true}
      />
      <Button
        text="Se déconnecter"
        onClick={handleLogout}
        disabled={isConnected === false ? true : false}
      />
      <Button text="Vends tes articles" />
    </header>
  );
};

export default Header;
