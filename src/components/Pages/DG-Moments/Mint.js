import React from "react";;
import { Banner, Title2, Container, Submit } from ".";
import { Footer, Description2, Question } from "../Scavenger-Play";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import { Title1 } from "../Scavenger-Play";




const Mint = () => {
  return (
    <>
      <Banner />
      <Title1>DoGud</Title1>
      <Title2>Momentos</Title2>
      <Container>
        <Description2>
        Submit your moments of kidness and share with the community how to build a better world based on LOVE.
        </Description2>
      </Container>



      <Submit>Mint Challenge</Submit>

      <Footer>
        <div className="ft">
          <a href="/dgmoments">
            <img src={DoinGud} className="dg"></img>
          </a>
          <a href="https://www.instagram.com/ethbarcelona/">
            {" "}
            <img src={Instagram} className="social"></img>
          </a>

          <a href="https://twitter.com/eth_barcelona">
            {" "}
            <img src={Twitter} className="social"></img>
          </a>
        </div>
        <p className="rights"> © DoinGud. All Right Reserved. </p>
      </Footer>
    </>
  );
};

export default Mint;
