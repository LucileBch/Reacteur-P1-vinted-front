// ---------- OFFER Page ----------
// Import packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import components
import OfferInfo from "../components/OfferInfo";

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
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
          >
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
          </Carousel>

          <OfferInfo infos={data} />
        </section>
      )}
    </main>
  );
};

export default Offer;
