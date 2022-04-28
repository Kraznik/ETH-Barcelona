import React from 'react'; 
import styled from "styled-components";
import QR from "../../../assets/QRCode.png";


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 530px;
height: 536px;
left: calc(50% - 530px/2);
background: white;
border: 1px solid black;
border-radius: 4px;
`;

const Heading = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
/* Green Leaf */
color: #354B37;
/* Inside auto layout */
flex: none;
order: 0;
padding-top:5%;
flex-grow: 0;
margin: 24px 0px;
`;

const QRCode = styled.div`
background-image: url(${QR});
height:180px;
width:180px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
align-items:center;
margin-left: auto;
margin-right: auto;
display: block;
margin-top:10%;
justify-content:center;
`;

const Description = styled.div`
/* Body Text M */

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* or 125% */

text-align: center;

/* Green Leaf */

color: #354B37;




`;

const ImageContainer = styled.div`

;`;

const PrintContainer = styled.div``;

const DownloadContainer = styled.div``;

const EmailContainer = styled.div``;

const index = () => {
  return (
    <>
    <Container>
        <Heading> You are going to ETH BCN!  </Heading>
        <Description> This QR code is your access to the event. You could download it or access here with your wallet to use it.</Description>
        <QRCode> </QRCode>
        <ImageContainer>
            <PrintContainer>
             

            </PrintContainer>
            <DownloadContainer>

            </DownloadContainer>
            <EmailContainer>

            </EmailContainer>

        </ImageContainer>
    </Container>
    </>
  )
}

export default index