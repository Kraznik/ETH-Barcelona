import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Ticket from "../../../assets/Ticket.png";
import TicketToken from "../../../ethereum/TicketToken";
import { Link } from "react-router-dom";
import axios from "axios";
import viewQR from "../../../assets/viewQR.png";

const Container = styled.div`
  display: inline-block;
  padding: 10%;
`;

const TicketBox = styled.div`
  position: static;
  border: 1px solid black;
  display: inline-block;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 0;
`;

const Title = styled.div`
  font-family: "dahlia";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  letter-spacing: 0.05em;

  /* Black soft */

  color: #2b2b2b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 2px 0px;
`;

const TicketImage = styled.div`
  background-image: url(${Ticket});
  width: 304px;
  height: 268px;
`;

const RedeemedTicketImage = styled.div`
  background-image: url(${viewQR});
  width: 304px;
  height: 268px;
  background-size: 304px 268px;
`;

const TicketId = styled.div`
  font-family: "dahlia";
`;

const DoinGud = styled(Link)``;

const ShowTickets = ({ account }) => {
  const [listCards, setListCards] = useState([]);
  const [listRedeemedTickets, setListRedeemedTickets] = useState([]);

  const getTickets = async () => {
    try {
      const userAddress = account;
      console.log("user address: ", userAddress);

      let listOfCards = [];

      const tid = BigInt(
        "1719757583868960775909331762124959402016076508804645162510781236870381570"
      );

      for (
        let tokenId = tid;
        tokenId < tid + BigInt(30);
        tokenId = tokenId + BigInt(1)
      ) {
        const balance = await TicketToken.methods
          .balanceOf(userAddress.toString(), tokenId)
          .call();

        // console.log("token id: ", tokenId, ": ", balance);

        // console.log("Ticket token balance: ", balance);

        if (balance > 0) {
          // `Ticket#${tokenId - tid + BigInt(1)}`
          let card = renderCard(tokenId);
          listOfCards.push(card);
        }
        // setListCards(listOfCards);
      }
      setListCards(listOfCards);
    } catch (err) {
      console.log(err);
    }
  };

  const getRedeemedTickets = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/wallet/${account}`;
      const { data } = await axios.get(url, {
        headers: {
          validate: "alpha romeo tango",
        },
      });
      console.log(data.data);
      const listCards = [];
      data.data.map((redeemedTkt) => {
        const card = renderRedeemedCard(redeemedTkt.tokenID);
        listCards.push(card);
      });
      setListRedeemedTickets(listCards);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRedeemedTickets();
  }, [account]);

  const renderCard = (tokenId) => {
    return (
      <TicketBox key={tokenId}>
        <Title>ETH BCN NFTicket</Title>
        <TicketImage></TicketImage>
        <TicketId>
          Ticket Id ${parseInt(BigInt(tokenId).toString(16).slice(-5), 16)}{" "}
        </TicketId>
        <DoinGud to={`/tickets/${tokenId}/redeem`}> Redeem NFTicket </DoinGud>
      </TicketBox>
    );
  };

  const renderRedeemedCard = (tokenId) => {
    return (
      <Link
        to={`/tickets/${tokenId}/qrcode`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <TicketBox key={tokenId}>
          <Title>ETH BCN NFTicket</Title>
          <RedeemedTicketImage />
          <TicketId>
            Ticket Id ${parseInt(BigInt(tokenId).toString(16).slice(-5), 16)}{" "}
          </TicketId>
        </TicketBox>
      </Link>
    );
  };

  useEffect(() => {
    getTickets();
  }, [account]);

  return (
    <>
      <Container>
        {listRedeemedTickets} {listCards}
      </Container>
    </>
  );
};

export default ShowTickets;
