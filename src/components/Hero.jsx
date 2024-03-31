// ---------- HERO Component ----------
// Components Imports
import Button from "./Button";

// MUI Imports
import Paper from "@mui/material/Card";

// Assets and Style Imports
import HeroImage from "../assets/img/banner-hero.jpg";
import Effect from "../assets/img/tear.svg";
import "../styles/Hero.css";

const Hero = () => {
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
      <Paper elevation={12} className="hero__content">
        <h1>Prêtes à faire du tri dans vos placards ?</h1>
        <Button text="Commencer à vendre" />
      </Paper>
    </section>
  );
};

// Export component
export default Hero;
