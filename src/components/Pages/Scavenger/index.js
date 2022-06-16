import React from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/Header.svg";
import "./style.css";
import SpeakerImage from "../../../assets/Card.png";
import { useParams } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  height: 125px;
`;

const InputContainer = styled.div`
  background: #354b37;
  padding: 20px 0;
`;

const Title1 = styled.div`
  font-family: "Dahlia-C";
  font-style: normal;
  font-weight: 500;
  font-size: 77px;
  line-height: 56px;
  font-color: transparent;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f5c34b;
  text-transform: uppercase;
`;

const Title2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 56px;
  text-align: center;
  color: #f5c34b;
`;

const ImageContainer = styled.div`
  width: 310px;
  height: 423px;
  background: #f8f9fa;
  border-radius: 300px 300px 0px 0px;
  margin: 20px auto;
`;

const Image = styled.div`
  padding: 96px 50px 0 50px;
`;

const Name = styled.div`
  font-family: "Dahlia-D";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  /* identical to box height, or 156% */
  margin-top: 17px;

  color: #354b37;
`;

const Org = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  text-align: center;

  color: #354b37;
`;

const TicketInput = styled.div`
  position: absolute;
  width: 100%;
  height: 285px;
  background: #f5c34b;
`;

const Title3 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  /* or 156% */

  color: #354b37;
`;

const Input = styled.div``;

const Footer = styled.div`
  width: 100%;
  height: 108px;
  background: #354b37;
`;

const Logo = styled.div``;

const SocialContainer = styled.div``;

const CircleOut = styled.div`
  color: #354b37;
  box-sizing: border-box;
  border: 0.8px solid #354b37;
  transform: rotate(-6.41deg);
  width: 112px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;

  &:hover {
    transform: rotate(6.7deg);
  }
`;

const CircleIn = styled.div`
  background: #354b37;
  width: 112px;
  transform: rotate(+6.41deg);
  height: 50px;
  padding: 5% 18% 5% 5%;
  color: white;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  test-align: center;
  border-radius: 50%;

  &:hover {
    background: none;
    transform: rotate(-6.41deg);
    color: #354b37;
  }
`;

const Scavenger = () => {
  const { id } = useParams();


  return (
    <>
      <Container>
        <Header></Header>

        <InputContainer>
          <Title1>SPEAKERS NFT {id}</Title1>
          <Title2>ETHBarcelona</Title2>
          <ImageContainer>
            <Image>
              <img src={SpeakerImage}></img>
            </Image>
            <Name>Marta Poblet</Name>
            <Org>Blockscience & RMIT University</Org>
          </ImageContainer>
        </InputContainer>

        <TicketInput>
          <Title3>Ticket ID</Title3>
          <Input>
            <br />
            <input
              type="number"
              placeholder="Ticket ID"
              className="ticketid"
            ></input>
            <br />
          </Input>
          <CircleOut>
            <CircleIn>Mint NFT</CircleIn>
          </CircleOut>
        </TicketInput>

        <Footer>
          <Logo></Logo>
          <SocialContainer></SocialContainer>
        </Footer>
      </Container>
    </>
  );
};

export default Scavenger;
