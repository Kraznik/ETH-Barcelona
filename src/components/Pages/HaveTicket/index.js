import React from 'react';
import styled from "styled-components";
import Ticket from "../../../assets/Ticket.png";

const Container = styled.div`
display:inline-block;
padding:10%;
`;

const TicketBox = styled.div`
position: static;
border:1px solid black;
display:inline-block;
margin-left:20px;
padding:10px 0;

`;

const Title = styled.div`
font-family: 'GT Flexa';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
/* identical to box height, or 26px */

letter-spacing: -0.04em;

/* Black soft */

color: #2B2B2B;


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

const TicketId = styled.div``;

const DoinGud = styled.button``;


const ShowTickets = () => {
  return (
   <>
   <Container>
       <TicketBox>
           <Title>ETH BCN NFTicket</Title>
           <TicketImage></TicketImage>
           <TicketId> Tikcet Id 69 </TicketId>
           <DoinGud> Redeem NFTicket </DoinGud>
       </TicketBox>

       <TicketBox>
           <Title>ETH BCN NFTicket</Title>
           <TicketImage></TicketImage>
           <TicketId> Tikcet Id 420 </TicketId>
           <DoinGud> Check on DoinGud </DoinGud>
       </TicketBox>
   </Container>
   </>
  )
}

export default ShowTickets