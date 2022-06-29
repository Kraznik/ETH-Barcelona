import React from "react";
import { Footer, Header } from "../Speaker-Claim";
import DoinGud from "../../../assets/ETH-BCN.svg";
import Twitter from "../../../assets/ETH-Twitter.svg";
import Instagram from "../../../assets/ETH-Insta.svg";
import styled from "styled-components";
import Star from ".././../../assets/SS.png";
import BS from "../../../assets/BS.svg";
import {
  TicketInput,
  CircleOut,
  CircleIn,
  Name,
  Input
} from "../Speaker-Claim";
import { LeaderboardContainer, LeaderboardBox , Titles, Info, Activity} from "../Scavenger-Hunt-Details";

export const Infos = styled.div`
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

export const Title3 = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 56px;
/* or 156% */
padding-top:15px;
margin-bottom:20px;
text-align: center;
color: #354B37;


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

export const Container = styled.div`
background: #FFFFFF;
padding-bottom:50px;
`

export const InputContainer = styled.div`
height: 285px;

background: #FFD731;
`

const SpeakerHomePage = () => {
  return (
    <>
      <Header></Header>

      <Infos>
        <Title>SPEAKERS</Title>
        <Title2>Collection</Title2>
        <Description>
          Attenders are encourage to collect their favorite talkers by meeting
          them and scanning their Speaker Card!
        </Description>
        <img src={Star} className="s"></img>
      </Infos>

      <InputContainer>
      <Title3>NFT Ticket ID</Title3>
      <Input>
            <br />
            <input
              type="number"
              placeholder="Ticket ID"
              className="ticketid"
            ></input>
            <br />
          </Input>

          <CircleOut>
            <CircleIn>
               <div>Your Collection</div>
            </CircleIn>
          </CircleOut>

      </InputContainer>

      <Container>
        <img src={BS} className="bs"></img>
        <Title3>Top 10 Collectors</Title3>

        <LeaderboardContainer>
              <Titles>RANK </Titles>
              <Titles>TicketID </Titles>
              <Titles>NFTS </Titles>
              <Titles>LAST Activity</Titles>
              <LeaderboardBox>
                <Info>1 </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>
              <LeaderboardBox>
                <Info>1 </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>
              <LeaderboardBox>
                <Info>1 </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>


            </LeaderboardContainer>
      </Container>



      <Footer>
              <div className="ft">
                <img src={DoinGud} className="dg"></img>
                <a href="https://www.instagram.com/ethbarcelona/">
                  <img src={Instagram} className="social"></img>
                </a>
                <a href="https://twitter.com/eth_barcelona">
                  <img src={Twitter} className="social"></img>
                </a>
              </div>
            </Footer>
    </>
  );
};

export default SpeakerHomePage;
