import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/Header.svg";
import "./style.css";
import SpeakerImage from "../../../assets/Card.png";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import DoinGud from "../../../assets/ETH-BCN.svg";
import Twitter from "../../../assets/ETH-Twitter.svg";
import Instagram from "../../../assets/ETH-Insta.svg";
import S from "../../../assets/S.png";
import { speakers } from "./speaker-map";

const Container = styled.div``;

export const Header = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  height: 125px;
`;

const InputContainer = styled.div`
  background: #354b37;
  padding: 20px 0;
`;

const Title1 = styled.div`
  font-family: "Dahlia-C";
  font-style: normal;
  font-weight: 500;
  font-size: 77px;
  line-height: 56px;
  font-color: transparent;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f5c34b;
  text-transform: uppercase;
`;

const Title2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 56px;
  text-align: center;
  color: #f5c34b;
`;

const ImageContainer = styled.div`
  width: 310px;
  height: 423px;
  background: #f8f9fa;
  border-radius: 300px 300px 0px 0px;
  margin: 20px auto;
`;

const Image = styled.div`
  padding: 96px 50px 0 50px;
`;

export const Name = styled.div`
  font-family: "Dahlia-D";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  /* identical to box height, or 156% */
  margin-top: 17px;

  color: #354b37;
`;

const Org = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  text-align: center;

  color: #354b37;
`;

export const TicketInput = styled.div`
  position: absolute;
  width: 100%;
  height: 285px;
  background: #f5c34b;
`;

export const Title3 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  /* or 156% */

  color: #354b37;
`;

export const Input = styled.div``;

export const Footer = styled.div`
  padding: 30px 17px;
  height: 108px;
  background: #354b37;
`;

export const CircleOut = styled.div`
  color: #354b37;
  box-sizing: border-box;
  border: 0.8px solid #354b37;
  transform: rotate(-6.41deg);
  width: 112px;
  height: 50px;
  border-radius: 50%;
  margin: 10px auto;

  &:hover {
    transform: rotate(6.7deg);
    cursor: pointer;
  }
`;

export const CircleIn = styled.div`
  background: #354b37;
  width: 112px;
  transform: rotate(+6.41deg);
  height: 50px;
  padding: 5% 18% 5% 5%;
  color: white;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  test-align: center;
  border-radius: 50%;

  &:hover {
    background: none;
    transform: rotate(-6.41deg);
    color: #354b37;
  }
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const SpeakerClaim = () => {
  const { id, speakerMap } = useParams();
  const [speakerData, setSpeakerData] = useState();
  const [ticketId, setTicketId] = useState();

  const [success, setSuccess] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();

  const fetchSpeakerDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/speakersPage/${id}`;
      const { data } = await axios.get(url, options);
      console.log(data);
      setSpeakerData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSpeakerDetails();
  }, []);

  const fetchWalletAddress = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/getusersfromticket/${ticketId}`;
      const { data } = await axios.get(url, options);
      console.log(data);
      if (data?.message === "Ticket id not found") return "Not found";
      return data?.walletAddress;
    } catch (err) {
      console.error(err);
    }
  };

  const mintSpeakerNft = async () => {
    setSuccess(false);
    setAlreadyClaimed(false);
    setError(false);
    setMessage();

    if (ticketId) {
      if (ticketId > 4000) {
        setMessage("Ticket Id does not exist.");
        return;
      }
      var walletAddress = await fetchWalletAddress();
      console.log("wallet address: ", walletAddress);
      if (walletAddress === "Not found") {
        setMessage("Ticket Id not redeemed");
        return;
      }
      setLoading(true);

      if (walletAddress) {
        try {
          // const url = `https://eth-barcelona.kraznikunderverse.com/mintSpeakersNft/${ticketId}`;
          const url = `https://eth-barcelona.kraznikunderverse.com/mintSpeakerNft/${ticketId}`;

          var post_data = {
            creatorTypeId: id - 1,
            toAddress: walletAddress,
            speakerId: id,
          };
          // if (id == 1) {
          //   var post_data = {
          //     creatorTypeId: 12,
          //     toAddress: walletAddress,
          //     speakerId: id,
          //   };
          // }

          const { data } = await axios.post(url, post_data, options);

          if (data?.response?.minted) setSuccess(true);

          setLoading(false);

          // setTimeout(
          //   navigate(`/details/${ticketId}`, { replace: true }),
          //   3000000
          // );

          //
        } catch (err) {
          console.error(err);
          setLoading(false);

          if (err?.response?.data?.message === "Already minted this speaker") {
            setAlreadyClaimed(true);
            // setTimeout(
            //   navigate(`/details/${ticketId}`, { replace: true }),
            //   30000
            // );
          } else setError(true);
        }
      }
    }
    setLoading(false);
  };

  if (speakerMap === speakers[id])
    return (
      <>
        <Container>
          <Header></Header>

          <InputContainer>
            <Title1>SPEAKERS NFT {id}</Title1>
            <Title2>ETHBarcelona</Title2>
            {/* <ImageContainer>
            <Image>
              <img src={SpeakerImage}></img>
            </Image>
            <Name>{speakerData?.name}</Name>
            <Org>{speakerData?.org}</Org>

          </ImageContainer> */}
            <img src={S}></img>
          </InputContainer>

          <TicketInput>
            <Title3>NFTicket ID</Title3>
            <Input>
              <br />
              <input
                type="number"
                placeholder="Ticket ID"
                className="ticketid"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              ></input>
              <br />
            </Input>
            <CircleOut>
              <CircleIn
                onClick={mintSpeakerNft}
                disabled={loading ? true : false}
              >
                {loading ? (
                  <span>Minting...</span>
                ) : (
                  <span className="mint">Mint NFT</span>
                )}
              </CircleIn>
            </CircleOut>

            <div>
              {message ? <Name>{message}</Name> : null}

              {success ? (
                <>
                  <Name>Successfully Claimed ;)</Name>
                  <div className="vi">
                    <NavLink to={`/speakers/${ticketId}`} className="view">
                      View your connections here -
                    </NavLink>
                  </div>
                </>
              ) : alreadyClaimed ? (
                <>
                  <Name>Already Claimed!!</Name>
                  <div className="vi">
                    <NavLink to={`/speakers/${ticketId}`} className="view">
                      View your connections here -
                    </NavLink>
                  </div>
                </>
              ) : null}

              {error ? (
                <Name style={{ color: "red" }}>
                  Error!! Please try again...
                </Name>
              ) : null}
            </div>
            <Footer>
              <div className="ft">
                <img src={DoinGud} className="dg"></img>
                <img src={Instagram} className="social"></img>
                <img src={Twitter} className="social"></img>
              </div>
            </Footer>
          </TicketInput>
        </Container>
      </>
    );
};

export default SpeakerClaim;
