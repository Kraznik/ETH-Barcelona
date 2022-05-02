import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Ticket from "../../../assets/Ticket.png";
import TicketToken from "../../../ethereum/TicketToken";
import { Link } from "react-router-dom";

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

const TicketId = styled.div`
  font-family: "dahlia";
`;

const DoinGud = styled(Link)``;

const ShowTickets = ({ account }) => {
  const [listCards, setListCards] = useState([]);

  const run = async () => {
    try {
      const userAddress = account;
      console.log("user address: ", userAddress);

      let listOfCards = [];

      for (let i = 1; i <= 9; i++) {
        // https://doingud.com/creation/0xd005dab4de1f4dd9dee091aa7189e4d41305508e000000000003?edition=8
        // const tokenId =
        //   // "1435721072349998590788032814599621341706352861560185436768858689532592136";
        //   // "1706061175700980423756583045757425390936512072470358289390261915023835139";
        //   // "1047208622903106330699355649246804111152386481509182670586524793181306881"; //mumbai
        //   "1047208622903106330699355649246804111152386481509182670586524793181306882";
        const tid =
          "104720862290310633069935564924680411115238648150918267058652479318130688";
        const tokenId = tid + i;
        const balance = await TicketToken.methods
          .balanceOf(userAddress.toString(), tokenId)
          .call();

        console.log("Ticket token balance: ", balance);

        if (balance > 0) {
          const uri = await TicketToken.methods.uri(tokenId).call();
          console.log("uri: ", uri);

          let card = renderCard(`Ticket#${i}`, tokenId);
          listOfCards.push(card);
        }

        // for (let i = 1; i <= balance; i++) {
        //   const uri = await TicketToken.methods.uri(tokenId).call();
        //   console.log("uri: ", uri);

        //   let card = renderCard(`Ticket#${i}`, tokenId);
        //   listOfCards.push(card);
        // }
      }
      setListCards(listOfCards);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCard = (name, tokenId) => {
    return (
      //   <Box key={name}>
      //     <ImageConatiner>
      //       <img src={Ticket} width="100%"></img>
      //     </ImageConatiner>
      //     <Title>{name}</Title>
      //     <Button onClick={() => onBurn(tokenId)}>Burn</Button>
      //   </Box>
      <TicketBox key={name}>
        <Title>ETH BCN NFTicket</Title>
        <TicketImage></TicketImage>
        <TicketId> Tikcet Id ${tokenId.slice(-2)} </TicketId>
        <DoinGud to={`/tickets/${tokenId}/redeem`}> Redeem NFTicket </DoinGud>
      </TicketBox>
    );
  };

  useEffect(() => {
    run();
  }, [account]);

  return (
    <>
      <Container>
        {/* <TicketBox>
          <Title>ETH BCN NFTicket</Title>
          <TicketImage></TicketImage>
          <TicketId> Tikcet Id 69 </TicketId>
          <DoinGud> Redeem NFTicket </DoinGud>
        </TicketBox> */}

        {listCards}
      </Container>
    </>
  );
};

export default ShowTickets;
