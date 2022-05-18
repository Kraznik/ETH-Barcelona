import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Ticket from "../../../assets/Ticket.svg";
import TicketToken from "../../../ethereum/TicketToken";
import { Link } from "react-router-dom";
import axios from "axios";
import viewQR from "../../../assets/viewQR.svg";



const Container = styled.div`
  display: inline-block;
  width: 530px;
  padding: 72px 0 0 0 ;


 

  @media (max-width: 700px) {
    width:343px;
  }

`;

const TicketBox = styled.div`
  position: static;
  border: 1px solid black;
  display: inline-block;
  margin: 20px 20px;
  width:135px;
  border: 1px solid #F2F2F2;
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
  border-bottom: 1px solid #F2F2F2;
`;

const RedeemedTicketImage = styled.div`
  background-image: url(${viewQR});
  width: 133px;
  height: 133px;
  border-bottom: 1px solid #F2F2F2;
`;

const TicketId = styled.div`
  font-family: "dahlia";
`;

const Title1 = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
align-items: center;
text-align: center;
padding-bottom:24px;

color: #354B37;
`;

const Description = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
align-items: center;
text-align: center;
color: #354B37;
`

const DoinGud = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-size: 12px;

`;

const TikcetLot = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
align-items: center;
text-align: center;
color: #354B37;
padding:2px;

`;

const ShowTickets = ({ account }) => {
  const [listCards, setListCards] = useState([]);
  const [listRedeemedTickets, setListRedeemedTickets] = useState([]);

  // const getTickets = async () => {
  //   try {
  //     const userAddress = account;
  //     console.log("user address: ", userAddress);

  //     let listOfCards = [];

  //     const tid = BigInt(
  //       "1719757583868960775909331762124959402016076508804645162510781236870381570"
  //     );

  //     for (
  //       let tokenId = tid;
  //       tokenId < tid + BigInt(30);
  //       tokenId = tokenId + BigInt(1)
  //     ) {
  //       const balance = await TicketToken.methods
  //         .balanceOf(userAddress.toString(), tokenId)
  //         .call();

  //       // console.log("token id: ", tokenId, ": ", balance);

  //       // console.log("Ticket token balance: ", balance);

  //       if (balance > 0) {
  //         // `Ticket#${tokenId - tid + BigInt(1)}`
  //         let card = renderCard(tokenId);
  //         listOfCards.push(card);
  //       }
  //       // setListCards(listOfCards);
  //     }
  //     setListCards(listOfCards);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // mumbai test net api
  const getUnredeemedTickets = async () => {
    try {
      const url = `https://api-main.doingud.work/creation/nft?owner=${account}`;
      const { data } = await axios.get(url);
      // console.log(data.items);

      let listOfCards = [];

      //filter items for nftTypeId == ethbcn's

      const ethBcnNftTypeId1 =
        "0xf92d5aa4d7692161e29117a079c1a4cf9231beb7000000000003";
      const ethBcnNftTypeId2 =
        "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000003";
      data.items.map((token) => {
        if (
          token.typeId === ethBcnNftTypeId1 ||
          token.typeId === ethBcnNftTypeId2
        ) {
          // console.log("type id matched: ", token.id);
          let card = renderCard(token.id);
          listOfCards.push(card);
        }
      });
      setListCards(listOfCards.reverse());
    } catch (err) {
      console.error(err);
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
      // console.log(data.data);
      const listCards = [];
      data?.data?.map((redeemedTkt) => {
        const card = renderRedeemedCard(redeemedTkt.tokenID);
        listCards.push(card);
      });
      setListRedeemedTickets(listCards);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (account) getRedeemedTickets();
  }, [account]);

  const renderCard = (tokenId) => {
    return (

      <TicketBox key={tokenId}>
        {/* <Title>ETH BCN NFTicket</Title> */}
        <TikcetLot>Early Bird #1</TikcetLot>
        <TicketImage></TicketImage>
        <TicketId>
          #{parseInt(BigInt(tokenId).toString(16).slice(-5), 16)}{" "}
        </TicketId>
        <DoinGud to={`/tickets/${tokenId}/redeem`}> Redeem NFTicket </DoinGud>
      </TicketBox>

    );
  };

  const renderRedeemedCard = (tokenId) => {
    return (

      <Link
        key={tokenId}
        to={`/tickets/${tokenId}/qrcode`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <TicketBox>
          {/* <Title>ETH BCN NFTicket</Title> */}
          <TikcetLot>Early Bird #2</TikcetLot>
          <RedeemedTicketImage />
          <TicketId>
            #{parseInt(BigInt(tokenId).toString(16).slice(-5), 16)}{" "}
          </TicketId>
        </TicketBox>
      </Link>

    );
  };

  useEffect(() => {
    // getTickets();
    if (account) getUnredeemedTickets();
  }, [account]);

  return (
    <>

      <Container>
        <Title1>Choose an NFT to redeem</Title1>
        <Description>Redeem your NFTicket to get a QR code to enter the event</Description>
        {listRedeemedTickets} {listCards}
      </Container>

    </>
  );
};

export default ShowTickets;
