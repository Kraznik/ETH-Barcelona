import react from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import QR from "../../../assets/QRCode.png";
import Print from "../../../assets/print.svg";
import Download from "../../../assets/download.svg";
import Email from "../../../assets/email.svg";
import { QRCodeSVG } from "qrcode.react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 530px;
  margin-top: 10%;
  height: 536px;
  left: calc(50% - 530px / 2);
  background: white;
  border: 1px solid black;
  border-radius: 4px;
`;

const Heading = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  /* Green Leaf */
  color: #354b37;
  /* Inside auto layout */
  flex: none;
  order: 0;
  padding-top: 5%;
  flex-grow: 0;
  margin: 24px 0px;
`;

const QRCodes = styled.div`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 7.5%;
  margin-bottom: 10%;
  justify-content: center;
`;

const Description = styled.div`
  /* Body Text M */
  padding: 0 15%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  text-align: center;

  /* Green Leaf */

  color: #354b37;
`;

const ImageContainer = styled.div`
  display: inline-block;
`;

const PrintContainer = styled.div``;

const DownloadContainer = styled.div``;

const EmailContainer = styled.div``;

const index = () => {
  return (
    <>
      <Container>
        <Heading> You are going to ETH BCN! </Heading>
        <Description>
          {" "}
          This QR code is your access to the event. You could download it or
          access here with your wallet to use it.
        </Description>
        <QRCodes>
          <QRCodeSVG value="$2b$10$2595K0J6lkp6bFhOhtu9WOQBdQVEFKrgOF0V/4aD74Yrch8ZyVTCO"></QRCodeSVG>
        </QRCodes>
        <ImageContainer>
          <PrintContainer>
            <img src={Print}></img>
            Print
          </PrintContainer>
          <DownloadContainer>
            <img src={Download}></img>
            Download
          </DownloadContainer>
          <EmailContainer>
            <img src={Email}></img>
            Email
          </EmailContainer>
        </ImageContainer>
      </Container>
    </>
  );
};

export default index;
