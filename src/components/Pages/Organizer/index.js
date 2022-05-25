import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: #f5c34b;
  height: 100%;
  padding: 3% 3% 24% 3%;

  @media (max-width: 800px) {
    margin: 0 0 0 0;
    padding: 10% 10% 80% 6%;
  }
`;

const InfoContainer = styled.div`
  border: 1px solid black;
  background: #ffffff;
  width: 530px;
  /* height: 404px; */
  height: 450px;
  /* height: fit-content; */
  margin: 0 auto;
  padding: 0 56px;

  @media (max-width: 800px) {
    margin: 0 0 0 0;
    padding: 20px;

    width: 343px;
    height: 356px;
  }
`;

const Question = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 18px;
  line-height: 20px;
  padding: 16px 0 0 0;

  @media (max-width: 800px) {
    margin: 20px 0 0 0;
    padding: 0;
  }
`;

const Answer = styled.div`
  padding: 4px 0 8px 8px;
  margin: 6px 0 0 0;
  width: 418px;
  height: 36px;
  font-size: 18px;
  text-align: left;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;

  @media (max-width: 800px) {
    margin: 10px 0 0 0;
    padding: 0;
    width: 300px;
  }
`;

const Heading = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  margin: 5%;
  /* Green Leaf */

  color: #354b37;

  @media (max-width: 800px) {
    margin: 0 0 0 0;
    padding: 0;
  }
`;

const BuyContainer = styled.div`
  width: 184.68px;
  height: 50px;
  border: 0.8px solid #354b37;
  transform: rotate(-4.15deg);
  border-radius: 50%;
  margin: 50px auto;
  cursor: pointer;

  &:hover {
    transform: rotate(+4.15deg);
    color: #354b37 !important;
  }

  @media (max-width: 800px) {
    margin: 25px 0 0 50px;
    padding: 0;
  }
`;

const BuyInnerContainer = styled.div`
  background: #354b37;
  width: 184.68px;
  height: 50px;
  transform: rotate(+4.15deg);
  border-radius: 50%;
  padding: 12px 32px 16px 33px;

  &:hover {
    background: transparent;
    transform: rotate(-4.15deg);
    padding: 12px 33px 16px 33px;
    color: #354b37 !important;
  }

  @media (max-width: 800px) {
    margin: 0 0 0 0;
    padding: 0;
  }
`;

const BuyNow = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  color: white;

  @media (max-width: 800px) {
    font-size: 20px;
    padding-top: 10px;
  }

  &:hover {
    color: #354b37;
    padding-top: 0px;
  }
`;

const ScanMessage = styled(Question)`
  text-align: center;
  color: #354b37;
  font-weight: bold;
`;

const Organizer = ({ orgId, account }) => {
  // const [ticketOwnerName, setTicketOwnerName] = useState("");
  const [ticketEdition, setTicketEdition] = useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [scannedMessage, setScannedMessage] = useState("");

  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  useEffect(() => {
    let tid = query.get("tokenId");
    if (tid) {
      let wave = "";
      let tokenIdInhex = BigInt(tid).toString(16);
      let editionNum = parseInt(tokenIdInhex.slice(-8));
      let typeId = "0x" + tokenIdInhex.slice(0, -8);
      let ticketCollectionId = typeId.slice(-12);
      if (parseInt(ticketCollectionId) == 4) wave = "Early Bird 1st Wave";
      else if (parseInt(ticketCollectionId) == 5) wave = "Early Bird 2nd Wave";

      setTicketEdition(wave + " #" + editionNum);
    }
  }, []);

  const confirmScan = async () => {
    try {
      const url = "https://eth-barcelona.kraznikunderverse.com/event";
      const scan_data = {
        organiserID: orgId,
        orgName: "test",
        organizerAddress: account,
        ticketOwnerAddress: query.get("ownerAddress"),
        ticketTokenId: query.get("tokenId"),
        encrypted: query.get("encryptedHash"),
      };

      console.log("scan data: ", scan_data);

      const res = await axios.post(url, scan_data, {
        headers: {
          validate: "alpha romeo tango",
        },
      });
      console.log(res);
      setScannedMessage(res.data.message);
      console.log("scanned token succesfully added");
      setConfirmed(true);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <>
      <Container>
        <InfoContainer>
          <Heading>ETH-Barcelona QR Code Scan Results</Heading>
          <Question>Name</Question>
          <Answer>{query.get("ticketOwnerName")}</Answer>
          <Question>Ticket Edition</Question>
          <Answer>{ticketEdition}</Answer>
          <Question>Organizer Id</Question>
          <Answer>{orgId}</Answer>

          {confirmed || error ? (
            confirmed ? (
              <ScanMessage>
                <br />
                {scannedMessage}!!
              </ScanMessage>
            ) : (
              <ScanMessage>
                Error!!
                <br />
                {scannedMessage}!!
              </ScanMessage>
            )
          ) : (
            <BuyContainer>
              <BuyInnerContainer>
                <BuyNow onClick={confirmScan}>Confirm</BuyNow>
              </BuyInnerContainer>
            </BuyContainer>
          )}
        </InfoContainer>
      </Container>
    </>
  );
};

export default Organizer;
