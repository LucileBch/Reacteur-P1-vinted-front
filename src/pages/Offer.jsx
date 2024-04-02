// ---------- OFFER Page ----------
// Packages Imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components Imports
import OfferInfo from "../components/OfferInfo";
import Carousel from "../components/Carousel";

// MUI Imports
import Container from "@mui/material/Container";

// Style Imports
import "../styles/Offer.css";

const Offer = ({ filterDisplay, setFilterDisplay }) => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display content
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

  if (filterDisplay === true) {
    setFilterDisplay(false);
  }

  return (
    <main className="main__offer">
      {isLoading === true ? (
        "Loading"
      ) : (
        <section className="section__offer">
          <Container className="offer__container" maxWidth="lg">
            <Carousel pictures={data.product_pictures} data={data} />
            <OfferInfo infos={data} />
          </Container>
        </section>
      )}
    </main>
  );
};

// Export page
export default Offer;
