import React from 'react'; 
import styled from "styled-components";
import NFT from "../../assets/NFT.png";
import "./style.css";



const Container = styled.div`
background: #F5C34B;
`

const Title = styled.div`
font-family: 'Dahlia-normal';
font-style: normal;

font-size: 150px;
line-height: 160px;
  position: relative;
  text-align: center;
  color: white;
text-align: center;
letter-spacing: -0.01em;
color: #354B37;
`
const Title1 = styled.div`
font-family: 'Dahlia-normal';
font-style: normal;

font-size: 150px;
line-height: 160px;
  text-align: center;
  color: white;
text-align: center;
letter-spacing: -0.01em;
color: #354B37;
`
const Image = styled.div`
background-image: url(${NFT});
height: 374.5px;
display:inline-block;
margin: 0 0 0 -160px;
width: 301px;
position:absolute;

`
const TextContainer = styled.div`
padding:10%;

`

const Dates = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 1000;
font-size: 25px;
margin-top:2.5%;
line-height: 30px;
/* identical to box height, or 120% */5
align-items: center;
color: #354B37;
`

const Intro = () => {
  return (
    <>
    <Container>
        {/* <Navbar></Navbar> */}
        <TextContainer>
        
        <Image></Image>
        <Title>What happens in</Title>
        <Title1>Barcelona stays</Title1>
        <Title>on the Blockchain</Title>
        <Dates>July  6-8</Dates>
        </TextContainer>

        
    </Container>
    </>

  )
}

export default Intro