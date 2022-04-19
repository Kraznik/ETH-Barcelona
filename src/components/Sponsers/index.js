import React from 'react'; 
import styled from 'styled-components';
import DoinGud from "../../assets/DS1.png"
import Gold from "../../assets/GS1.png"
import Silver from "../../assets/SS1.png"
import Bronze from "../../assets/BS1.png"
import General from "../../assets/GSs1.png"
import Organizer from "../../assets/O1.png"


const Container = styled.div`
background:#E5E5E5;
`

const TitleBox = styled.div`
border-bottom: 1px solid #BDBDBD;
margin: 0 10% 0 10%;
text-align:left;
font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 64px;
/* or 100% */
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: #424242;
height: 140px;
`
const Title1 = styled.div`
@media (max-width: 600px) {
    font-size:56px;
  }

`

const DiamondSponserContainer = styled.div`
border-bottom: 1px solid #BDBDBD;
margin: 0 10% 0 10%;
position:relative;
`

const DiamondSponserTitle = styled.div`
text-align:left;
font-family:dahlia ;
font-style: normal;
margin-top:3.5%;
height: 26px;
font-weight: 700;
font-size: 24px;
position:relative;
line-height: 24px;
color: #828282;

@media (max-width: 700px) {
    font-size:24px;
    margin-top:10%;
    margin-bottom:5%;
  }


`

const DiamondSponserLogoContainer = styled.div`
display:flex;

@media (max-width: 600px) {
    border-radius: 4px;
    display:block;   
  }

`
const DiamondSponserLogo= styled.div`
display:inline-block;
padding:1% 1% 1% 0;
position:relative;
margin:1% 13.5% 1% 0 ;
`

const GoldSponserContainer = styled.div`
border-bottom: 1px solid #BDBDBD;
margin: 0 10% 0 10%;
position:relative;`

const GoldSponserTitle = styled.div`
text-align:left;
font-family:dahlia ;
font-style: normal;
margin-top:3.5%;
height: 26px;
font-weight: 700;
font-size: 24px;
position:relative;
line-height: 24px;
color: #828282;

@media (max-width: 700px) {
    font-size:24px;
    margin-top:10%;
    margin-bottom:5%;
  }

`

const GoldSponserLogoContainer = styled.div`
display:flex;

@media (max-width: 600px) {
    border-radius: 4px;
    display:block; 

  }

`
const GoldSponserLogo = styled.div`
display:inline-block;
position:relative;
width: 250px;
padding:1% 1% 1% 0;
position:relative;
margin:1% 3.4% 1% 0 ;
height: 180px;
@media (max-width: 700px) {

  }


`


const SilverSponserContainer = styled.div`
border-bottom: 1px solid #BDBDBD;
margin: 0 10% 0 10%;
position:relative;
`

const SilverSponserLogoContainer = styled.div`
display:flex;
@media (max-width: 600px) {
    border-radius: 4px;
    display:inline-block;   
    background:red;

  }
`
const SilverSponserLogo = styled.div`
width: 185px;
height: 120px;
display:inline-block;
position:relative;
padding:1% 1% 1% 0;
margin:1% 3.4% 1% 0 ;
`

const BronzeSponserLogo = styled.div`
display:inline-block;;
padding:1% 1% 1% 0 ;
margin: 0 1.5% 0 0 ;
width:165px;
`

const OrganizerLogo = styled.div`
padding: 2% 2% 2% 0 ;
margin-right:5%;
`

const Sponsers = () => {
  return (
    <>
    <Container>
        <TitleBox>
        <Title1> Our sponsers</Title1>
        </TitleBox>

        <DiamondSponserContainer>
            <DiamondSponserTitle>Diamond</DiamondSponserTitle>
            <DiamondSponserLogoContainer>
                <DiamondSponserLogo> <img src={DoinGud}></img></DiamondSponserLogo>
                <DiamondSponserLogo> <img src={DoinGud}></img></DiamondSponserLogo>
                <DiamondSponserLogo> <img src={DoinGud}></img></DiamondSponserLogo>
            </DiamondSponserLogoContainer>
        </DiamondSponserContainer>

        <GoldSponserContainer>
            <GoldSponserTitle>Gold</GoldSponserTitle>
            <GoldSponserLogoContainer>
                <GoldSponserLogo><img src={Gold}></img></GoldSponserLogo>
                <GoldSponserLogo><img src={Gold}></img></GoldSponserLogo>
                <GoldSponserLogo><img src={Gold}></img></GoldSponserLogo>
                <GoldSponserLogo><img src={Gold}></img></GoldSponserLogo>
            </GoldSponserLogoContainer>
        </GoldSponserContainer>

        <SilverSponserContainer>
            <GoldSponserTitle>Silver</GoldSponserTitle>
            <SilverSponserLogoContainer>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Silver}></img> </SilverSponserLogo>
            </SilverSponserLogoContainer>
        </SilverSponserContainer>

        <SilverSponserContainer>
            <GoldSponserTitle>Bronze</GoldSponserTitle>
            <SilverSponserLogoContainer>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
        </SilverSponserContainer>

        <SilverSponserContainer>
            <GoldSponserTitle>General Supporter</GoldSponserTitle>
            <SilverSponserLogoContainer>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={Bronze}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
        </SilverSponserContainer>

        <SilverSponserContainer>
            <GoldSponserTitle>Organizers</GoldSponserTitle>
            <SilverSponserLogoContainer>
                <OrganizerLogo><img src={Organizer}></img></OrganizerLogo>
                <OrganizerLogo><img src={Organizer}></img></OrganizerLogo>
            </SilverSponserLogoContainer>
        </SilverSponserContainer>


    </Container>
    </>
  )
}

export default Sponsers