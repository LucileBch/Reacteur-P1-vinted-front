// ---------- OFFER Page ----------
// Import packages
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components
import OfferInfo from "../components/OfferInfo";

const Offer = () => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display page
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
    );
    setData(response.data);
    setIsLoading(false);
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
          <img
            src={data.product_image.secure_url}
            alt={data.product_description}
          />
          <OfferInfo infos={data} />
        </section>
      )}
    </main>
  );
};

export default Offer;
