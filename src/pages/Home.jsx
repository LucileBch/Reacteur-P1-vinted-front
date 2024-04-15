// ---------- HOME Page ----------
// Packages Imports
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Components Imports
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

// MUI Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Style Imports
import "../styles/Home.css";

const Home = ({
  token,
  sort,
  search,
  priceMin,
  priceMax,
  setVisible,
  setModalName,
}) => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display content
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // useLocation
  const location = useLocation();
  const info = location.state?.info;
  useEffect(() => {
    if (info === "login") {
      setModalName("login");
      setVisible(true);
    }
  }, []);

  // Set offer limit display for each page
  const limit = 10;
  const dividePage = data.count / limit;
  const maxPages = Math.ceil(dividePage);

  // Set sort value for URL
  let sortValue = "";
  if (sort === false) {
    sortValue = "price-asc";
  } else if (sort === true) {
    sortValue = "price-desc";
  }

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}&sort=${sortValue}&title=${search}&priceMin=${priceMin}&priceMax=${priceMax}`
      );
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, sort, search, priceMin, priceMax]);

  // Handle change of page
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <main>
      <Hero token={token} setVisible={setVisible} setModalName={setModalName} />
      {isLoading === true ? (
        "Loading"
      ) : (
        <section className="offerdisplay">
          <Container maxWidth="lg" className="container__offerdisplay">
            <Box className="offerdisplay__grid">
              {data.offers.map((offer) => {
                return (
                  <Link to={`/offers/${offer._id}`} key={offer._id}>
                    <OfferCard offer={offer} />
                  </Link>
                );
              })}
            </Box>

            <div className="offerdisplay__buttons">
              <Stack spacing={2}>
                <Pagination
                  count={maxPages}
                  page={page}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
};

// Export page
export default Home;
