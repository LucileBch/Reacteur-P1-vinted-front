// ---------- APP Routing Logic ----------
// Packages Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages Imports
import Home from "./pages/Home";
import Offer from "./pages/Offer";
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

  return (
    <StyledEngineProvider injectFirst>
      <div style={{ position: "relative" }}>
        <Router>
          <Header
            setVisible={setVisible}
            token={token}
            setToken={setToken}
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
                  sort={sort}
                  search={search}
                  priceMin={priceMin}
                  priceMax={priceMax}
                />
              }
            />
            <Route path="/offers/:id" element={<Offer path="/offers" />} />
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
