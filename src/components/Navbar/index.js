import React from "react";
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
import { NavLink } from "react-router-dom";
import Wallet from "../../assets/wallet.svg";

const Heading = styled(NavLink)`
  color: red;
`;

const TicketBox1 = styled.div`
  display: flex;
`;

const CircleOut = styled.div`
  color: #354b37;
  box-sizing: border-box;
  border: 0.8px solid #354b37;
  transform: rotate(-6.41deg);
  width: 112px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.2s ease-in;

  &:hover {
    transform: rotate(6.7deg);
  }
`;

const CircleIn = styled.div`
  background: #354b37;
  width: 112px;
  transform: rotate(+6.41deg);
  height: 50px;
  padding: 5% 18% 5% 5%;
  color: white;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  border-radius: 50%;
  transition: all 0.2s ease-in;

  &:hover {
    background: none;
    transform: rotate(-6.41deg);
    color: #354b37;
  }
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
  color: #354b37;
  padding-top: 10px;
`;

const Ticket = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 900px) {
    margin-left: 80px;
  }
`;

const Desktop = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Navbars = ({ account, onConnectWallet, onDisconnect, haveTokens }) => {
  const userAddress = `${account.slice(0, 4)}....${account.slice(-4)}`;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container className="bar">
          {/* <Navbar.Brand href="" className="text1"> Program
          </Navbar.Brand> */}
          <Navbar.Brand href="/" className="logo">
            <img alt="" src={Logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>

          <Ticket>
            <Nav.Link href="#faq" className="text">
              <CircleOut>
                {/* <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a700000000001c"> */}
                <CircleIn>
                  <Heading
                    style={{ color: "white" }}
                    exact
                    to={haveTokens ? "/tickets/show" : "/tickets/buy"}
                  >
                    Tickets
                  </Heading>
                </CircleIn>
                {/* </a> */}
              </CircleOut>
            </Nav.Link>
          </Ticket>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#faq" className="text">
                <Text>FAQ </Text>
              </Nav.Link>

              <Desktop>
                <Nav.Link className="text">
                  <CircleOut>
                    {/* <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a700000000001c"> */}
                    <CircleIn>
                      <Heading
                        style={{ color: "white" }}
                        exact
                        to={haveTokens ? "/tickets/show" : "/tickets/buy"}
                      >
                        Tickets
                      </Heading>
                    </CircleIn>
                    {/* </a> */}
                  </CircleOut>
                </Nav.Link>
              </Desktop>

              {/* <Nav.Link className="text3">Program</Nav.Link> */}
              {/* <TicketBox1>
                <Nav.Link eventKey={2} className="text">
                  <Heading exact to="/tickets/buy">
                    {" "}
                    Buy
                  </Heading>
                </Nav.Link>
                {haveTokens ? (
                  <Nav.Link eventKey={2} className="text">
                    <Heading exact to="/tickets/show">
                      Tickets
                    </Heading>
                  </Nav.Link>
                ) : null}
              </TicketBox1> */}

              {account === "" || typeof account === "undefined" ? (
                <button href="" className="text" onClick={onConnectWallet}>
                  Connect Wallet
                </button>
              ) : (
                <button onClick={onDisconnect}>
                  <h3>
                    <img src={Wallet}></img>

                    <span>{userAddress}</span>
                  </h3>
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
