// ---------- HERO Component ----------
// Packages Imports
import { Link } from "react-router-dom";

// Components Imports
import Button from "./Button";

// MUI Imports
import Paper from "@mui/material/Card";
import Container from "@mui/material/Container";

// Assets and Style Imports
import HeroImage from "../assets/img/banner-hero.jpg";
import Effect from "../assets/img/tear.svg";
import "../styles/Hero.css";

const Hero = ({ token, setVisible, setModalName, setFilterDisplay }) => {
  const handleLogin = () => {
    setVisible(true);
    setModalName("login");
    setFilterDisplay(false);
  };

  return (
    <section className="hero">
      <div>
        <img
          className="hero__img"
          src={HeroImage}
          alt="image de présentation vinted"
        />
        <img className="hero__effect" src={Effect} alt="effet déchiré" />
      </div>
      <Container maxWidth="lg">
        <Paper elevation={12} className="hero__content">
          <h1>Prêtes à faire du tri dans vos placards ?</h1>

          {token ? (
            <Link to="/publish">
              <Button text="Commencer à vendre" />
            </Link>
          ) : (
            <Link to="/publish">
              <Button text="Commencer à vendre" onClick={handleLogin} />
            </Link>
          )}
        </Paper>
      </Container>
    </section>
  );
};

// Export component
export default Hero;
