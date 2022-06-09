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
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import ErrorPage from "../../ErrorPage";
import Poap from "../Poap";

const Box = styled.div`
  background: #f5c34b;
  padding-bottom: 12%;
  padding-top: 2%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 530px;
  /* height: 536px; */
  height: fit-content;
  padding: 40px;
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
  /* display: inline-block;  */
  display: flex;
  gap: 40px;
`;

const PrintContainer = styled.div``;

const DownloadContainer = styled.div``;

const EmailContainer = styled.div``;

const index = ({ account }) => {
  const [encryptedHash, setEncryptedHash] = useState(null);
  const [redeemData, setRedeemData] = useState({
    name: "",
    optionalName: "",
    email: "",
  });
  const [tokenOwned, setTokenOwned] = useState(false);
  const [tokenScanned, setTokenScanned] = useState(false);
  const [ticketId, setTicketId] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  const getIfTokenScanned = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/event/${id}`;
      const res = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      console.log(res.data?.data);

      if (res.data?.data?.timeOfScan) {
        setTokenScanned(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getIfTokenScanned();
  }, [account]);

  const calTicketId = async () => {
    try {
      const tokenId = id;
      const url = `https://eth-barcelona.kraznikunderverse.com/collection`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      console.log("data: ", data?.data);
      const collections = data.data;
      let ticketId;
      const inHex = "0x" + BigInt(tokenId).toString(16);
      console.log("token in hex: ", inHex);
      const nftTypeId = inHex.slice(0, -8);
      console.log("nft type id: ", nftTypeId);

      collections.map((collection) => {
        if (nftTypeId === collection.nftTypeId) {
          // convert in hex
          const editionNum = parseInt(inHex.slice(-8), 16);
          ticketId = editionNum;
          if (collection.id > 1) {
            // collection supply = collectionIndex
            for (let i = 1; i < collection.id; i++) {
              // ticketId += previous_supply
              ticketId += parseInt(collections[i - 1].collectionIndex);
            }
          }
        }
      });

      console.log("ticket Id: ", ticketId);
      setTicketId(ticketId);
      // return ticketId;
    } catch (err) {
      console.error(err);
    }
  };

  useState(() => {
    calTicketId();
  }, []);

  const getTokenRedeemData = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/users/${account}/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      // console.log(data);
      if (data?.user?.name) setTokenOwned(true);
      // wallet address is not lowercased here
      if (data?.user?.walletAddress === account) setTokenOwned(true);
      setRedeemData(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (account) getTokenRedeemData();
  }, [account]);

  useEffect(() => {
    const run = async () => {
      const tokenIdInDec = parseInt(id, 16);
      const url = `https://eth-barcelona.kraznikunderverse.com/qrcode/${id}`;

      let hashFound = false;
      while (!hashFound) {
        const { data } = await axios.get(url, {
          headers: {
            validate: process.env.REACT_APP_VALIDATE_TOKEN,
          },
        });

        // console.log(
        //   "encrypted data model wallet address: ",
        //   data?.walletAddress
        // );

        // wallet address lowercased here
        if (data?.walletAddress === account.toLowerCase()) {
          // console.log("encypted hash: ", data);
          setEncryptedHash(data?.encrypted);
          setTokenOwned(true);
          hashFound = true;
        }
      }
    };
    if (account) run();
  }, [redeemData, account]);

  if (tokenScanned) {
    return (
      // <Poap />
      <Navigate to={`/tickets/${id}/poap`} replace />
    );
  }

  return (
    <>
      {tokenOwned ? (
        <Box>
          <Container style={{ position: "relative" }}>
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                position: "absolute",
                top: 10,
                left: 10,
              }}
              onClick={() => navigate(-1)}
            >
              Back
            </div>
            <Heading> You are going to ETH BCN! </Heading>
            <Description>
              {" "}
              This QR code is your access to the event. You could download it or
              access here with your wallet to use it.
            </Description>
            <br />

            <Description>
              <div>Name: {redeemData.name}</div>
              <div>Display name: {redeemData.optionalName}</div>
              <div>Email: {redeemData.email} </div>
            </Description>
            <br />
            <Description>
              <div>Ticket Id: {ticketId} </div>
            </Description>

            {encryptedHash ? (
              <QRCodes>
                {/* <QRCodeSVG value="$2b$10$2595K0J6lkp6bFhOhtu9WOQBdQVEFKrgOF0V/4aD74Yrch8ZyVTCO"></QRCodeSVG> */}
                <QRCodeSVG
                  // value={`https://dev-eth-barcelona.web.app/organizer?tokenId=${id}&ownerAddress=${account}&ticketOwnerName=${redeemData.name}&encryptedHash=${encryptedHash}`}
                  value={`https://dev-eth-barcelona.web.app/organizer?tid=${id}&owner=${account}&name=${redeemData.name}&hash=${encryptedHash}`}
                ></QRCodeSVG>
              </QRCodes>
            ) : (
              <QRCodes>
                Please wait while the qr code is being generated...
                <br />
                Reload and connect wallet if not displayed in 2 mins..
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
        </Box>
      ) : (
        <ErrorPage text={""} />
        // <Navigate to="/tickets/show" replace />
      )}
    </>
  );
};

export default index;
