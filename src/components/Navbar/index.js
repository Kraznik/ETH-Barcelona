import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Container,Navbar, Brand} from "react-bootstrap";

const Header = () => {
  

  return (
    <>
<Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
    </>
  );
};

export default Header;