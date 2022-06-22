import React, { useState } from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/Back.png";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";

export const Container = styled.div`
  background: #f6f7fb;
`;

export const Banner = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  background-repeat: no-repeat;
  height: 111px;
`;

export const Title1 = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  margin: 11px 19px 0 19px;
  text-align: left;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #2b2b2b;
`;

export const Title2 = styled.div`
  font-family: "GT Flexa";
  font-style: normal;
  font-weight: 300;
  font-size: 115px;
  margin: 0 19px;
  text-align: left;
  line-height: 100%;
  /* identical to box height, or 115px */
  letter-spacing: -0.01em;
  color: #2b2b2b;
`;

const Description = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  margin: 30px 25px 40px 20px;
  text-align: left;
  color: #667079;
`;

export const InputContainer = styled.div`
  background: #ffffff;
  padding: 40px 67px 0 23px;
  padding-bottom: 68px;
`;

export const Title3 = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: left;
  line-height: 32px;
  /* or 133% */

  letter-spacing: -0.04em;
`;

export const Description2 = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  margin: 11px 0 0 0px;
  text-align: left;
  color: #667079;
`;

export const TikcetContainer = styled.div`
  display: inline-block;
  width: 311px;
`;

export const Question = styled.div`
  font-size: 24px;
  font-family: "GTDB";
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.04em;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Input = styled.div`
  float: left;
`;

export const Submit = styled.button`
  width: 150px;
  height: 56px;
  display: inline-block;
  background: #2b2b2b;
  border-bottom-right-radius: 48px;
  border-top-right-radius: 48px;
  margin-top: 24px;
  margin-left: -15px;
  justify-content: center;
  align-items: center;
  padding: auto 40px;
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid #f2f2f2;
  /* identical to box height, or 100% */
  letter-spacing: -0.01em;
  /* white */
  color: #ffffff;
`;

export const Footer = styled.div`
  height: 119.3px;
  background: #2b2b2b;
  width: 100%;
  padding: 30px 24px 30px 22px;
`;

const ScavengerPlay = () => {
  const [ticketId, setTicketId] = useState();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Banner></Banner>
        <Title1>DoGood</Title1>
        <Title2>SCAVENGER HUNT</Title2>
        <Description>
          The Do Good scavenger hunt is a competition that celebrates the action
          of collecting NFTs for a better world. There are 8 QR codes hiding
          around ETHBarcelona venue, claim them all and win huge prizes.
        </Description>

        <Accordion>
          <Accordion.Item eventKey="1" className="">
            <Accordion.Header className="">
              <Question>How to play? </Question>
            </Accordion.Header>
            <Accordion.Body className="reward">
              1. Enter your Ticket ID. <br></br>2. Tap each heart piece to get a
              clue. <br></br>3. Find the QR Code around the venue.<br></br> 4.
              Scan the QR anc claim your NFT.<br></br> 5. Collect and get
              rewards.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="">
            <Accordion.Header className="">
              <Question>Rewards </Question>
            </Accordion.Header>
            <Accordion.Body className="reward">
              In addition to the talks, discussions, and networking
              opportunities, we'll be having art installations, musical
              performances, and special events to maximize the fun during your
              time at ETHBarcelona.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <InputContainer>
          <Title3>Enter your Ticket ID and start hunting NFTs</Title3>
          <Description2>
            You find the ticket ID it on your ETHBarcelona ticket
          </Description2>
          <TikcetContainer>
            <Input>
              <br />
              <input
                type="number"
                placeholder="TicketID"
                className="ticketidinput"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              ></input>
              <br />
            </Input>
            <Submit
              onClick={() =>
                navigate(`/details/${ticketId}`, { replace: true })
              }
            >
              Lets Play
            </Submit>
          </TikcetContainer>
        </InputContainer>

        <Footer>
          <div className="ft">
            <img src={DoinGud} className="dg"></img>
            <img src={Instagram} className="social"></img>
            <img src={Twitter} className="social"></img>

          </div>
          <p className="rights">        © DoinGud. All Right Reserved. </p>
 
        </Footer>
      </Container>
    </>
  );
};

export default ScavengerPlay;
