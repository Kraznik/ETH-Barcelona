import React from "react";
import {
  Navbar,
  Container,
  Brand,
  Toggle,
  collapse,
  Link,
  NavDropdown,
  Item,
  Divider,
  Nav,
} from "react-bootstrap";
import "./style.css";
import Logo from "../../assets/logo.svg";
const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container className="bar">
          <Navbar.Brand href="#home" className="text1">
            Program
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="logo">
            <img alt="" src={Logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {/* <Nav>
              <Nav.Link href="#faq" className="text">
                FAQ
              </Nav.Link>

<<<<<<< Updated upstream
              <Nav.Link className="text3">Program</Nav.Link>
              <Nav.Link eventKey={2} className="text">
                Tickets
              </Nav.Link>
            </Nav>
=======

              <TicketBox1>
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
              </TicketBox1>

              {account === "" || typeof account === "undefined" ? (
                <button href="" className="text" onClick={onConnectWallet}>
                  Connect Wallet
                </button>
              ) : (
                <button onClick={onDisconnect}>
               
                  <h3>
                    <span>{userAddress}</span>
                  </h3>
                </button>
              )}
            </Nav> */}
>>>>>>> Stashed changes
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
