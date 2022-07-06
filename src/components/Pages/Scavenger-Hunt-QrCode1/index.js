import React, { useEffect, useState } from "react";
import {
  Container,
  Banner,
  Title1,
  Title2,
  Footer,
  InputContainer,
  Title3,
  Description2,
  Input,
  Submit,
  TikcetContainer,
} from "../../Pages/Scavenger-Play";
import styled from "styled-components";
import NFT from "../../../assets/NFT.svg";
import Logo from "../../../assets/NftLogo.svg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import H9 from "../../../assets/H9.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Titles } from "../Scavenger-Hunt-Details";
import { scavhunt } from "./config";

const ImageContainer = styled.div`
  width: 343px;
  height: 402px;
  background: #ffffff;
  margin: 25px auto;

  img {
    width: 343px;
    height: auto;
  }
`;

const Name = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */
  text-align: left;
  margin-top: 8px;
  margin-left: 16px;
  letter-spacing: -0.04em;
  text-align: left;

  color: #2b2b2b;
`;

const Name2 = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */
  text-align: center;
  margin-top: 8px;
  margin-left: 16px;
  letter-spacing: -0.04em;
  margin: 10px 0;
`;

const Creator = styled.div`
  display: inline-block;
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const QrCodeScvengerHunt = () => {
  const { id, hunt } = useParams();
  const [ticketId, setTicketId] = useState();
  const [success, setSuccess] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();
  const [scavData, setScavData] = useState();
  const [minted9thNft, setMinted9thNft] = useState(false);

  const navigate = useNavigate();

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

  const claimNft = async () => {
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
          const url = `https://eth-barcelona.kraznikunderverse.com/mintHuntToken/${ticketId}`;

          if (id == 1) {
            var post_data = {
              creatorTypeId: 11,
              toAddress: walletAddress,
              part1: true,
            };
          } else if (id == 2) {
            var post_data = {
              creatorTypeId: 12,
              toAddress: walletAddress,
              part2: true,
            };
          } else if (id == 3) {
            var post_data = {
              creatorTypeId: 13,
              toAddress: walletAddress,
              part3: true,
            };
          } else if (id == 4) {
            var post_data = {
              creatorTypeId: 14,
              toAddress: walletAddress,
              part4: true,
            };
          } else if (id == 5) {
            var post_data = {
              creatorTypeId: 15,
              toAddress: walletAddress,
              part5: true,
            };
          } else if (id == 6) {
            var post_data = {
              creatorTypeId: 16,
              toAddress: walletAddress,
              part6: true,
            };
          } else if (id == 7) {
            var post_data = {
              creatorTypeId: 17,
              toAddress: walletAddress,
              part7: true,
            };
          } else if (id == 8) {
            var post_data = {
              creatorTypeId: 18,
              toAddress: walletAddress,
              part8: true,
            };
          }

          const { data } = await axios.post(url, post_data, options);

          if (data?.response?.minted) setSuccess(true);

          if (data?.response?.minted9th) setMinted9thNft(true);

          setLoading(false);

          // setTimeout(
          //   navigate(`/details/${ticketId}`, { replace: true }),
          //   3000000
          // );

          //
        } catch (err) {
          console.error(err);
          setLoading(false);

          if (err?.response?.data?.message === "Already minted this part") {
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

  const fetchScavDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/scavengerPage/${id}`;
      const { data } = await axios.get(url, options);
      setScavData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchScavDetails();
  }, []);

  if (hunt === scavhunt[id]) {
    return (
      <>
        <Container>
          <Banner></Banner>

          <Title1>DoGood</Title1>
          <Title2>SCAVENGER HUNT</Title2>

          <ImageContainer>
            {/* <img src={NFT}></img> */}
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/dev-eth-barcelona.appspot.com/o/ScavHunt%2F2.png?alt=media&token=26468ca2-57f4-4ea2-bd99-164004494164" />
          <Name>Mother Earths Renewal</Name> */}
            <img src={scavData?.image} />
            <Name>{scavData?.name}</Name>
            {/* <Creator>
            <img src={Logo}></img>
            <Name>@creatorname</Name>
            </Creator> */}
          </ImageContainer>

          <InputContainer>
            <Title1>NFT {id} of 9</Title1>
            <TikcetContainer>
              <Input>
                <br />
                <input
                  type="number"
                  placeholder="NFTicketID"
                  className="ticketidinput"
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                ></input>
                <br />
              </Input>
              <Submit onClick={claimNft} disabled={loading ? true : false}>
                {loading ? <span>Claiming...</span> : <span>Claim NFT</span>}
              </Submit>
            </TikcetContainer>
          </InputContainer>

          {message ? <Name>{message}</Name> : null}

          {success ? (
            <>
              <Name2 className="claimed">Successfully Claimed ;)</Name2>
              <NavLink to={`/details/${ticketId}`} className="view">
                View your heart here -
              </NavLink>
            </>
          ) : alreadyClaimed ? (
            <>
              <Name2>Have already Claimed!!</Name2>
              <NavLink to={`/details/${ticketId}`} className="view">
                View your heart here -
              </NavLink>
            </>
          ) : null}

          {error ? (
            <Name style={{ color: "red" }}>
              Got Error!! Please try again...
            </Name>
          ) : null}

          {minted9thNft ? (
            <div>
              {" "}
              <div className="box">
                <div className="title">You won!</div>
                <div className="des">
                  You are one of the 9 winners of the DoGud Scavenger hunt! Make
                  sure to go to the DoinGud Booth and claim your prize.
                </div>
                <img src={H9}></img>
              </div>
            </div>
          ) : null}
          <Footer>
            <div className="ft">
              <a href="/scavenger">
                <img src={DoinGud} className="dg"></img>
              </a>
              <a href="https://www.instagram.com/ethbarcelona/">
                {" "}
                <img src={Instagram} className="social"></img>
              </a>

              <a href="https://twitter.com/eth_barcelona">
                {" "}
                <img src={Twitter} className="social"></img>
              </a>
            </div>
            <p className="rights"> © DoinGud. All Right Reserved. </p>
          </Footer>
        </Container>
      </>
    );
  }
};

export default QrCodeScvengerHunt;
