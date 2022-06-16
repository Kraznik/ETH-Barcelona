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
import {useLocation } from "react-router-dom";


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
  test-align: center;
  border-radius: 50%;

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

const withouSidebarRoutes1 = ["/scavenger"];
const withouSidebarRoutes2 = ["/speakerCard"];
const withouSidebarRoutes3 = ["/details"];



const Navbars = ({ account, onConnectWallet, onDisconnect, haveTokens }) => {


  // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
 // If that's true render null instead of the side

 const { pathname } = useLocation();
  if (withouSidebarRoutes1.some((item) => pathname.includes(item))) return null;
  if (withouSidebarRoutes2.some((item) => pathname.includes(item))) return null;
  if (withouSidebarRoutes3.some((item) => pathname.includes(item))) return null;


  

  // const userAddress = `${account.slice(0, 4)}....${account.slice(-4)}`;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container className="bar">
          <Nav.Link>
            <NavLink exact to="/details/10" className="speaker">
              <Text>Details</Text>
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink exact to="/speakerCard" className="speaker">
              <Text>Speaker Card </Text>
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink exact to="/scavenger" className="speaker">
              <Text>Scavenger </Text>
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink exact to="/scavengerhuntqrcode/1" className="speaker">
              <Text>QR </Text>
            </NavLink>
          </Nav.Link>

          <Nav.Link
            href="https://www.eventbrite.com/e/ethbarcelona-tickets-344163862377?aff=ebdssbdestsearch"
            target={"_blank"}
            className="speaker"
          >
            <Text>Eventbrite </Text>
          </Nav.Link>

          <Navbar.Brand className="logo">
            <NavLink to="/">
              <img alt="" src={Logo} className="d-inline-block align-top" />
            </NavLink>
          </Navbar.Brand>

          <Ticket>
            <Nav.Link href="#faq" className="text">
              <CircleOut>
                <a
                  href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023"
                  target={"_blank"}
                >
                  <CircleIn>Tickets</CircleIn>
                </a>
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
              <Nav.Link href="#speaker" className="speaker2">
                <Text>Speakers </Text>
              </Nav.Link>
              <Nav.Link
                href="https://www.eventbrite.com/e/ethbarcelona-tickets-344163862377?aff=ebdssbdestsearch"
                className="speaker2"
              >
                <Text>Eventbrite </Text>
              </Nav.Link>

              <Desktop>
                <Nav.Link href="#faq" className="text">
                  <CircleOut>
                    <a href="https://doingud.com/creation/0xe570d586fbeb0dc23c46bfcf047ec3e46e88e5a7000000000023">
                      <CircleIn>Tickets</CircleIn>
                    </a>
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
                      {" "}
                      Tickets
                    </Heading>
                  </Nav.Link>
                ) : null}
              </TicketBox1> */}

              {/* {account === "" || typeof account === "undefined" ? (
                <button href="" className="text" onClick={onConnectWallet}>
                  Connect Wallet
                </button>
              ) : (
                <button onClick={onDisconnect}>

                  <h3>
                    <span>{userAddress}</span>
                  </h3>
                </button>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
