import react, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import QR from "../../../assets/QRCode.png";
import Print from "../../../assets/print.svg";
import Download from "../../../assets/download.svg";
import Email from "../../../assets/email.svg";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import { useParams } from "react-router-dom";

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
  display: inline-block; ;
`;

const PrintContainer = styled.div``;

const DownloadContainer = styled.div``;

const EmailContainer = styled.div``;

const index = ({ account }) => {
  const [encryptedHash, setEncryptedHash] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const run = async () => {
      //   const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/123565`;
      const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/${id}`;
      const result = await axios.get(url, {
        headers: {
          Validate: "alpha romeo tango",
        },
      });
      console.log("encypted hash: ", result);
      setEncryptedHash(result.data.encrypted);

      //   const inputs = [
      //     {
      //       indexed: true,
      //       name: "operator",
      //       type: "address",
      //     },
      //     {
      //       indexed: true,
      //       name: "from",
      //       type: "address",
      //     },
      //     {
      //       indexed: true,
      //       name: "to",
      //       type: "address",
      //     },
      //     {
      //       name: "id",
      //       type: "uint256",
      //     },
      //     {
      //       name: "amount",
      //       type: "uint256",
      //     },
      //   ];

      //   const log_data =
      //     "0x0000000000000000000000000000000000000000000000000000929ea0c8c400000000000000000000000000000000000000000000000000050a75dfa1c9a9270000000000000000000000000000000000000000000014c8bfa437f1b398c0c80000000000000000000000000000000000000000000000000509e3410100e5270000000000000000000000000000000000000000000014c8bfa4ca90546184c8";

      //   const topics = [
      //     // "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
      //     "0x0000000000000000000000000000000000000000000000000000000000001010",
      //     "0x00000000000000000000000070c1ea05e2a54dffe1088d4a54cb1a6c25c9077c",
      //     "0x000000000000000000000000be188d6641e8b680743a4815dfa0f6208038960f",
      //   ];

      //   const typesArray = [
      //     { type: "address", name: "operator", indexed: "true" },
      //     { type: "address", name: "from", indexed: "true" },
      //     { type: "address", name: "to", indexed: "true" },
      //     { type: "uint256", name: "id" },
      //     { type: "uint256", name: "amount" },
      //   ];
      //   //   const res = web3.eth.abi.decodeLog(inputs, log_data, topics);
      //   const decodedParameters = web3.eth.abi.decodeParameters(inputs, log_data);

      //   console.log(JSON.stringify(decodedParameters, null, 4)); // correct
      //   //   console.log("decoded log data: ", JSON.stringify(res, null, 4));

      //   const url_get =
      //     "https://api.covalenthq.com/v1/80001/events/address/0x4137cF37598EE871d1F4A6DEE9188217Ed40c649/?starting-block=26200120&ending-block=26200140&key=ckey_9f2ed5152bcb4eb1a8dbc4cf854";

      //   const { data } = await axios.get(url_get);
      //   console.log(data.data.items[0].decoded.params[3].value);
      //   const res = web3.eth.abi.decodeLog(
      //     inputs,
      //     data.items[0].raw_log_data,
      //     data.items[0].raw_log_topics
      //   );
      //   console.log("decoded log data: ", JSON.stringify(res, null, 4));
    };
    run();
  }, []);

  return (
    <>
      <Container>
        <Heading> You are going to ETH BCN! </Heading>
        <Description>
          {" "}
          This QR code is your access to the event. You could download it or
          access here with your wallet to use it.
        </Description>
        {encryptedHash ? (
          <QRCodes>
            {/* <QRCodeSVG value="$2b$10$2595K0J6lkp6bFhOhtu9WOQBdQVEFKrgOF0V/4aD74Yrch8ZyVTCO"></QRCodeSVG> */}
            <QRCodeSVG
              // value={`https://organizer-access.web.app?burn_hash=${encryptedHash}`}
              value={`https://ethbc-organizeraccess.web.app/organizer-access?tokenId=${id}&ownerAddress=${account}&encryptedHash=${encryptedHash}`}
            ></QRCodeSVG>
          </QRCodes>
        ) : (
          <QRCodes>
            Please wait while the qr code is being generated...
            <br />
            Reload if not displayed in 2 mins..
          </QRCodes>
        )}

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
