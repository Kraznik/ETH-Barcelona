import React from 'react'; 
import styled from "styled-components";
import NFT from "../../assets/NFT.png";

const Container = styled.div`
background: #F5C34B;
`

const Title = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 150px;
line-height: 160px;
  position: relative;
  text-align: center;
  color: white;
/* or 107% */
text-align: center;
letter-spacing: -0.01em;
color: #354B37;
`

const Image = styled.div`
background-image: url(${NFT});
height: 374.5px;
display:inline-block;
width: 301px;
position: absolute;

`
const TextContainer = styled.div``

const Dates = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
/* identical to box height, or 120% */
align-items: center;
color: #354B37;
`

const Intro = () => {
  return (
    <>
    <Container>
        {/* <Navbar></Navbar> */}
        <TextContainer>
        <Title>What happens in</Title>
        <Image></Image>
        <Title>Barcelona stays</Title>
        <Title>on the Blockchain</Title>
        <Dates>July  6-8</Dates>
        </TextContainer>

        
    </Container>
    </>

  )
}

export default Intro