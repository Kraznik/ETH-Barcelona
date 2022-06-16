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
} from "../../Pages/Speaker-Cards";
import styled from "styled-components";
import NFT from "../../../assets/NFT.svg";
import Logo from "../../../assets/NftLogo.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ImageContainer = styled.div`
  width: 343px;
  height: 402px;
  background: #ffffff;
  margin: 25px auto;
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

const Creator = styled.div`
  display: inline-block;
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const QrCodeScvengerHunt = () => {
  const { id } = useParams();
  const [ticketId, setTicketId] = useState();
  const [success, setSuccess] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();
  const [scavData, setScavData] = useState();

  const navigate = useNavigate();

  const fetchAddress = async () => {
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
      var walletAddress = await fetchAddress();
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
              creatorTypeId: 4,
              toAddress: walletAddress,
              part1: true,
            };
          } else if (id == 2) {
            var post_data = {
              creatorTypeId: 5,
              toAddress: walletAddress,
              part2: true,
            };
          } else if (id == 3) {
            var post_data = {
              creatorTypeId: 6,
              toAddress: walletAddress,
              part3: true,
            };
          } else if (id == 4) {
            var post_data = {
              creatorTypeId: 7,
              toAddress: walletAddress,
              part4: true,
            };
          } else if (id == 5) {
            var post_data = {
              creatorTypeId: 8,
              toAddress: walletAddress,
              part5: true,
            };
          } else if (id == 6) {
            var post_data = {
              creatorTypeId: 9,
              toAddress: walletAddress,
              part6: true,
            };
          } else if (id == 7) {
            var post_data = {
              creatorTypeId: 10,
              toAddress: walletAddress,
              part7: true,
            };
          } else if (id == 8) {
            var post_data = {
              creatorTypeId: 11,
              toAddress: walletAddress,
              part8: true,
            };
          }

          const { data } = await axios.post(url, post_data, options);

          if (data?.response?.minted) setSuccess(true);

          setLoading(false);

          setTimeout(
            navigate(`/details/${ticketId}`, { replace: true }),
            3000000
          );

          //
        } catch (err) {
          console.error(err);
          setLoading(false);

          if (err?.response?.data?.message === "Already minted this part") {
            setAlreadyClaimed(true);
            setTimeout(
              navigate(`/details/${ticketId}`, { replace: true }),
              30000
            );
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
                placeholder="TicketID"
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
          <Name>Successfully Claimed!!</Name>
        ) : alreadyClaimed ? (
          <Name>Have already Claimed!!</Name>
        ) : null}

        {error ? (
          <Name style={{ color: "red" }}>Got Error!! Please try again...</Name>
        ) : null}

        <Footer></Footer>
      </Container>
    </>
  );
};

export default QrCodeScvengerHunt;
