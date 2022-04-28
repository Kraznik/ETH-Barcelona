import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 24px 48px;
position: absolute;
width: 530px;
height: 331px;
left: 455px;
top: 110px;
/* White */
background: white;
border: 1px solid black;
border-radius: 4px;`;

const TextContainer = styled.div``;

const Heading = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
/* or 100% */
display: flex;
align-items: center;
text-align: center;
/* Green Leaf */
color: #354B37;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
padding: 0 25% 0 25% ;
`;

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
padding:0 10% 0 10%;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;
`;

const BuyContainer = styled.div``;

const BuyNow = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
/* identical to box height, or 100% */
display: flex;
align-items: flex-end;
text-align: center;
color: #354B37;`;



const BuyTickets = () => {
  return (
      <Container>
          <TextContainer>
              <Heading>You need an NFTicket to claim a QR code</Heading>
              <Description>Please change your wallet to see your NFT ticket or buy one in DoinGud platform</Description>
          </TextContainer>

          <BuyContainer>
              <BuyNow>Buy NFTicket</BuyNow>
          </BuyContainer>
      </Container>
  )
}

export default BuyTickets