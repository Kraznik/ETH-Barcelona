import React from 'react'; 
import styled from 'styled-components';
import Speaker from "../../assets/Speaker1.png"; 
import "./style.css";

const Container = styled.div`
background: #F4F4F5;
padding: 0 51px 0px 51px;

@media (max-width: 700px) {
    padding:0 18px;
    margin:0;
  }

`;

const Title = styled.div`
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

const SpeakerContainer = styled.div`
display:inline-block;
align-items:left;
margin-right:60px;
margin-top:70px;

width:270px;
&:hover{
    text-decoration:underline;
 
}

@media (max-width: 700px) {
    padding:0;
  margin:0 0 40px 0 ;;
  }

`;

const SpeakerImage = styled.div`
display:inline-block;
filter: grayscale(100%);
&:hover{
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.03);
    filter: grayscale(0%);
 
}

@media (max-width: 700px) {
    padding:0 0 0px 0 ;
    margin:0 0 00px 0 ;
  }

`;

const Box = styled.div`
padding: 0px 0 0 0 ;
align-items:left;
justify-content:left;

@media (max-width: 700px) {
    padding:48px 0 ;
    margin:0;
  }

`;

const Name = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
position:relative;
/* identical to box height, or 100% */
color: #354B37;
margin: 24px 0 0 0 ;

&:hover{
    cursor:pointer;
    text-decoration:underline;
 
}

@media (max-width: 700px) {
    padding:0;
    margin:10px 0 0 15px;
    float:left;

  }

`;

const Org = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
position:relative;
margin:-70px 0px 0 270px ;
position:relative;

transform: rotate(-90deg);
line-height: 20px;
color: #354B37;

&:hover{
    cursor:pointer;
    text-decoration:none;
 
}

@media (max-width: 700px) {
    padding: 0;
    margin:-20px 0 0 270px ;

  }

`;

const Footer = styled.div`
align-items:right;
justify-content:right;
display:flex;
padding: 50px 120px;
background: #F4F4F5;

@media (max-width: 700px) {
    padding:20px;
    margin:0;
    justify-content:center;

  }

`





const Speakers = () => {
  return (
    <>
    <Container>
        <Title>Speakers</Title>
        <Box>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>Zerion</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>
        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>Zerion</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>
        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>Zerion</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        <SpeakerContainer>
            <SpeakerImage><img src={Speaker}></img></SpeakerImage>
            <Name>Sanchit</Name>
            <Org>DoinGud</Org>
        </SpeakerContainer>

        </Box>
    </Container>
    <Footer>
            <Name>Full Speaker List <span> &#8594; </span></Name>
        </Footer>

    
    </>
  )
}

export default Speakers