import React, { useEffect, useState } from "react";
import Ticket from "../../../assets/RedeemImage.svg";
import styled from "styled-components";
import "./style.css";
import TicketToken from "../../../ethereum/TicketToken";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorPage from "../../ErrorPage";

const Container = styled.div`
  margin: auto;
  padding: 0px 0 20px 0;
  width: 600px;
  margin-bottom: 43px;
  margin-top: 40px;
  height: 700px;
  left: calc(50% - 530px / 2);
  border: 1px solid black;
  background: #ffffff;
  border-radius: 4px;

  @media (max-width: 800px) {
    width: 343px;
    height: 656px;
    background: #ffffff;
    border-radius: 4px;
    padding: 0;
    margin: auto;
  }
`;

const Title = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  align-items: center;
  text-align: center;

  /* Green Leaf */

  color: #354b37;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;

  @media (max-width: 800px) {
    padding: 0;
    margin: 30px 0 0 0;
  }
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding: 0 16%;
  line-height: 20px;
  /* or 125% */

  text-align: center;

  /* Green Leaf */

  color: #354b37;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;

  @media (max-width: 800px) {
    width: 295px;
    height: 40px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #354b37;
    padding: 0 0 25px 0;
    margin: 24px 0 0 24px;
  }
`;

const Tickets = styled.div`
  background-image: url(${Ticket});
  width: 133px;
  height: 133px;
  margin: auto;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 3px 3px 0px 0px;

  @media (max-width: 800px) {
  }
`;

const Forum = styled.div`
  padding: 0 5%;
  text-align: left;
  margin-left: 10%;
  margin-top: 24px;
  margin-bottom: 43px;

  @media (max-width: 800px) {
    padding: 0 0 0 24px;
    margin: 0;
  }
`;

const TicketId = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 4px;

  color: #354b37;

  @media (max-width: 800px) {
  }
`;

const TicketBox = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  width: 135px;
  margin: 0 auto;

  @media (max-width: 800px) {
    margin: 20px 100px 0 100px;
  }
`;

const RedeemOut = styled.div`
  width: 156.7px;
  height: 50px;
  border-radius: 50%;
  border: 0.8px solid #354b37;
  transform: rotate(-3.12deg);
  margin: auto;

  &:hover {
    transform: rotate(+3.12deg);
  }

  @media (max-width: 800px) {
    width: 156.7px;
    height: 50px;
    margin: 10px auto;
  }
`;

const Redeem = styled.button`
  text-decoration: none;
  border: none;
  background: #354b37;
  height: 48px;
  width: 158px;
  border-radius: 50%;
  top: calc(50% - 20px / 2 - 2.5px);
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  background: #354b37;
  line-height: 20px;
  color: #f8f9fa;
  transform: rotate(+3.12deg);

  &:hover {
    transform: rotate(-3.12deg);
    background: transparent;
    border: none;
    color: #354b37;
  }

  @media (max-width: 800px) {
  }
`;

const RedeemNFT = ({ account }) => {
  const [user, setUser] = useState({
    fullName: "",
    displayName: "",
    email: "",
  });

  const [tokenOwned, setTokenOwned] = useState(false);

  const { id } = useParams();
  const tid = id;

  const navigate = useNavigate();

  const onBurn = async () => {
    await saveData();
    try {
      console.log("Burning the ticket");
      const burnWalletAddress = "0x000000000000000000000000000000000000dEaD";
      // "0x0000000000000000000000000000000000000000";

      console.log("token id in dec: ", id);

      // Loading page
      const result = await TicketToken.methods
        .safeTransferFrom(account, burnWalletAddress, id, 1, "0x0")
        // .burn(account, tokenId, 1)
        .send({ from: account });

      console.log(result);

      navigate(`/tickets/${id}/qrcode`);
    } catch (err) {
      console.error(err);
    }
  };

  const saveData = async () => {
    const url = "https://eth-barcelona.kraznikunderverse.com/users";
    const post_data = {
      name: user.fullName,
      optionalName: user.displayName,
      email: user.email,
      walletAddress: account,
      tokenId: id,
    };

    const { data } = await axios.get(url + `/${account}/${id}`, {
      headers: {
        validate: process.env.REACT_APP_VALIDATE_TOKEN,
      },
    });

    if (data.user?.tokenId) {
      await axios.patch(url + `/${id}`, post_data, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
    } else {
      await axios.post(url, post_data, {
        headers: {
          "Content-Type": "application/json",
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
    }

    // try {
    // } catch (err) {
    //   console.error(err);
    //   console.log("Issue saving user data");
    // }
  };

  const checkIfTokenOwned = async () => {
    try {
      const balance = await TicketToken.methods.balanceOf(account, id).call();
      if (balance > 0) setTokenOwned(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfTokenOwned();
  }, [account]);

  return (
    <>
      {tokenOwned ? (
        <Container>
          <Title>Redeem NFT</Title>
          <Description>
            Redeem your NFTicket to get a QR code to enter the event
          </Description>

          <TicketBox>
            <Tickets></Tickets>
            <TicketId>
              #{parseInt(BigInt(tid).toString(16).slice(-5), 16)}
            </TicketId>
          </TicketBox>

          <Forum>
            <label className="text">Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Add your name as in your passport"
              className="input"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            ></input>
            <br />

            <label className="text">Display Name</label>
            <br />
            <input
              type="text"
              placeholder="Add your name for the lanyard"
              className="input"
              value={user.displayName}
              onChange={(e) =>
                setUser({ ...user, displayName: e.target.value })
              }
            ></input>
            <br />

            <label className="text">Email</label>
            <br />
            <input
              type="text"
              placeholder="Add your email for sending you notifications"
              className="input"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <br />
          </Forum>

          <RedeemOut>
            <Redeem onClick={onBurn}>Redeem Now</Redeem>
          </RedeemOut>

          {/* <Link onClick={() => onBurn(tid)} to={`/tickets/${tid}/qrcode`}>
          RedeemNFT
        </Link> */}
        </Container>
      ) : (
        <ErrorPage text={""} />
      )}
    </>
  );
};

export default RedeemNFT;
