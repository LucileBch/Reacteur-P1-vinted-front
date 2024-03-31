// ---------- OFFER Page ----------
// Packages Imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components Imports
import OfferInfo from "../components/OfferInfo";

// MUI Imports
import Container from "@mui/material/Container";

// Style Imports
import "../styles/Offer.css";

// Responsive for Carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Offer = ({ path }) => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display content
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // Variables for style
  const styleMain = path === "/offers" && "main__offer";

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
    <main className={styleMain}>
      {isLoading === true ? (
        "Loading"
      ) : (
        <section className="section__offer">
          <Container className="offer__container" maxWidth="lg">
            {/* <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
            > */}
            {data.product_pictures.map((picture) => {
              return (
                <img
                  style={{ width: "200px" }}
                  key={picture.asset_id}
                  src={picture.secure_url}
                  alt={data.product_name}
                />
              );
            })}
            {/* </Carousel> */}

            <OfferInfo infos={data} />
          </Container>
        </section>
      )}
    </main>
  );
};

// Export page
export default Offer;
