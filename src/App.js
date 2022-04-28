import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BuyTickets from "./components/Pages/BuyTicket";
import ShowQRcode from "./components/Pages/ShowQRcode/index.js"
import Poap from "./components/Pages/Poap";
import ShowTickets from "./components/Pages/HaveTicket";
import RedeemNFT from "./components/Pages/Redeem";
import Landing from "./components/Pages/LandingPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Landing />
      <Routes>
      <Route path="/" exact components={() => <Landing />} />
        <Route path="/Poap" exact components={() => <Poap />} />
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
