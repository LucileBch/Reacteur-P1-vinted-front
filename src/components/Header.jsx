// ---------- HEADER Component ----------
// Import packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// Import components
import Button from "./Button";
import Search from "./Search";

// Import assets
import Logo from "../assets/img/logo.png";

const Header = ({
  setVisible,
  token,
  setToken,
  setModalName,
  sort,
  setSort,
}) => {
  // Handle signup/login button
  const handleSignUp = () => {
    setVisible(true);
    setModalName("signUp");
  };
  const handleLogin = () => {
    setVisible(true);
    setModalName("login");
  };

  // Handle logout button
  const handleLogout = () => {
    Cookies.remove("userToken");
    setToken("");
  };

  // Handle click on Logo
  const handleCloseModals = () => {
    setVisible(false);
  };

  // Handle price sort
  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <header style={{ display: "flex" }}>
      <Link to="/" onClick={handleCloseModals}>
        <img src={Logo} alt="Logo de Vinted" style={{ width: "150px" }} />
      </Link>

      <Search />

      <p>Trier par prix</p>
      <input type="checkbox" name="sort" onClick={handleSort} />

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
