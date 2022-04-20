import React from 'react'; 
import styled from "styled-components";
import Intros from "../../assets/Intro.png";

const Container = styled.div`
background: #F5C34B;
`

const Title = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 150px;
line-height: 160px;

/* or 107% */
text-align: center;
letter-spacing: -0.01em;
color: #354B37;
`
const Image = styled.div`
background-image: url(${Intro});

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