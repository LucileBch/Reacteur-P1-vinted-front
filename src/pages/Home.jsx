// ---------- HOME Page ----------
// Import packages
import { Link } from "react-router-dom";

// Import components
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Link to="/offers/:id">Allez à l'offre</Link>
    </main>
  );
};

export default Home;
