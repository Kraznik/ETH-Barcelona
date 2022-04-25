import React from 'react'; 
import styled from "styled-components"; 
import Header from "../../assets/circle.png";
import Star from "../../assets/star.png";


const Container = styled.div`
background: #354B37;


`;

const ImgContainer = styled.div`
@media (max-width: 700px) {

  }
`;

const TextContainer = styled.div`
  padding:10% 10% 12% 10%;
@media (max-width: 700px) {
    padding:1%;
}

`;

const Title = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 100px;
/* or 104% */
text-align: center;
color: #F5C34B;

@media (max-width: 700px) {
    font-family: 'Dahlia';
    font-style: normal;
    font-size:50px;
    line-height:56px;
    padding: 10% 5% 10% 5%;
    text-align: center;
    color: #F5C34B;
    margin-bottom:10%;
    
}
`;

const Circle = () => {
  return (
    <>
    <Container>
        <ImgContainer>
        <img src={Header} height="100%"></img>
            
        </ImgContainer>
        <TextContainer>
            <Title>
            Exploring how Blockchain Technology can help build a  sustainable world full of Human Potential
            </Title>
        </TextContainer>
    </Container>
    </>
  )
}

export default Circle