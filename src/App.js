import React, { useState, useEffect } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useWeb3React } from "@web3-react/core";

import web3 from "./ethereum/web3";
import axios from "axios";
import BuyTickets from "./components/Pages/BuyTicket";
import ShowQRcode from "./components/Pages/ShowQRcode/index.js";
import Poap from "./components/Pages/Poap";
import ShowTickets from "./components/Pages/HaveTicket";
import RedeemNFT from "./components/Pages/Redeem";
import Landing from "./components/Pages/LandingPage";
import Navbars from "./components/Navbar";
import Organizer from "./components/Pages/Organizer";
import {
  onDisconnect,
  onConnectMetamask,
  onConnectWalletConnect,
  onConnectCoinbase,
} from "./components/ConnectWalletButton/functions";
import ProtectedRoute from "./utils/ProtectedRoute";
import Moments from "./components/Pages/Moments";
import SpeakerPage from "./components/Pages/Speaker";
import Terms from "./components/Pages/Terms";
import Privacy from "./components/Pages/Privacy/privacy";
import SpeakerHomePage from "./components/Pages/SpeakerHomePage";
import SpeakersClaimed from "./components/Pages/SpeakersClaimed";
import SpeakerClaim from "./components/Pages/Speaker-Claim";

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    // console.log("switch network:", { chainId: "0x1" });
    await window.ethereum.request({
      // method: "wallet_addEthereumChain",
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: `0x${Number(137).toString(16)}`, // mumbai = 80001 // polygon = 137
        },
      ],
    });
  } catch (err) {
    if (err) console.log(err.message);
  }
};

const App = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // const [accounts, setaccount] = useState("");
  const [chainId, setChainId] = useState();
  const [haveTokens, setHaveTokens] = useState(false);

  const [isOrganizer, setIsOrganizer] = useState(false);
  const [orgId, setOrgId] = useState();

  const IsMobile = windowDimension <= 800;

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

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

  const networkChanged = (chainId) => {
    // console.log({ chainId });
    setChainId(chainId);
  };

  useEffect(() => {
    try {
      window.ethereum.on("chainChanged", networkChanged);
    } catch (err) {
      if (err) console.log(err);
    }

    return () => {
      try {
        window.ethereum.removeListener("chainChanged", networkChanged);
      } catch {}
    };
  }, []);

  useEffect(() => {
    try {
      changeNetwork();
    } catch {}
  }, [chainId]);

  const getCollections = async () => {
    try {
      const url = `https://prod.ethbarcelona.kraznikunderverse.com/collection`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      // console.log("data: ", data?.data);
      const collections = data.data;
      return collections;
    } catch (err) {
      console.error(err);
    }
  };

  const checkForUnredeemedTickets = async () => {
    try {
      const url = `https://api.doingud.com/creation/nft?owner=${account}`;
      const { data } = await axios.get(url);

      const collections = await getCollections();
      // console.log("nfts:", data);
      // console.log("collections: ", collections);

      if (
        account === "0xcE007eD9Ed141Cf391933b0800A3cd81246DbE4d" ||
        account === "0x66Dc3BFCD29E24fDDeE7f405c705220E6142e4cD" ||
        account === "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c"
      ) {
        setIsOrganizer(true);
        console.log("organizer access");
        setOrgId("testing");
      }

      const orgNftTypeId =
        "0x459f81227df217c6996ba03e11b973d319e7c6c2000000000000";

      let ticketFound,
        orgFound = false;

      data.items.map((token) => {
        if (ticketFound && orgFound) return;

        collections.map((collection) => {
          if (token.typeId === collection.nftTypeId) {
            setHaveTokens(true);
            ticketFound = true;
          }
        });

        if (token.typeId === orgNftTypeId) {
          setIsOrganizer(true);
          orgFound = true;
          let edition = parseInt(token.id.slice(-8), 16);
          setOrgId(edition);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const checkForRedeemedTickets = async () => {
    try {
      const url = `https://prod.ethbarcelona.kraznikunderverse.com/qrcode/wallet/${account}`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      // console.log(data?.data);
      if (data?.data?.length > 0) setHaveTokens(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (account) {
      checkForRedeemedTickets();
      // checkForTickets();
      checkForUnredeemedTickets();
    }
  }, [account, chainId]);

  useEffect(() => {
    // if(isMobile && (navigator.brave && await navigator.brave.isBrave() || false)) onConnectWalletConnect(activate)
    if (window?.ethereum) onConnectMetamask(activate);
    else if (isMobile) onConnectWalletConnect(activate);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbars
          account={account}
          onConnectWalletConnect={() => onConnectWalletConnect(activate)}
          onConnectCoinbase={() => onConnectCoinbase(activate)}
          onConnectMetamask={() => onConnectMetamask(activate)}
          onDisconnect={() => {
            onDisconnect(deactivate);
            setIsOrganizer(false);
          }}
          haveTokens={haveTokens}
          isOrganizer={isOrganizer}
        />
        <Routes>
          <Route exact path="/" element={<Landing isMobile={isMobile} />} />
          {/* <Route exact path="/moments" element={<Moments />} /> */}
          <Route exact path="/speaker" element={<SpeakerPage></SpeakerPage>} />
          <Route exact path="/terms-and-conditions" element={<Terms />} />
          <Route exact path="/privacy-policy" element={<Privacy />} />

          {/* <Route
            exact
            path="/section"
            element={<Landing isMobile={isMobile} />}
          /> */}
          <Route
            exact
            path="/tickets/buy"
            element={<BuyTickets account={account} />}
          />
          <Route
            exact
            path="/tickets/show"
            element={<ShowTickets account={account} />}
          />
          <Route
            exact
            path="/tickets/:id/redeem"
            element={<RedeemNFT account={account} />}
          />
          <Route
            exact
            path="/tickets/:id/qrcode"
            element={<ShowQRcode account={account} />}
          />
          <Route
            exact
            path="/tickets/:id/poap"
            element={<Poap account={account} />}
          />
          <Route
            exact
            path="/organizer"
            element={
              <ProtectedRoute permit={isOrganizer}>
                <Organizer account={account} orgId={orgId} />
              </ProtectedRoute>
            }
          />
          <Route exact path="/moments" element={<Moments />} />
          {/* <Route
            exact
            path="/moments"
            element={<Navigate to="/speakerHomePage" replace />}
          /> */}
          <Route
            exact
            path="/speakersCollection"
            element={<SpeakerHomePage />}
          />
          <Route
            exact
            path="/speakers/:ticketId"
            element={<SpeakersClaimed />}
          />
          <Route
            exact
            path="/speakerCard/:id/:speakerMap"
            element={<SpeakerClaim />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
