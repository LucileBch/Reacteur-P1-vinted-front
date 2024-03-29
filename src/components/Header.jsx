// ---------- HEADER Component ----------
// Import packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// Import components
import Button from "./Button";
import Input from "./Input";

// Import assets
import Logo from "../assets/img/logo.png";

const Header = ({
  setVisible,
  token,
  setToken,
  setModalName,
  sort,
  setSort,
  search,
  setSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
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
  const handleLogo = () => {
    setVisible(false);
    setSearch("");
    setPriceMin("");
    setPriceMax("");
  };

  // Handle price sort
  const handleSort = () => {
    setSort(!sort);
  };

  // Handle price range
  const handlePriceMin = (event) => {
    const value = Number(event.target.value);
    setPriceMin(value);
  };
  const handlePriceMax = (event) => {
    const value = Number(event.target.value);
    setPriceMax(value);
  };

  return (
    <header style={{ display: "flex" }}>
      <Link to="/" onClick={handleLogo}>
        <img src={Logo} alt="Logo de Vinted" style={{ width: "150px" }} />
      </Link>

      <Input
        type="text"
        placeholder="Rechercher des articles"
        name="search"
        setState={setSearch}
        state={search}
      />

      <p>Trier par prix</p>
      <input type="checkbox" name="sort" onClick={handleSort} />

      <div>
        <p>Prix Min : </p>
        <input
          value={priceMin}
          type="text"
          onChange={() => {
            handlePriceMin(event);
          }}
        />
        <p>Prix Max : </p>
        <input
          value={priceMax}
          type="text"
          onChange={() => {
            handlePriceMax(event);
          }}
        />
      </div>

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
