import React from "react";
import Circle from "../../Circle";
import FAQ from "../../FAQ";
import Footer from "../../Footer/index2";
import Speakers from "../../Speakers";
import Sponsers from "../../Sponsers/index2";
import Intro from "../../Intro/index2";
import Hero from "../../Dual/index2";
import Navbars from "../../Navbar";
import Apply from "../../Apply/index2";

const index = ({ isMobile }) => {
  return (
    <>

      <Intro isMobile={isMobile}></Intro>
      <Circle></Circle>
      <Apply />
      <Hero isMobile={isMobile}></Hero>
      <Sponsers />
      <FAQ></FAQ>
      
      <Footer></Footer>
    </>
  );
};

export default index
;
