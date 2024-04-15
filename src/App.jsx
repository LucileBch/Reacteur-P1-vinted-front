// ---------- APP Routing Logic ----------
// Packages Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages Imports
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import Error from "./pages/Error";

// Components Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// MUI Imports
import { StyledEngineProvider } from "@mui/material/styles";

// Assets and style Imports
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faAngleRight, faAngleLeft);

function App() {
  // States
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(Cookies.get("userToken")) || "";
  const [modalName, setModalName] = useState("");
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  // Disable scroll when modal opened
  if (visible === true) {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  } else {
    window.onscroll = function () {};
  }

  // Routing logic
  return (
    <StyledEngineProvider injectFirst>
      <div className="modal__parent">
        <Router>
          <Header
            setVisible={setVisible}
            token={token}
            setToken={setToken}
            modalName={modalName}
            setModalName={setModalName}
            sort={sort}
            setSort={setSort}
            search={search}
            setSearch={setSearch}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  token={token}
                  sort={sort}
                  search={search}
                  priceMin={priceMin}
                  priceMax={priceMax}
                  setVisible={setVisible}
                  setModalName={setModalName}
                />
              }
            />
            <Route
              path="/offers/:id"
              element={
                <Offer
                  token={token}
                  setVisible={setVisible}
                  setModalName={setModalName}
                />
              }
            />

            <Route path="/publish" element={<Publish token={token} />} />
            <Route path="/payment" element={<Payment token={token} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />

          {visible && (
            <Modal
              modalName={modalName}
              setModalName={setModalName}
              visible={visible}
              setVisible={setVisible}
              setToken={setToken}
            />
          )}
        </Router>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
