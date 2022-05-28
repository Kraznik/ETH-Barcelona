import React from 'react'; 
import styled from 'styled-components';
import DoinGud from "../../assets/DoinGud.svg";
import Floc from "../../assets/Floc.svg";
import Polis from "../../assets/Polis.svg";
import Eclectic from "../../assets/Eclectic.svg"
import BeInCrypto from "../../assets/beINcrypto.svg"
import DefiPrime from "../../assets/defiprime.svg";
import ShrineHouse from "../../assets/ShrineHouse.svg";
import GiantCookie from "../../assets/GiantCookie.svg";
import Zerion from "../../assets/Zerion.svg";
import Moralis from "../../assets/Moralis.svg";
import Distrikt from "../../assets/Dis.svg" 
import Degate from "../../assets/Degate.svg";
import Aragon from "../../assets/Aragon.svg";
import MoonBeam from "../../assets/Moonbeam.svg";
import Apwine from "../../assets/Apwine.svg";
import Witnet from "../../assets/witnet.svg";
import Giveth from "../../assets/GIveth.svg";
import Pillar from "../../assets/Pillar.svg";
import Mochi from "../../assets/Mochi.svg";
import Certik from "../../assets/Certik.svg";
import Certora from "../../assets/Certora.svg";
import ETH from "../../assets/ETH.svg";
import M1 from "../../assets/M1.svg";
import SM1 from "../../assets/SM1.svg";
import SM2 from "../../assets/SM2.svg";
import SM3 from "../../assets/Sm3.svg";
import SM4 from "../../assets/SM4.svg";
import SM5 from "../../assets/SM5.svg";
import SM6 from "../../assets/M6.svg";
import SM7 from "../../assets/M7.svg";
import SM8 from "../../assets/M8.svg";
import SM9 from "../../assets/M9.svg";
import SM10 from "../../assets/M10.svg";
import SM11 from "../../assets/M11.svg";
import SM12 from "../../assets/M12.svg";

const Container = styled.div`
background: #F4F4F5;
padding-top:10%;
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
padding: 0 0 5% 0;

@media (max-width: 600px) {
    border-radius: 4px;
    display:block;   
  }

`
const DiamondSponserLogo= styled.div`
display:inline-block;
position:relative;
margin:1% 13.5% 1% 0 ;
`

const GoldSponserContainer = styled.div`

margin: 0 10% 0 10%;
position:relative;

@media (max-width: 700px) {
padding-bottom:100px;
}

`

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
padding: 0 0 5% 0;

@media (max-width: 600px) {
    border-radius: 4px;
    display:block; 

  }

`
const GoldSponserLogo = styled.div`
display:inline-block;
position:relative;

padding:1% 1% 1% 0;
position:relative;
margin:1% 3.4% 1% 0 ;
height: 180px;
@media (max-width: 700px) {

  }

  .a{
    text-decoration:none;
    border-bottom:0px solid black;
  }


`


const SilverSponserContainer = styled.div`
border-bottom: 1px solid #BDBDBD;
margin: 0 8% 0 10%;

padding-bottom:2.5%;
position:relative;
`

const BronzrSponserContainer = styled.div`

margin: 0 8% 0 10%;

padding-bottom:2.5%;
position:relative;
`

const SilverSponserLogoContainer = styled.div`
display:flex;
@media (max-width: 600px) {
    border-radius: 4px;
    display:inline-block;   


  }
`
const SilverSponserLogo = styled.div`
display:inline-block;
position:relative;
padding:1% 1% 1% 0;
margin:1% 3.4% 1% 0 ;
`

const BronzeSponserLogo = styled.div`
display:inline-block;;
padding:1% 1% 1% 0 ;
margin: 0 1.5% 0 0 ;


@media (max-width: 800px) {
  padding:0 ;
margin: 10px 2px 0 0  ;
float:left;



}  
`
const Mobile = styled.div`

display:inline:block;
float:left;

@media (min-width: 800px) {

  display:none;
}
`

const Desktop = styled.div`
width:100%;
@media (max-width: 800px) {
display:none;
}
`


const SilverSponserLogoM = styled.div`
display:inline-block;
margin-right:5px;
float:left;
margin-top:10px;

