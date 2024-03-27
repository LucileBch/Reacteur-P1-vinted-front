// ---------- HOME Page ----------
// Import packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Import components
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display page
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offers`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Hero />

      {isLoading === true ? (
        "Loading"
      ) : (
        <section>
          {data.offers.map((offer) => {
            return <Card key={offer._id} offer={offer} />;
          })}
          <Link to="/offers/:id">Allez à l'offre</Link>
        </section>
      )}
    </main>
  );
};

export default Home;
