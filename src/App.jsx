// ---------- APP Routing Logic ----------
// Import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components and pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import style
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