`

const OrganizerLogo = styled.div`
padding: 2% 2% 2% 0 ;
margin-right:1%;
`

const Sponsers = () => {
  return (
    <>
    <Container>



        <TitleBox>
        <Title1> Sponsers</Title1>
        </TitleBox>

        <DiamondSponserContainer>
            <DiamondSponserTitle>Diamond</DiamondSponserTitle>
            <DiamondSponserLogoContainer>
                <DiamondSponserLogo> <img src={Distrikt}></img></DiamondSponserLogo>
            </DiamondSponserLogoContainer>
        </DiamondSponserContainer>
{/* 
        <GoldSponserContainer>
            <GoldSponserTitle>Gold</GoldSponserTitle>
            <GoldSponserLogoContainer>
                <GoldSponserLogo><img src={}></img></GoldSponserLogo>

            </GoldSponserLogoContainer>
        </GoldSponserContainer> */}

        <SilverSponserContainer>
            <GoldSponserTitle>Silver</GoldSponserTitle>
            <SilverSponserLogoContainer>

              <Desktop>
                <SilverSponserLogo><img src={Zerion}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={MoonBeam}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Certik}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Pillar}></img> </SilverSponserLogo>
                <SilverSponserLogo><img src={Giveth}></img> </SilverSponserLogo>
                </Desktop>

                <Mobile>
                <SilverSponserLogoM><img src={SM1}></img> </SilverSponserLogoM>
                <SilverSponserLogoM><img src={SM2}></img> </SilverSponserLogoM>
                <SilverSponserLogoM><img src={SM3}></img> </SilverSponserLogoM>
                <SilverSponserLogoM><img src={SM4}></img> </SilverSponserLogoM>
                <SilverSponserLogoM><img src={SM5}></img> </SilverSponserLogoM>
                </Mobile>

            </SilverSponserLogoContainer>
        </SilverSponserContainer>


        <GoldSponserContainer>
            <GoldSponserTitle>Bronze</GoldSponserTitle>
            <Desktop>
            <SilverSponserLogoContainer>

                <BronzeSponserLogo><img src={Degate}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Moralis}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Aragon}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Witnet}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Apwine}></img></BronzeSponserLogo>
                <BronzeSponserLogo><img src={Mochi}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
                <BronzeSponserLogo><img src={Certora}></img></BronzeSponserLogo>
            </SilverSponserLogoContainer>
            </Desktop>

           
              <SilverSponserLogoContainer>
              <Mobile>
            <BronzeSponserLogo><img src={SM6} ></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM7}></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM8}width="163px" height="118px"></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM9}width="163px" height="118px"></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM10}width="163px" height="118px"></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM11}width="163px" height="118px"></img></BronzeSponserLogo>
            <BronzeSponserLogo><img src={SM12}width="163px" height="118px"></img></BronzeSponserLogo>
            </Mobile>
        
            </SilverSponserLogoContainer>

        </GoldSponserContainer>

        {/* <SilverSponserContainer>
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
        </SilverSponserContainer> */}


<TitleBox>
        <Title1> Partners</Title1>
        </TitleBox>

        <SilverSponserContainer>
            <GoldSponserTitle>Launch Partners</GoldSponserTitle>
            <SilverSponserLogoContainer>
                <OrganizerLogo><a href="https://doingud.com/"><img src={ETH} width="270px" height=" 200px"></img></a></OrganizerLogo>
                <OrganizerLogo><a href="https://doingud.com/"><img src={DoinGud} width="270px" height=" 200px"></img></a></OrganizerLogo>
                <OrganizerLogo><a href="https://wearefloc.com/"><img src={Floc} width="270px" height=" 200px"></img></a></OrganizerLogo>
                <OrganizerLogo><a href="https://twitter.com/PolisParallela"><img src={Polis} width="270px" height=" 200px"></img></a></OrganizerLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
                <OrganizerLogo><a href=""><img src={ShrineHouse} width="270px" height=" 200px"></img></a></OrganizerLogo>
                <OrganizerLogo><a href=""><img src={GiantCookie} width="270px" height=" 200px"></img></a></OrganizerLogo>
            </SilverSponserLogoContainer>
        </SilverSponserContainer>

                <GoldSponserContainer>
            <GoldSponserTitle>Media Partners</GoldSponserTitle>
            <GoldSponserLogoContainer>
                <GoldSponserLogo><a href="https://es.beincrypto.com/"><img src={BeInCrypto}></img></a></GoldSponserLogo>
                <GoldSponserLogo><a href="https://www.eclecticmethod.net/"><img src={Eclectic}></img></a></GoldSponserLogo>
                <GoldSponserLogo><a href="https://defiprime.com/"><img src={DefiPrime}></img></a></GoldSponserLogo>
            </GoldSponserLogoContainer>
        </GoldSponserContainer>




    </Container>
    </>
  )
}

export default Sponsers