// ---------- HOME Page ----------
// Import packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Import components
import Hero from "../components/Hero";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({ sort, search, priceMin, priceMax }) => {
  // Fetch API datas with useEffect
  // Check server response
  //    If waiting for datas : display "loading"
  //    Else : display page
  // Set offer limit display for each page
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const limit = 10;
  const dividePage = data.count / limit;
  const maxPages = Math.ceil(dividePage);

  // set sort value for URL
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
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <Hero />
      {isLoading === true ? (
        "Loading"
      ) : (
        <section>
          <div style={{ display: "flex" }}>
            {data.offers.map((offer) => {
              return (
                <Link to={`/offers/${offer._id}`} key={offer._id}>
                  <Card offer={offer} />
                </Link>
              );
            })}
          </div>

          <div>
            <Button
              text="Previous"
              onClick={handlePreviousPage}
              disabled={page <= 1}
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>{page}</span>
            <Button
              text="Next"
              onClick={handleNextPage}
              disabled={page === maxPages}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
