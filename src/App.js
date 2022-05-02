import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BuyTickets from "./components/Pages/BuyTicket";
import ShowQRcode from "./components/Pages/ShowQRcode/index.js";
import Poap from "./components/Pages/Poap";
import ShowTickets from "./components/Pages/HaveTicket";
import RedeemNFT from "./components/Pages/Redeem";
import Landing from "./components/Pages/LandingPage";
import Navbars from "./components/Navbar";

function App() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const IsMobile = windowDimension <= 800;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
    setIsMobile(IsMobile);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    setIsMobile(IsMobile);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [IsMobile]);

  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Landing isMobile={isMobile} />} />
          <Route
            exact
            path="/section"
            element={<Landing isMobile={isMobile} />}
          />
          <Route exact path="/tickets/buy" element={<BuyTickets />} />
          <Route exact path="/tickets/show" element={<ShowTickets />} />
          <Route exact path="/tickets/:id/redeem" element={<RedeemNFT />} />
          <Route exact path="/tickets/:id/qrcode" element={<ShowQRcode />} />
          <Route exact path="/tickets/:id/poap" element={<Poap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
