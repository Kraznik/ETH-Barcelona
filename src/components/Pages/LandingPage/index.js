import React from "react";
import Circle from "../../Circle";
import FAQ from "../../FAQ";
import Footer from "../../Footer";
import Speakers from "../../Speakers";
import Sponsers from "../../Sponsers";
import Intro from "../../Intro";
import Hero from "../../Dual";
import Navbars from "../../Navbar";

const Landing = ({ isMobile }) => {
  return (
    <>
      {/* <Navbars></Navbars> */}
      <Intro isMobile={isMobile}></Intro>
      <Circle></Circle>
      <Hero isMobile={isMobile}></Hero>
      <Sponsers></Sponsers>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
};

export default Landing;
