import React, { useState, useEffect } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Web3Modal from "web3modal";
import web3 from "./ethereum/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import axios from "axios";

// import TicketToken from "./ethereum/TicketToken";
// import ProtectedRoute from "./utils/ProtectedRoute";

import BuyTickets from "./components/Pages/BuyTicket";
import ShowQRcode from "./components/Pages/ShowQRcode/index.js";
import Poap from "./components/Pages/Poap";
import ShowTickets from "./components/Pages/HaveTicket";
import RedeemNFT from "./components/Pages/Redeem";
import Landing from "./components/Pages/LandingPage";
import Navbars from "./components/Navbar";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    // options: {
    //   infuraId: infuraId, // required
    // },
    rpc: {
      80001:
        "https://polygon-mumbai.g.alchemy.com/v2/T95ylN-bR7zmaXiaZkP0R1sOObutgv-M",
    },
  },
};

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

let provider;

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

  const [account, setaccount] = useState("");
  const [chainId, setChainId] = useState();
  const [haveTokens, setHaveTokens] = useState(false);

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
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  useEffect(() => {
    changeNetwork();
  }, [chainId]);

  const onConnectWallet = async () => {
    console.log("connecting wallet...");
    console.log("cached provider", web3Modal.cachedProvider);
    try {
      provider = await web3Modal.connect();
    } catch (err) {
      console.log("Could not get a wallet connection", err);
      return;
    }
    web3.setProvider(provider);
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
  };

  const onDisconnect = async (e) => {
    e.preventDefault();

    console.log(
      "cached provider before provider.close(): ",
      web3Modal.cachedProvider
    );
    console.log("Killing the session", web3.currentProvider);
    console.log("web3.givenProvider", web3.givenProvider);

    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    console.log(
      "cached provider after provider.close(): ",
      web3Modal.cachedProvider
    );
    web3Modal.clearCachedProvider();
    console.log("cached provider after clear: ", web3Modal.cachedProvider);
    provider = null;
    setaccount("");
    setHaveTokens(false);
    window.location.reload();
  };

  // const checkForTickets = async () => {
  //   try {
  //     const userAddress = account;
  //     console.log("user address: ", userAddress);

  //     const tid = BigInt(
  //       "1719757583868960775909331762124959402016076508804645162510781236870381570"
  //     );

  //     for (
  //       let tokenId = tid;
  //       tokenId < tid + BigInt(30);
  //       tokenId = tokenId + BigInt(1)
  //     ) {
  //       const balance = await TicketToken.methods
  //         .balanceOf(userAddress.toString(), tokenId)
  //         .call();

  //       // console.log("token id: ", tokenId);

  //       // console.log("Ticket token balance: ", balance);

  //       if (balance > 0) setHaveTokens(true);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const checkForUnredeemedTickets = async () => {
    try {
      const url = `https://api-main.doingud.work/creation/nft?owner=${account}`;
      const { data } = await axios.get(url);

      if (data.items.length > 0) setHaveTokens(true);
    } catch (err) {
      console.log(err);
    }
  };

  const checkForRedeemedTickets = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/wallet/${account}`;
      const { data } = await axios.get(url, {
        headers: {
          validate: "alpha romeo tango",
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
    async function listenMMAccount() {
      try {
        window.ethereum.on("accountsChanged", async function () {
          // Time to reload your interface with accounts[0]!
          const accounts = await web3.eth.getAccounts();
          setaccount(accounts[0]);
          console.log(accounts);
          window.location.reload();
        });
      } catch (err) {
        console.log("Browser wallet not installed!");
      }
    }

    listenMMAccount();
  }, []);

  useEffect(() => {
    onConnectWallet();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbars
          account={account}
          onConnectWallet={onConnectWallet}
          onDisconnect={onDisconnect}
          haveTokens={haveTokens}
        />
        <Routes>
          <Route exact path="/" element={<Landing isMobile={isMobile} />} />
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
            permit={true}
            exact
            path="/tickets/:id/redeem"
            element={<RedeemNFT account={account} />}
          />
          <Route
            permit={true}
            exact
            path="/tickets/:id/qrcode"
            element={<ShowQRcode account={account} />}
          />
          <Route
            permit={true}
            exact
            path="/tickets/:id/poap"
            element={<Poap account={account} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
