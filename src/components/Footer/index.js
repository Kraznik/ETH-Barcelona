import React from 'react'; 
import styled from 'styled-components';

const Container = styled.div`
background: #424242;
`
const Heading = styled.div`
font-family: 'Dahlia';
font-style: normal; 
font-size: 70px;
line-height: 70px;
padding:10% 10% 0% 10%;
text-align:left;

text-transform: uppercase;


color: #D1ABAD;

@media (max-width: 600px) {
    font-size:44px;
  }
`

const SubHeading = styled.div`
font-family: 'Dahlia';
font-style: normal;
margin-top:2%;
font-weight: 400;
padding:0% 10% 5% 10%;
font-size: 45px;
text-align:left;
line-height: 56px;


/* Dirty Pink */

color: #D1ABAD;

@media (max-width: 600px) {
    font-size:28px;
  }
`

const SocialsContainer = styled.div`
text-align:left;
padding:0% 10% 0% 10%;

`

const LegalContainer = styled.div`
display:inline-block;
float:left;
padding:1% 10% 5% 10%;
`

const Text = styled.div`
display:inline-block;
justify-content:left;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #808080;
flex: none;
order: 1;
flex-grow: 0;
`

const Social = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 26px;
color: #D1D1D1;


`

const Footer = () => {
  return (
    <>
    <Container>
        <Heading>Soon you will  be able to Live the SolarPunk Experience at</Heading>
        <SubHeading>Centre Convencions Internacional Barcelona (CCIB)</SubHeading>
        <SocialsContainer>
            <Social>Twitter</Social>
            <Social>Twitter</Social>
            <Social>Twitter</Social>
        </SocialsContainer>
        <LegalContainer>
            <Text> Privacy Policy</Text>
            <Text> Privacy Policy</Text>
            <Text> Privacy Policy</Text>

        </LegalContainer>

    </Container>
  
    </>
  )
}

export default Footer