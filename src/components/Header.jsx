// ---------- HEADER Component ----------
// Packages Imports
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// MUI Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";

// Components Import
import Button from "./Button";
import Input from "./Input";

// Assets and styles Imports
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Header.css";

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
  const handleSort = (event) => {
    setSort(event.target.checked);
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
    <header>
      <Container className="header__container" maxWidth="lg">
        <Box>
          <Link to="/" onClick={handleLogo}>
            <img className="header__logo" src={Logo} alt="Logo de Vinted" />
          </Link>
        </Box>

        <Box width={600}>
          <Box className="header__input--search">
            <FontAwesomeIcon icon="magnifying-glass" />
            <Input
              type="text"
              placeholder="Rechercher des articles"
              name="search"
              setState={setSearch}
              state={search}
            />
          </Box>

          <Box className="header__filters">
            <Box className="header__filters--switch">
              <p>Trier par prix :</p>
              <Switch
                checked={sort}
                onChange={handleSort}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>

            <Box className="header__filters--range">
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
            </Box>
          </Box>
        </Box>

        <Box className="header__buttons">
          <Box className="header__buttons--connect">
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
          </Box>
          <Button
            text="Se déconnecter"
            onClick={handleLogout}
            disabled={token ? false : true}
          />
          <Button text="Vends tes articles" disabled={false} />
        </Box>
      </Container>
    </header>
  );
};

// Export component
export default Header;
