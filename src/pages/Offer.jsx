// ---------- OFFER Page ----------
// Import packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components
import Carousel from "../components/Carousel";
import OfferInfo from "../components/OfferInfo";

const Offer = () => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display page
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {isLoading === true ? (
        "Loading"
      ) : (
        <section>
          <Carousel infos={data} />
          <OfferInfo infos={data} />
        </section>
      )}
    </main>
  );
};

export default Offer;
