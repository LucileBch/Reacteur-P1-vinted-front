// ---------- FOOTER Component ----------
// Import assets
import AppBadge from "../assets/img/app-store-badges-fr.svg";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#D3D3D3" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>icones</p>
        <img src={AppBadge} alt="logo app store" />
      </div>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>Politique de Confidentialité</li>
          <li>Politique de cookies</li>
          <li>Paramètres des cookies</li>
          <li>Termes et Conditions</li>
          <li>Notre plateforme</li>
          <li>Termes et conditions de Vinted Pro</li>
        </ul>
      </div>
    </footer>
  );
};

// Export component
export default Footer;
