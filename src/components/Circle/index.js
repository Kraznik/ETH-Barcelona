import React from "react";
import styled from "styled-components";
import Header from "../../assets/circle.png";
import Star from "../../assets/star.png";
import "./style.css";

const Container = styled.div`
  background: #354b37;
`;

const ImgContainer = styled.div`
  display: grid;
  justify-items: center;
  img {
    @media screen and (max-width: 900px) {
      width: 130%;
    }
  }

  @media (max-width: 700px) {
  }
`;

const TextContainer = styled.div`
  padding: 10% 9% 12% 9%;

  @media (max-width: 700px) {
    padding: 0%;
    margin: 10%;
    padding-bottom: 30%;
  }

  @media (max-width: 700px) {
    padding: 0%;
    text-align: center;
    padding-bottom: 10%;
  }
`;

const Title = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;

  font-weight: 400;
  font-size: 96px;
  line-height: 100px;
  text-align: center;
  color: #f5c34b;

  @media (max-width: 700px) {
    font-family: "Dahlia-normal";
    font-style: normal;
    font-size: 50px;
    line-height: 56px;
    padding: 0;
    text-align: center;
    color: #f5c34b;
  }
`;

const Bold = styled.div`
  font-family: "Dahlia-bold";
  font-style: normal;
  font-weight: 400;
  font-size: 96px;

  display: inline-block;
  text-align: center;
  color: #f5c34b;

  @media (max-width: 700px) {
    font-family: "Dahlia-bold";
    font-style: normal;
    font-size: 50px;
    line-height: 56px;

    text-align: center;
    color: #f5c34b;
  }
`;

const Circle = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <img src={Header} width="100%"></img>
        </ImgContainer>
        <TextContainer>
          <Title>
            Exploring how <Bold>Blockchain Technology</Bold> can help build a
            sustainable world full of <Bold>Human Potential</Bold>
          </Title>
        </TextContainer>
      </Container>
    </>
  );
};

export default Circle;
