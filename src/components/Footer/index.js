import React from 'react'; 
import styled from 'styled-components';
import "./style.css";

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

@media (max-width: 700px) {
    font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 54px;

}
`

const SubHeading = styled.div`
font-family: 'Dahlia-normal';
font-style: normal;
margin-top:2%;
font-weight: 400;
padding:0% 10% 5% 10%;
font-size: 45px;
text-align:left;
line-height: 56px;


/* Dirty Pink */

color: #D1ABAD;

@media (max-width: 700px) {
    font-family: 'Dahlia-normal';
    font-style: normal;
    font-weight: 400;
    margin-top:10%;
    font-size: 25px;
    margin-bottom:15%;
    line-height: 38px;
    /* or 119% */
    
    
    /* Dirty Pink */
    
    color: #D1ABAD;

}


`

const SocialsContainer = styled.div`
text-align:left;
padding:0% 10% 0% 10%;
@media (max-width: 700px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 28px;
    padding-bottom:5%;
    color: #D1D1D1;

}
`

const LegalContainer = styled.div`
display:inline-block;
float:left;
background: #424242;
width:100%;
padding: 2% 0 2% 10%;


`

const Text = styled.div`
display:inline-block;
float:left;
color: #808080;
margin-right:2%;

@media (max-width: 700px) {
padding-bottom:10%;

}



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
            <Social>Telegram</Social>
            <Social>Twitter</Social>
            <Social>Instagram</Social>

            <Social>
            <a href="https://t.me/ethbarcelona" className='link' color='red'>   Telegram</a> </Social>
           <Social><a href="https://twitter.com/eth_barcelona" className='link'> Twitter</a> </Social>
            <Social><a href="https://www.instagram.com/ethbarcelona/" className='link'>Instagram </a></Social>
        </SocialsContainer>
        <LegalContainer>
            <Text> Privacy Policy</Text>
            <Text> Terms of Conditions</Text>

        </LegalContainer>

    </Container>
  
    </>
  )
}

export default Footer