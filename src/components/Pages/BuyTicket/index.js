import React from "react";
import styled from "styled-components";

const Box = styled.div`
background: #F5C34B;
padding-bottom:22%;
padding-top:5%;

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 48px;
  /* position: absolute; */
  width: 530px;
  height: 331px;

  background: white;
  border: 1px solid black;
  border-radius: 4px;
  margin: auto;


  @media (max-width: 800px) {
    width: 343px;
    height: 327px;
  }
`;

const TextContainer = styled.div``;

const Heading = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #354b37;
  margin: 24px 0px;
  padding: 0 25% 0 25%;

  @media (max-width: 800px) {
    margin: 0 0 0 0;
    padding: 0;
  }
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */
  text-align: center;

  color: #354b37;

  padding: 0 10% 0 10%;

  margin: 24px 0px;

  @media (max-width: 800px) {
    margin: 24px 16px 48px 16px;
    padding: 0;
  }
`;

const BuyContainer = styled.div`
  width: 184.68px;
  height: 50px;
  border: 0.8px solid #354b37;
  transform: rotate(-4.15deg);
  border-radius: 50%;

  &:hover {
    transform: rotate(+4.15deg);
    color: #354b37 !important;
  }
`;

const BuyInnerContainer = styled.div`
  background: #354b37;
  width: 184.68px;
  height: 50px;
  transform: rotate(+4.15deg);
  border-radius: 50%;
  padding: 12px 32px 16px 33px;

  &:hover {
    background: transparent;
    transform: rotate(-4.15deg);
    padding: 12px 33px 16px 33px;
    color: #354b37 !important;
  }
`;

const BuyNow = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  color: white;

  @media (max-width: 800px) {
    font-size: 20px;
  }

  &:hover {
    color: #354b37;
  }
`;

const BuyTickets = () => {
  return (
    <Box>
    <Container>
      <TextContainer>
        <Heading>You need an NFTicket to claim a QR code</Heading>
        <Description>
          Please change your wallet to see your NFT ticket or buy one in DoinGud
          platform
        </Description>
      </TextContainer>

      <BuyContainer>
        <a
          // href="https://doingud.com/@ethbarcelona?tab=created"
          href="https://main.doingud.work/@banatisanchit?tab=created"
          target={"_blank"}
          style={{ textDecoration: "none" }}
        >
          <BuyInnerContainer>
            <BuyNow>Buy NFTicket</BuyNow>
          </BuyInnerContainer>
        </a>
      </BuyContainer>
    </Container>
    </Box>
  );
};

export default BuyTickets;
