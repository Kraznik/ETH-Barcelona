import "./App.css";
import {Route, Routes, Redirect} from "react-router-dom";
import Circle from "./components/Circle";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import Sponsers from "./components/Sponsers";
import Intro from "./components/Intro";
import Hero from "./components/Dual";
import Navbars from "./components/Navbar";
import BuyTickets from "./components/Pages/BuyTicket";
import ShowQRcode from "./components/Pages/ShowQRcode/index.js"
import Poap from "./components/Pages/Poap";
import ShowTickets from "./components/Pages/HaveTicket";
import RedeemNFT from "./components/Pages/Redeem";

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Intro></Intro>
      <Circle></Circle>
      <Hero></Hero>
      <FAQ></FAQ>
      <Footer></Footer>

      <Routes>
        <Route path="/Poap" />

      </Routes>

      
    </div>
  );
}

export default App;
