import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NFT from "../../assets/NFT.png";
import "./style.css";

const Container = styled.div`
  background: #f5c34b;
  min-width: 700px;

  @media screen and (max-width: 800px) {
    min-width: 375px;
  }
`;

const Title = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;

  font-size: 150px;
  line-height: 160px;

  /* font-size: 5vw;
  line-height: 2vh; */
  position: relative;
  text-align: center;
  color: white;
  text-align: center;
  letter-spacing: -0.01em;
  color: #354b37;

  @media screen and (max-width: 1200px) {
    font-size: 120px;
    line-height: 130px;
  }

  @media screen and (max-width: 950px) {
    font-size: 100px;
    line-height: 110px;
  }

  @media screen and (max-width: 800px) {
    font-size: 70px;
    line-height: 80px;
  }
`;
const Title1 = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;
  font-size: 150px;
  line-height: 160px;
  /* font-size: 5vw;
  line-height: 2vh; */
  text-align: center;
  color: white;
  text-align: center;
  letter-spacing: -0.01em;
  color: #354b37;

  @media screen and (max-width: 1200px) {
    font-size: 120px;
    line-height: 130px;
  }
  @media screen and (max-width: 950px) {
    font-size: 100px;
    line-height: 110px;
  }

  @media screen and (max-width: 800px) {
    font-size: 70px;
    line-height: 80px;
  }
`;
const Image = styled.div`
  background-image: url(${NFT});
  height: 374.5px;
  display: inline-block;
  margin: 0 0 0 -160px;
  width: 301px;
  position: absolute;

  @media screen and (max-width: 800px) {
    zoom: 85%;
    margin: auto;
    position: static;
  }
`;
const TextContainer = styled.div`
  padding: 10%;
`;

const Dates = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 1000;
  font-size: 25px;
  margin-top: 2.5%;
  line-height: 30px;
  /* identical to box height, or 120% */
  align-items: center;
  color: #354b37;

  @media screen and (max-width: 950px) {
    margin-top: 50px;
  }
`;

const Intro = ({ isMobile }) => {
  return (
    <>
      <Container>
        {/* <Navbar></Navbar> */}

        <TextContainer>
          {!isMobile ? (
            <>
              <Image></Image>
              <Title>What happens in</Title>
              <Title1>Barcelona stays</Title1>
              <Title>on the Blockchain</Title>
              <Dates>July 6-8</Dates>
            </>
          ) : (
            <>
              <Dates>July 6-8</Dates>
              <Title>What happens in</Title>
              <Title1>Barcelona stays</Title1>
              <Title>on the Blockchain</Title>
              <Image style={{ marginTop: "-80px" }}></Image>
            </>
          )}
        </TextContainer>
      </Container>
    </>
  );
};

export default Intro;
