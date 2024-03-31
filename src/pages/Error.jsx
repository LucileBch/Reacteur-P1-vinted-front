// ---------- ERROR Page ----------
// Import packages
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>ERROR 404</p>
      <Link to="/"> Retour à la page d'accueil</Link>
    </div>
  );
};

// Export page
export default Error;
