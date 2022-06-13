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

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    // console.log("switch network:", { chainId: "0x1" });
    await window.ethereum.request({
      // method: "wallet_addEthereumChain",
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: `0x${Number(80001).toString(16)}`, // mumbai = 80001 // polygon = 137
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
    console.log({ chainId });
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

  const checkForUnredeemedTickets = async () => {
    try {
      const url = `https://api-main.doingud.work/creation/nft?owner=${account}`;
      const { data } = await axios.get(url);

      // if (data.items.length > 0) setHaveTokens(true);

      const ethBcnNftTypeId1 =
        "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000004";

      const ethBcnNftTypeId2 =
        "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000005";

      const orgNftTypeId =
        "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000006";

      let ticketFound,
        orgFound = false;

      data.items.map((token) => {
        if (ticketFound && orgFound) return;
        if (
          token.typeId === ethBcnNftTypeId1 ||
          token.typeId === ethBcnNftTypeId2
        ) {
          // console.log("type id matched");
          setHaveTokens(true);
          ticketFound = true;
          // return;
        }

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
      const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/wallet/${account}`;
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
          <Route exact path="/moments" element={<Moments />} />
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

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
