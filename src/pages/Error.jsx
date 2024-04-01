// ---------- ERROR Page ----------
// Packages Imports
import { Link } from "react-router-dom";

// MUI Imports
import Container from "@mui/material/Container";

// Styles Imports
import "../styles/Error.css";

const Error = () => {
  return (
    <main className="main__error">
      <Container maxWidth="lg">
        <div className="error__display">
          <p>404 : PAGE NOT FOUND</p>
          <Link to="/" className="error__link">
            {" "}
            Retour à la page d'accueil
          </Link>
        </div>
      </Container>
    </main>
  );
};

// Export page
export default Error;
