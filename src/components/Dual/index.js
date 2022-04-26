import React from 'react';
import styled from 'styled-components';
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";

const Container = styled.div`
background: #F4F4F5;
`
const Right = styled.div`
width: 646px;
display:inline-block;
float:right;`

const OuterContainer = styled.div`
background-image: url(${Event1});
height: 900px;
padding:15%;
`
const TextContainer = styled.div`

width: 518px;
padding:5%;
background: #F4F4F5;
;
`
const ImageContainer = styled.div`
background-image: url(${Event2});
height: 613px;
`

const Heading = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
text-align:center;
color: #424242;
padding:2%;
margin-top:5%;`

const Left = styled.div`
display:inline-block;
height:900px;
`

const Navbar = styled.div`
background: #424242;
border-radius: 100px;`

const Title = styled.div``

const Description = styled.div``

const Button = styled.button``

const Hero = () => {
  return (
    <>
    
    <Container>
        <Right>
            <OuterContainer>
                <TextContainer>
                    <ImageContainer>
                    </ImageContainer>
                    <Heading>
                        Barcelona . Spain
                    </Heading>
                </TextContainer>
            </OuterContainer>
        </Right>

        <Left>
            <Navbar>
                <Button>Event</Button>
                <Button> Tickets</Button>

            </Navbar>
            <Title>Join Us at Barcelona </Title>
            <Description></Description>

        </Left>

    </Container>
    
    </>
  )
}

export default Hero;