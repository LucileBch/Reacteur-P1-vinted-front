// ---------- HERO Component ----------
// Import components
import Button from "./Button";

// Import assets
import HeroImage from "../assets/img/banner-hero.jpg";

const Hero = () => {
  return (
    <section>
      <img
        style={{ width: "150px" }}
        src={HeroImage}
        alt="image de présentation vinted"
      />
      <div>
        <h1>Prêtes à faire du tri dans vos placards ?</h1>
        <Button text="Commencer à vendre" />
      </div>
    </section>
  );
};

// Export component
export default Hero;
