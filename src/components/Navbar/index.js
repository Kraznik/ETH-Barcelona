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

const Heading = styled(NavLink)`
  color: red;
`;

const TicketBox1 = styled.div``;

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container className="bar">
          {/* <Navbar.Brand href="" className="text1"> Program
          </Navbar.Brand> */}
          <Navbar.Brand href="/" className="logo">
            <img alt="" src={Logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#faq" className="text">
                FAQ
              </Nav.Link>

              {/* <Nav.Link className="text3">Program</Nav.Link> */}
              <TicketBox1>
                <Nav.Link eventKey={2} className="text">
                  <Heading exact to="/tickets/buy">
                    {" "}
                    Tickets
                  </Heading>
                </Nav.Link>
              </TicketBox1>
              <button href="" className="text">
                Connect Wallet
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
