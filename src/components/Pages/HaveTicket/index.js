import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Ticket from "../../../assets/Ticket.svg";
import TicketToken from "../../../ethereum/TicketToken";
import { Link } from "react-router-dom";
import axios from "axios";
import viewQR from "../../../assets/viewQR.svg";
import web3 from "../../../ethereum/web3";

const Box = styled.div`
  background: #f5c34b;
  /* padding-bottom: 22%; */
  padding-top: 5%;
`;

const Container = styled.div`
  display: inline-block;
  width: 560px;
  padding: 72px 0 0 0;
  background: white;
  border-radius: 4px;
  border: 1px solid black;

  @media (max-width: 700px) {
    width: 343px;
  }
`;

const TicketBox = styled.div`
  position: static;
  border: 1px solid black;
  display: inline-block;
  margin: 20px 20px;

  width: 135px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;

  padding: 0px 0px 10px 0px;
  overflow: hidden;
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
  width: 133px;
  height: 133px;
  border-bottom: 1px solid #f2f2f2;
`;

const RedeemedTicketImage = styled.div`
  background-image: url(${viewQR});
  width: 133px;
  height: 133px;
  border-bottom: 1px solid #f2f2f2;
`;

const TicketId = styled.div`
  font-family: "dahlia";
`;

const Title1 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  padding-bottom: 24px;

  color: #354b37;
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #354b37;
`;

const DoinGud = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 12px;
`;

const TikcetLot = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #354b37;
  padding: 2px;
`;

const ethBcnNftTypeId1 =
  "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000004";
const ethBcnNftTypeId2 =
  "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000005";

const ShowTickets = ({ account }) => {
  const [listCards, setListCards] = useState([]);
  const [listRedeemedTickets, setListRedeemedTickets] = useState([]);

  const calTicketId = async (tokenId) => {
    try {
      // const tokenId = id;
      const url = `https://prod.ethbarcelona.kraznikunderverse.com/collection`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      // console.log("data: ", data?.data);
      const collections = data.data;
      let ticketId;
      const inHex = "0x" + BigInt(tokenId).toString(16);
      // console.log("token in hex: ", inHex);
      const nftTypeId = inHex.slice(0, -8);
      // console.log("nft type id: ", nftTypeId);

      collections.map((collection) => {
        if (nftTypeId === collection.nftTypeId) {
          // convert in hex
          const editionNum = parseInt(inHex.slice(-8), 16);
          ticketId = editionNum;
          if (collection.id > 1) {
            // collection supply = collectionIndex
            for (let i = 1; i < collection.id; i++) {
              // ticketId += previous_supply
              ticketId += parseInt(collections[i - 1].collectionIndex);
            }
          }
        }
      });

      // console.log("ticket Id: ", ticketId);
      // setTicketId(ticketId);
      return { ticketId, collections };
    } catch (err) {
      console.error(err);
    }
  };

  // main net api
  const getUnredeemedTickets = async () => {
    try {
      const url = `https://api.doingud.com/creation/nft?owner=${account}`;
      const { data } = await axios.get(url);
      // console.log(data.items);

      // console.log("items:", data.items);

      let promises = data?.items.map(async (token) => {
        // console.log("token.id: ", token.id);
        let tokenIdInDec = web3.utils.toBN(token.id).toString();
        // console.log("tokenId in dec:", tokenIdInDec);
        return calTicketId(tokenIdInDec).then(({ ticketId, collections }) => {
          return collections.map((collection) => {
            if (token.typeId === collection.nftTypeId) {
              let card = renderCard(ticketId, tokenIdInDec);
              return card;
            }
          });
        });
      });

      Promise.all(promises).then((listOfCards) => {
        listOfCards.reverse();
        setListCards(listOfCards);
      });
      // setListCards(listOfCards.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  const getRedeemedTickets = async () => {
    try {
      const url = `https://prod.ethbarcelona.kraznikunderverse.com/qrcode/wallet/${account}`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });

      // console.log(data.data);

      let promises = data?.data?.map((redeemedTkt) => {
        const hextokenid = BigInt(redeemedTkt.tokenID).toString(16);
        // console.log("redeemed token id in dec: ", redeemedTkt.tokenID);
        // console.log("redeemed token id in hex: ", hextokenid);
        // console.log("hextokenid to dec: ", BigInt(parseInt(hextokenid, 16)));
        const nftTypeId = "0x" + hextokenid.slice(0, -8);
        // console.log("checking..");

        return calTicketId(redeemedTkt.tokenID).then(
          ({ ticketId, collections }) => {
            return collections.map((collection) => {
              if (nftTypeId === collection.nftTypeId) {
                const card = renderRedeemedCard(
                  ticketId,
                  redeemedTkt.tokenID, //dec
                  "Early Bird Wave1"
                );
                return card;
              }
            });
          }
        );
      });
      Promise.all(promises).then((listRedeemedTickets) => {
        setListRedeemedTickets(listRedeemedTickets);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (account) getRedeemedTickets();
  }, [account]);

  const renderCard = (ticketId, tokenIdInDec) => {
    return (
      <Link
        key={tokenIdInDec}
        to={`/tickets/${tokenIdInDec}/redeem`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <TicketBox>
          {/* <TikcetLot>{ticketLotName}</TikcetLot> */}
          <TicketImage></TicketImage>
          {/* <TicketId>#{parseInt(tokenIdInHex.slice(-8), 16)}</TicketId> */}
          <TicketId>#{ticketId}</TicketId>
        </TicketBox>
      </Link>
    );
  };

  const renderRedeemedCard = (ticketId, tokenId) => {
    return (
      <Link
        key={tokenId}
        to={`/tickets/${tokenId}/qrcode`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <TicketBox>
          {/* <Title>ETH BCN NFTicket</Title> */}
          {/* <TikcetLot>{ticketLotName}</TikcetLot> */}
          <RedeemedTicketImage />
          <TicketId>
            {/* #{parseInt(BigInt(tokenId).toString(16).slice(-8), 16)} */}#
            {ticketId}
          </TicketId>
        </TicketBox>
      </Link>
    );
  };

  useEffect(() => {
    if (account) getUnredeemedTickets();
  }, [account]);

  return (
    <>
      <Box>
        <Container>
          <Title1>Choose an NFT to redeem</Title1>
          <Description>
            Redeem your NFTicket to get a QR code to enter the event
          </Description>
          {listRedeemedTickets}
          {listCards}
        </Container>
      </Box>
    </>
  );
};

export default ShowTickets;
