import React, { useState } from "react";
import {
  Navbar,
  Container,
  Brand,
  Toggle,
  collapse,
  NavDropdown,
  Item,
  Divider,
  Nav,
} from "react-bootstrap";

import "./style.css";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import Wallet from "../../assets/wallet.svg";
import ConnectWalletButton from "../ConnectWalletButton";
import "./style.css";
import Popup from "reactjs-popup";
import Organizer from "../Pages/Organizer";
import WalletPopUp from "../Pages/WalletPopUp";
import Smile from "../../assets/Smile.png";
import Star from "../../assets/Stars.png";
const Heading = styled(NavLink)`
  color: red;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const TicketBox1 = styled.div`
  display: flex;
`;

const CircleOut = styled.div`
  color: #354b37;
  box-sizing: border-box;
  border: 0.8px solid #354b37;
  transform: rotate(-6.41deg);
  width: 122px;
  height: 50px;
  border-radius: 50%;

  &:hover {
    transform: rotate(6.7deg);
  }

  @media screen and (max-width: 900px) {
    width: 102px;
    height: 45px;
  }
`;

const CircleIn = styled.div`
  background: #354b37;
  width: 122px;
  transform: rotate(+6.41deg);
  height: 50px;
  padding: 5% 18% 5% 5%;
  color: white;
  justify-content: center;
  align-items: center;
  test-align: center;
  border-radius: 50%;

  &:hover {
    background: none;
    transform: rotate(-6.41deg);
    color: #354b37;
  }

  @media screen and (max-width: 900px) {
  
width:102px;
height:45px;
  


`;

const Text = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */
  text-align: right;
  letter-spacing: 1px;
  color: #f5c34b;
  padding-top: 10px;
`;

const Ticket = styled.div`
  display: inline-block;
  @media screen and (min-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 900px) {
    margin-left: -20px;
  }
`;

const Desktop = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const withouSidebarRoutes1 = [
  "/speakersCollection",
  "/speakerCard",
  "/moments",
  "/ethccmoments",
  "/speakers",
  "/livestream",
];

const Navbars = ({
  account,
  onConnectMetamask,
  onConnectWalletConnect,
  onConnectCoinbase,
  onDisconnect,
  haveTokens,
  isOrganizer,
}) => {
  const { pathname } = useLocation();
  if (withouSidebarRoutes1.some((item) => pathname.includes(item))) return null;

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const userAddress = `${account?.slice(0, 4)}....${account?.slice(-4)}`;
  return (
    <div>
      {/* <div>
        <a href="/livestream">
          <div className="mover">
            <marquee className="move">
              <img src={Star} className="stream"></img>
              <div className="watch">WATCH NOW</div>
              <img src={Smile} className="stream"></img>
              <div className="watch">LIVE STREAMING</div>
              <img src={Star} className="stream"></img>
              <div className="watch">WATCH NOW</div>
              <img src={Smile} className="stream"></img>
              <div className="watch">LIVE STREAMING</div>
              <img src={Star} className="stream"></img>
              <div className="watch">WATCH NOW</div>
              <img src={Smile} className="stream"></img>
              <div className="watch">LIVE STREAMING</div>
            </marquee>
          </div>
        </a>
      </div> */}
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container className="bar">
          <Nav.Link
            href="https://www.youtube.com/@ethbarcelona"
            className="speaker"
          >
            <Text>Past Talks </Text>
          </Nav.Link>
          {/* <Nav.Link
            href="https://ethbarcelona.notion.site/ETHBarcelona-Side-Events-1df2e6e28f90462d81059261a7dc9231"
            target={"_blank"}
            className="speaker"
          >
            <Text>Side Events </Text>
          </Nav.Link>
          <Nav.Link
            href="https://www.eventbrite.com/e/ethbarcelona-tickets-344163862377?aff=ebdssbdestsearch"
            target={"_blank"}
            className="speaker"
          >
            <Text>Eventbrite </Text>
          </Nav.Link>
          <Nav.Link
            href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023"
            target={"_blank"}
            className="speaker"
          >
            <Text>NFTickets </Text>
          </Nav.Link> */}
          <Navbar.Brand href="/" className="logo">
            <img alt="" src={Logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          {/* {account === "" || typeof account === "undefined" ? (
            <>
              <button
                type="button"
                className="walletmobile"
                onClick={() => setOpen((o) => !o)}
              >
                Connect
                <br /> Wallet
              </button>
            </>
          ) : (
            <button onClick={onDisconnect} className="walletmobile">
              <h3>
                <span className="address">{userAddress}</span>
              </h3>
            </button>
          )} */}
          {/* <Ticket>
            <Nav.Link href="#faq" className="text">
              <CircleOut>
                <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a700000000001c">
                <CircleIn>
                  <Heading
                    style={{ color: "white" }}
                    exact
                    to={haveTokens ? "/tickets/show" : "/tickets/buy"}
                  >
                    Redeem
                  </Heading>
                </CircleIn>
                </a>
                <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023">
                  <CircleIn>NFTickets</CircleIn>
                </a>
              </CircleOut>
            </Nav.Link>
          </Ticket> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav> */}
            {/* <Nav> */}
              {/* {isOrganizer ? (
                <Nav.Link className="text">
                  <NavLink to="/organizer" className="text">
                    <Text>Organizer</Text>
                  </NavLink>
                </Nav.Link>
              ) : null} */}
              {/* <Nav.Link
                href="https://guidebook.com/g/#/guides/ethbcnapp/schedule/sessions?scheduleDayPosition=2022-07-06&scheduleIndexInDayPosition=0"
                className="speaker2"
              >
                <Text>Agenda </Text>
              </Nav.Link>

              <Nav.Link href="#faq" className="speaker2">
                <Text>FAQ</Text>
              </Nav.Link> */}
              {/* <Nav.Link
                href="https://www.eventbrite.com/e/ethbarcelona-tickets-344163862377?aff=ebdssbdestsearch"
                className="speaker3"
              >
                <Text className="speaker3">Eventbrite </Text>
              </Nav.Link> */}

              {/* <Nav.Link href="#speaker" className="speaker2">
                <Text>Speakers </Text>
              </Nav.Link>
              <Nav.Link
                href="https://www.eventbrite.com/e/ethbarcelona-tickets-344163862377?aff=ebdssbdestsearch"
                className="speaker2"
                id="Desk"
              >
                <Text>Eventbrite </Text>
              </Nav.Link>
              <Nav.Link
                href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023"
                className="speaker2"
              >
                <Text>NFTickets</Text>
              </Nav.Link> */}
              {/* <Desktop> */}
                {/* <Nav.Link className="text">
                  <CircleOut>
                    <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a700000000001c">
                    <CircleIn>
                      <Heading
                        style={{ color: "white" }}
                        exact
                        to={haveTokens ? "/tickets/show" : "/tickets/buy"}
                      >
                        Redeem
                      </Heading>
                    </CircleIn>
                  </CircleOut>
                </Nav.Link> */}
                {/* </a> */}
                {/* <Nav.Link href="#faq" className="text">
                  <CircleOut>
                    <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023">
                      <CircleIn>NFTickets</CircleIn>
                    </a>
                  </CircleOut>
                </Nav.Link> */}
              {/* </Desktop> */}
              {/* {account === "" || typeof account === "undefined" ? (
                <>
                  <button
                    type="button"
                    className="button"
                    onClick={() => setOpen((o) => !o)}
                  >
                    Connect Wallet
                  </button>

                  <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <WalletPopUp
                      onConnectWalletConnect={onConnectWalletConnect}
                      onConnectCoinbase={onConnectCoinbase}
                      onConnectMetamask={onConnectMetamask}
                      closeModal={closeModal}
                    />
                  </Popup>
                </>
              ) : (
                <button onClick={onDisconnect} className="button">
                  <h3>
                    <img src={Wallet}></img>

                    <span className="">{userAddress}</span>
                  </h3>
                </button>
              )} */}
            {/* </Nav> */}
          {/* </Navbar.Collapse> */}
          {/* <ConnectWalletButton /> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
