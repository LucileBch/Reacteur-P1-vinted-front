// ---------- FOOTER Component ----------
// MUI Imports
import Container from "@mui/material/Container";

// Assets and Style Imports
import AppBadge from "../assets/img/app-store-badges-fr.svg";
import Facebook from "../assets/img/facebook-logo.svg";
import Linkedin from "../assets/img/linkedin-logo.svg";
import Instagram from "../assets/img/instagram-logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <div className="footer__nav">
          <div>
            <h4>Vinted</h4>
            <ul>
              <li>À propos de Vinted</li>
              <li>Carrière</li>
              <li>Le développement durable</li>
              <li>Presse</li>
              <li>Publicités</li>
            </ul>
          </div>
          <div>
            <h4>Découvrir</h4>
            <ul>
              <li>Comment ça marche ?</li>
              <li>Vérification de l'article</li>
              <li>Applications mobiles</li>
              <li>Tableau de bord</li>
              <li>Vinted Pro</li>
              <li>Guide Vinted Pro</li>
            </ul>
          </div>
          <div>
            <h4>Aide</h4>
            <ul>
              <li>Centre d'aide</li>
              <li>Vendre</li>
              <li>Acheter</li>
              <li>Confiance et sécurité</li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <div className="footer__icons--social">
            <img src={Facebook} alt="logo facebook" />
            <img src={Linkedin} alt="logo linkedin" />
            <img src={Instagram} alt="logo instagram" />
          </div>
          <img
            className="footer__icons--store"
            src={AppBadge}
            alt="logo app store"
          />
        </div>
        <div>
          <ul className="footer__politics">
            <li>Politique de Confidentialité</li>
            <li>Politique de cookies</li>
            <li>Paramètres des cookies</li>
            <li>Termes et Conditions</li>
            <li>Notre plateforme</li>
            <li>Termes et conditions de Vinted Pro</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

// Export component
export default Footer;
