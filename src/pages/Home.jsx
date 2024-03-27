// ---------- HOME Page ----------
// Import packages
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home page</p>
      <Link to="/offers/:id">Allez à l'offre</Link>
    </div>
  );
};

export default Home;
