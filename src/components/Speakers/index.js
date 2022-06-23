import React from "react";
import styled from "styled-components";
import Speaker from "../../assets/Speaker1.png";
import "./style.css";
import S1 from "../../assets/S1.jpeg";
import S2 from "../../assets/S2.svg";
import S3 from "../../assets/S3.svg";
import S4 from "../../assets/S4.svg";
import S5 from "../../assets/S5.svg";
import S6 from "../../assets/S6.jpeg";
import S7 from "../../assets/S7.jpeg";
import S8 from "../../assets/S8.png";
import S9 from "../../assets/S9.svg";
import S10 from "../../assets/S10.svg";
import S11 from "../../assets/S11.svg";
import S12 from "../../assets/S12.svg";
import SP from "../../assets/SP.jpeg";

export const Container = styled.div`
  background: #f4f4f5;
  padding: 0 51px 0px 51px;

  @media (max-width: 700px) {
    padding: 0 18px;
    margin: 0;
  }
`;

export const Title = styled.div`
font-family: 'Dahliac';
font-style: normal;
font-weight: 400;
margin: 0 25px;
display:flex;
border-bottom: 1px solid #354B37;
font-size: 96px;
line-height: 100px
align-items:left;
justify-content:left;


color: #354B37;

@media (max-width: 700px) {
    padding:0;
    margin:0;
    font-size: 56px;
  }
`;

export const SpeakerContainer = styled.div`
  display: inline-block;
  align-items: left;
  margin-right: 60px;
  margin-top: 70px;

  width: 270px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    padding: 0;
    margin: 0 0 40px 0;
  }
`;

export const SpeakerImage = styled.div`
  display: inline-block;
  filter: grayscale(100%);
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.03);
    filter: grayscale(0%);
  }

  @media (max-width: 700px) {
    padding: 0 0 0px 0;
    margin: 0 0 00px 0;
  }
`;

export const Box = styled.div`
  padding: 0px 0 0 0;
  align-items: left;
  justify-content: left;

  @media (max-width: 700px) {
    padding: 48px 0;
    margin: 0;
  }
`;

export const Name = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  position: relative;
  /* identical to box height, or 100% */
  color: #354b37;
  margin: 10px 0 0 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    padding: 0;
    margin: 10px 0 0 15px;
    float: left;
  }
`;

export const Org = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  transform: rotate(270deg);
  color: #354b37;
  width: 300px;
  margin: -150px 0 0 120px;
  position: absolute;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 700px) {
    padding: 0;
    width: 300px;
    margin: -100px 0 0 120px;
  }
`;

export const Footer = styled.div`
  align-items: right;
  justify-content: right;
  display: flex;
  padding: 50px 120px;
  background: #f4f4f5;

  @media (max-width: 700px) {
    margin: 0;
    justify-content: center;
  }
`;

const Speakers = () => {
  return (
    <>
      <Container id="speaker">
        <Title>Speakers</Title>
        <Box>
          <a href="https://twitter.com/Narodism">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S1}></img>
              </SpeakerImage>
              <Name>Amir Taaki</Name>
              <Org>DarkFi</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/cryptodrftng ">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S2} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Alona Shevchenko</Name>
              <Org>UkraineDAO</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/rahilla">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S3} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Rahilla Zafar</Name>
              <Org>Altered State Machine</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/sshshln">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S4} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Sasha Shilina</Name>
              <Org>PhD, Paradigm, Humanode</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/thegrifft">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S5} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Griff Green</Name>
              <Org>Giveth</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/Mona_El_Isa">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S6} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Mona El Isa</Name>
              <Org>Avantgarde Finance</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/camiinthisthang">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S8} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Camila Ramos</Name>
              <Org> Edge & Node</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/notscottmoore">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S7} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Scott Moore</Name>
              <Org>Gitcoin</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/dabit3">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S9} width="241px" height="211px"></img>
              </SpeakerImage>
              <Name>Nader Dabit</Name>
              <Org>The Graph Protocol</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/Sim_Pop">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={SP}></img>
              </SpeakerImage>
              <Name>Simona Pop </Name>
              <Org>Gitcoin & Status.im</Org>
            </SpeakerContainer>
          </a>

          <a href="">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S11}></img>
              </SpeakerImage>
              <Name>Clara Pardo</Name>
              <Org>dOrg</Org>
            </SpeakerContainer>
          </a>

          <a href="https://twitter.com/provenauthority">
            <SpeakerContainer>
              <SpeakerImage>
                <img src={S12}></img>
              </SpeakerImage>
              <Name>Evin McMullen</Name>
              <Org>Disco</Org>
            </SpeakerContainer>
          </a>
        </Box>
      </Container>
      <Footer>
        <Name><a href="/speaker" className="speaker">Full Speaker List <span> &#8594; </span></a></Name>
      </Footer>
    </>
  );
};

export default Speakers;
