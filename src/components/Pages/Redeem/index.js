import React from 'react'; 
import Ticket from "../../../assets/RedeemTicket.png";
import styled from "styled-components";


const Container = styled.div`
margin:auto;
width: 530px;
height: 651px;
left: calc(50% - 530px/2);

/* White */
border:1px solid black;
background: #FFFFFF;
border-radius: 4px;
`;

const Title = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
/* identical to box height, or 100% */

align-items: center;
text-align: center;

/* Green Leaf */

color: #354B37;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;`;

const Description = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* or 125% */

text-align: center;

/* Green Leaf */

color: #354B37;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;`;

const Tickets = styled.div`
background-image: url(${Ticket});
width: 180px;
height:180px;
margin:auto;
border-radius:4px;
`;

const Forum = styled.div``;

const TicketId = styled.div``;

const Redeem = styled.button``;

const RedeemNFT = () => {
  return (
    <>
    <Container>
        <Title>Redeem NFT</Title>
        <Description>Redeem your NFTicket to get a QR code to enter the event</Description>
        <Forum></Forum>
        <Tickets></Tickets>
        <TicketId> NFTicket 69</TicketId>
        <Redeem>Redeem Now</Redeem>
    </Container>

    </>
  )
}

export default RedeemNFT