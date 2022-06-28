import React from "react";
import { Footer, Header } from "../Speaker-Claim";
import DoinGud from "../../../assets/ETH-BCN.svg";
import Twitter from "../../../assets/ETH-Twitter.svg";
import Instagram from "../../../assets/ETH-Insta.svg";
import styled from "styled-components";
import Star from ".././../../assets/SS.png";
import {
  TicketInput,
  Title3,
  CircleOut,
  CircleIn,
  Name,
  Input,
} from "../Speaker-Claim";

export const Info = styled.div`
  background: #354b37;
  height: 380px;
  padding: 30px 0 0 0;
`;

export const Title = styled.div`
  font-family: "Dahlia";
  font-style: normal;

  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  padding: 0 56px;
  /* identical to box height, or 117% */

  text-align: center;
  letter-spacing: 0.04em;

  color: #ffd731;
`;

export const Title2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 57px;
  /* or 116% */

  text-align: center;
  letter-spacing: 0.04em;

  color: #ffd731;
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  /* or 121% */
  padding: 0 47px;
  margin: 30px 0 0 0;

  display: flex;
  align-items: center;
  text-align: center;
  color: #ffd731;
`;

const SpeakerHomePage = () => {
  return (
    <>
      <Header></Header>

      <Info>
        <Title>SPEAKERS</Title>
        <Title2>Collection</Title2>
        <Description>
          Attenders are encourage to collect their favorite talkers by meeting
          them and scanning their Speaker Card!
        </Description>
        <img src={Star} className="s"></img>
      </Info>



      <Footer>
        <div className="ft">
          <img src={DoinGud} className="dg"></img>
          <img src={Instagram} className="social"></img>
          <img src={Twitter} className="social"></img>
        </div>
      </Footer>
    </>
  );
};

export default SpeakerHomePage;
