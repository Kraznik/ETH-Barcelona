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
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/section" element={<Landing />} />
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
