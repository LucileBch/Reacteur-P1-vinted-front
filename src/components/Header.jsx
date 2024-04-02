// ---------- HEADER Component ----------
// Packages Imports
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// MUI Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";

// Components Import
import Button from "./Button";
import Input from "./Input";
import PriceRange from "./PriceRange";

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
  filterDisplay,
  setFilterDisplay,
}) => {
  // Handle signup/login button
  const handleSignUp = () => {
    setVisible(true);
    setModalName("signUp");
    setFilterDisplay(false);
  };
  const handleLogin = () => {
    setVisible(true);
    setModalName("login");
    setFilterDisplay(false);
  };

  // Handle logout button
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("userToken");
    setToken("");
    navigate("/");
  };

  // Handle click on Logo
  const handleLogo = () => {
    setVisible(false);
    setSearch("");
    setPriceMin("");
    setPriceMax("");
    setPage(1);
  };

  // Handle price sort
  const handleSort = (event) => {
    setSort(event.target.checked);
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

          {filterDisplay === true && (
            <Box className="header__filters" page="offer">
              <Box className="header__filters--switch">
                <p>Trier par prix:</p>
                <Switch
                  checked={sort}
                  onChange={handleSort}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>

              <Box className="header__filters--range">
                <p>Prix entre :</p>
                <PriceRange
                  priceMin={priceMin}
                  setPriceMin={setPriceMin}
                  priceMax={priceMax}
                  setPriceMax={setPriceMax}
                />
              </Box>
            </Box>
          )}
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

          {token ? (
            <Link to="/publish">
              <Button text="Vends tes articles" disabled={false} />
            </Link>
          ) : (
            <Link to="/publish">
              <Button
                text="Vends tes articles"
                onClick={handleLogin}
                disabled={false}
              />
            </Link>
          )}
        </Box>
      </Container>
    </header>
  );
};

// Export component
export default Header;
