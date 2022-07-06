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
import { config } from "../../../config/config";

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
  const [topSpeakers, setTopSpeakers] = useState([]);
  const navigate = useNavigate();

  const fetchSpeakerLeaderboard = async () => {
    const url = `${config.apiBaseUrl}/speakers-leaderboard`;
    const { data } = await axios.get(url, options);
    console.log(data);

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
        <Info style={{ width: "5vw" }}>{index + 1} </Info>
        <Info style={{ width: "5vw" }}>{ticketId}</Info>
        <Info style={{ width: "10vw" }}>{count}/130</Info>
        <Activity style={{ width: "20vw" }}>{lastActivity}</Activity>
      </LeaderboardBox>
    );
  };

  useEffect(() => {
    fetchSpeakerLeaderboard();
  }, []);

  const fetchTopSpeakers = async () => {
    const url = `${config.apiBaseUrl}/topSpeakers`;
    const { data } = await axios.get(url, options);
    // console.log(data);
    let listOfCards = [];

    if (data.count.length) {
      // we have all the counts
      // console.log(data.count);
      var topLen = 0;
      var k = 0;
      for (let i = 0; i < data.count.length && topLen < 5; i++) {
        //&& k < 5
        k += data.count[i];
        // console.log("rank: ", data.count[i]);

        for (
          let j = 0;
          j < data.data[data.count[i]].length && topLen < 5;
          j++
        ) {
          topLen++;
          const speakerId = data.data[data.count[i]][j];
          const rank = data.count[i];
          console.log("speaker id: ", speakerId);
          const res = await axios.get(
            `${config.apiBaseUrl}/speakersPage/${speakerId}`,
            options
          );
          const speakerName = res.data.name;
          console.log(speakerName);
          const card = renderTopSpeakerRow(i, speakerName, rank);
          listOfCards.push(card);

          // print row here;
          // data is as follows
          // data.data[data.count[i]][j] is the speaker id
          // data.count[i] is the rank
        }
      }
    } else {
      return;
      // case for when leaderboard is empty
    }

    // const top10 = data.filter((details, index) => index < 10);
    // console.log(top10);

    // let listOfCards = [];
    // data.map((row, index) => {
    //   const currentDate = new Date();
    //   const lastActivity = new Date(row.updatedAt);
    //   const getSeconds = Math.floor((currentDate - lastActivity) / 1000);
    //   const getMinutes = Math.floor(getSeconds / 60);
    //   const getHours = Math.floor(getMinutes / 60);
    //   const getDays = Math.floor(getHours / 24);

    //   if (getDays > 0) {
    //     var lastActivityTime = getDays + " days ago";
    //   } else if (getHours > 0) {
    //     var lastActivityTime = getHours + " hours ago";
    //   } else if (getMinutes > 0) {
    //     var lastActivityTime = getMinutes + " minutes ago";
    //   } else {
    //     var lastActivityTime = getSeconds + " seconds ago";
    //   }

    // if (index < 10 && row.count > 0) {
    //   const card = renderTopSpeakerRow(
    //     index,
    //     row.ticketId,
    //     row.count,
    //     lastActivityTime
    //   );
    //   listOfCards.push(card);
    // } else {
    //   return;
    // }
    // });
    setTopSpeakers(listOfCards);
    // setLeaderboard(listOfCards);
  };

  const renderTopSpeakerRow = (index, speakerName, count) => {
    return (
      <LeaderboardBox key={speakerName}>
        {/* <Info style={{ width: "30px" }}>{index + 1} </Info> */}
        <Info style={{ width: "50vw" }}>{speakerName}</Info>
        <Info style={{ width: "30px" }}>{count}</Info>
        {/* <Activity>{lastActivity}</Activity> */}
      </LeaderboardBox>
    );
  };

  useEffect(() => {
    fetchTopSpeakers();
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

      <Title3 className="top-10">Top 5 Speakers</Title3>
      <LeaderboardContainer>
        {/* <Titles>RANK</Titles> */}
        <Titles style={{ width: "50vw" }}>Speaker Name</Titles>
        <Titles>Followers</Titles>
        {/* <Titles>LAST Activity</Titles> */}
        {topSpeakers}
      </LeaderboardContainer>

      <Container>
        <img src={BS} className="bs"></img>
        <Title3>Top 10 Collectors</Title3>

        <LeaderboardContainer>
          <Titles style={{ width: "5vw" }}>RANK </Titles>
          <Titles style={{ width: "10vw" }}>TicketID </Titles>
          <Titles style={{ width: "20vw" }}>NFTS </Titles>
          <Titles style={{ width: "10vw" }}>LAST Activity</Titles>
          {leaderboard}
        </LeaderboardContainer>
      </Container>

      <Footer>
        <div className="ft">
          <a href="/speakersCollection">
            <img src={DoinGud} className="dg"></img>
          </a>
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
