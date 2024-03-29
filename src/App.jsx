// ---------- APP Routing Logic ----------
// Import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import components and pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ModalSignUp from "./components/ModalSignUp";
// import ModalLogin from "./components/ModalLogin";

// CHANGEMENT ICI
import Modal from "./components/Modal";

// Import style
import "./App.css";

function App() {
  // State to display Modal
  const [visible, setVisible] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [token, setToken] = useState(Cookies.get("userToken")) || "";
  // const [isConnected, setIsConnected] = useState(token ? true : false);

  const [modalName, setModalName] = useState("");

  return (
    <div style={{ position: "relative" }}>
      <Router>
        <Header
          visible={visible}
          setVisible={setVisible}
          visibleLogin={visibleLogin}
          setVisibleLogin={setVisibleLogin}
          // isConnected={isConnected}
          // setIsConnected={setIsConnected}
          token={token}
          setToken={setToken}
          setModalName={setModalName}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {visible && (
          // CHANGEMENT ICI
          <Modal
            modalName={modalName}
            setModalName={setModalName}
            visible={visible}
            setVisible={setVisible}
            token={token}
            setToken={setToken}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
