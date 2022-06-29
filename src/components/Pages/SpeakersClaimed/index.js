import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title2 } from "../Scavenger-Play";
import { Header } from "../Speaker-Claim";
import styled from "styled-components";
import S from "../../../assets/S.png";
import DoinGud from "../../../assets/ETH-BCN.svg";
import Twitter from "../../../assets/ETH-Twitter.svg";
import Instagram from "../../../assets/ETH-Insta.svg";
import { Footer } from "../Speaker-Claim";
import Star from ".././../../assets/SS.png";

export const TicketContainer = styled.div`
  background: #354b37;
  height: 180px;
`;

export const Claimed = styled.div`
  margin: 54px 0 56px 0;
`;

export const TicketId = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 56px;
  /* identical to box height, or 122% */
  padding: 20px 0 0 0;
  text-align: center;

  color: #ffd731;
`;
export const SpeakerContainer = styled.div`
  padding: 30px 0 0 0;
`;

export const Title = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 56px;
  /* or 114% */

  text-align: center;

  color: #354b37;
`;

export const NFT = styled.div`
  font-family: "Dahlia-D";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 56px;
  /* identical to box height, or 187% */
  margin-top: -10px;
  text-align: center;

  color: #ffd731;
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const SpeakersClaimed = () => {
  const { ticketId } = useParams();
  const [listSpeakers, setListSpeakers] = useState([]);

  const fetchUserSpeakerDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/speakers/${ticketId}`;
      const { data } = await axios.get(url, options);
      const speakers = data.data;

      let listCards = [];
      speakers.map((speaker) => {
        const card = renderCard(speaker);
        listCards.push(card);
      });
      setListSpeakers(listCards);
    } catch (err) {
      console.error(err);
    }
  };

  const renderCard = (speakerId) => {
    return (
      <>
        <h1>{speakerId}</h1>
      </>
    );
  };

  useEffect(() => {
    fetchUserSpeakerDetails();
  }, []);

  return (
    <>
      <Header></Header>
      <TicketContainer>
        <TicketId>{ticketId}</TicketId>
        <NFT>NFT Ticket Id</NFT>
        <img src={Star} className="star"></img>
      </TicketContainer>

      <SpeakerContainer>
        <Title>Speaker Cards</Title>
        <Title>Collected!</Title>
        <Title className="number"> /100</Title>
        <Claimed>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
          <img src={S} className="claimed"></img>
        </Claimed>
      </SpeakerContainer>

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
      {/* 

      <div>Speakers Claimed for ticket id ${ticketId}</div>
      {listSpeakers} */}
    </>
  );
};

export default SpeakersClaimed;
