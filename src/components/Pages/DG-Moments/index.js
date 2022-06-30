import React from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/Dgmoments.svg";
import { Footer, Description2, Question } from "../Scavenger-Play";
import { Title1 } from "../Scavenger-Play";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";

export const Banner = styled.div`
  background-image: url(${HeaderImage});
  width: 120%;
  height: 111px;
`;

const Title2 = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  text-align: left;
  line-height: 100%;
  margin-left: 20px;
  color: #2b2b2b;
`;

const Container = styled.div`
  padding: 0 22px;
`;

const DgMoments = () => {
  return (
    <>
      <Banner />

      <Title1>DoGud</Title1>
      <Title2>Momentos</Title2>
      <Container>
        <Description2>
          Did you know that your acts of kindness can become NFTs?!
          <br />
          <br /> At DoinGud, we believe in recognizing and celebrating acts of
          kindness, spreading that love to the world. We invite the ETHBarcelona
          community to complete “DoGud” challenges, capture them, and transform
          them into NFTs.
          <br />
          <br /> If you do, you can win a prize!{" "}
        </Description2>
      </Container>
      <Accordion>
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header className="">
            <Question>How to play?</Question>
          </Accordion.Header>
          <Accordion.Body className="reward">
            1. Go to landing page url here. <br />
            2. Choose any DoGud challenge and complete it.
            <br />
            3. Describe how you did it.
            <br /> 4. Upload a photo of yourself completing the challenge.
            <br /> 5. Mint it!
            <br /> 6. Once you’ve completed 5 DoGud challenges, you can claim
            your reward in DoinGud’s booth.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header className="">
            <Question>DoGud Challenges</Question>
          </Accordion.Header>
          <Accordion.Body className="reward"></Accordion.Body>
        </Accordion.Item>
      </Accordion>

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

export default DgMoments;
