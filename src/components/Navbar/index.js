import React from 'react';
import { Navbar,Container,Brand,Toggle,collapse,Link,NavDropdown,Item,Divider,Nav } from 'react-bootstrap';
import "./style.css";
import Logo from "../../assets/logo.svg"
const Navbars = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='bar'>
  <Container className='bar'>
  <Navbar.Brand href="#home" className='text'>Program</Navbar.Brand>
  <Navbar.Brand href="#home" className='text'>Speakers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Navbar.Brand href="#home" className='logo'>
        <img
          alt=""
          src={Logo}
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Nav>
    <Nav>
      <Nav.Link  className='text'>FAQ</Nav.Link>
      <Nav.Link eventKey={2}  className='text'>
        Tickets
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
  )
}

export default Navbars