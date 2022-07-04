import React, { useEffect, useState } from "react";
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
  Input,
} from "../Speaker-Claim";
import {
  LeaderboardContainer,
  LeaderboardBox,
  Titles,
  Info,
  Activity,
} from "../Scavenger-Hunt-Details";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  /* or 156% */
  padding-top: 15px;
  margin-bottom: 20px;
  text-align: center;
  color: #354b37;
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
  background: #ffffff;
  padding-bottom: 50px;
`;

export const InputContainer = styled.div`
  height: 285px;

  background: #ffd731;
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const SpeakerHomePage = () => {
  const [ticketId, setTicketId] = useState();
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  const fetchSpeakerLeaderboard = async () => {
    const url =
      "https://eth-barcelona.kraznikunderverse.com/speakers-leaderboard";
    const { data } = await axios.get(url, options);
    // console.log(data);

    const top10 = data.filter((details, index) => index < 10);
    console.log(top10);

    let listOfCards = [];
    data.map((row, index) => {
      const currentDate = new Date();
      const lastActivity = new Date(row.updatedAt);
      const getSeconds = Math.floor((currentDate - lastActivity) / 1000);
      const getMinutes = Math.floor(getSeconds / 60);
      const getHours = Math.floor(getMinutes / 60);
      const getDays = Math.floor(getHours / 24);

      if (getDays > 0) {
        var lastActivityTime = getDays + " days ago";
      } else if (getHours > 0) {
        var lastActivityTime = getHours + " hours ago";
      } else if (getMinutes > 0) {
        var lastActivityTime = getMinutes + " minutes ago";
      } else {
        var lastActivityTime = getSeconds + " seconds ago";
      }

      if (index < 10 && row.count > 0) {
        const card = renderLeaderboardRow(
          index,
          row.ticketId,
          row.count,
          lastActivityTime
        );
        listOfCards.push(card);
      } else {
        return;
      }
    });
    setLeaderboard(listOfCards);
  };

  const renderLeaderboardRow = (index, ticketId, count, lastActivity) => {
    return (
      <LeaderboardBox key={index}>
        <Info>{index + 1} </Info>
        <Info>{ticketId}</Info>
        <Info>{count}/130</Info>
        <Activity>{lastActivity}</Activity>
      </LeaderboardBox>
    );
  };

  useEffect(() => {
    fetchSpeakerLeaderboard();
  }, []);

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
        <Title3>NFTicket ID</Title3>
        <Input>
          <br />
          <input
            type="number"
            placeholder="NFTicket ID"
            className="ticketid"
            min={1}
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
          ></input>
          <br />
        </Input>

        <CircleOut onClick={() => navigate(`/speakers/${ticketId}`)}>
          <CircleIn>Your Collection</CircleIn>
        </CircleOut>
      </InputContainer>

      <Title3 className="top-10">Top 10</Title3>
        <LeaderboardContainer>
          <Titles>RANK </Titles>
          <Titles>NFT ID </Titles>
          <Titles>NFTS </Titles>
          <Titles>LAST Activity</Titles>
          <LeaderboardBox>
            <Info>1 </Info>
            <Info>Scott More</Info>
            <Info>55</Info>
            <Activity>one minute ago</Activity>
          </LeaderboardBox>
          <LeaderboardBox>
            <Info>44 </Info>
            <Info>Scott More</Info>
            <Info>3</Info>
            <Activity>one minute ago</Activity>
          </LeaderboardBox>
          <LeaderboardBox>
            <Info>33 </Info>
            <Info>Scott More</Info>
            <Info>55</Info>
            <Activity>three minute ago</Activity>
          </LeaderboardBox>
        </LeaderboardContainer>

      <Container>
        <img src={BS} className="bs"></img>
        <Title3>Top 10 Collectors</Title3>

        <LeaderboardContainer>
          <Titles>RANK </Titles>
          <Titles>TicketID </Titles>
          <Titles>NFTS </Titles>
          <Titles>LAST Activity</Titles>
          {leaderboard}
        </LeaderboardContainer>
      </Container>

      <Footer>
        <div className="ft">
          <a href="/speakerHomePage">
          <img src={DoinGud} className="dg"></img></a>
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
