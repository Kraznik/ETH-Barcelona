import React, { useState } from "react";
import Ticket from "../../../assets/RedeemTicket.png";
import styled from "styled-components";
import "./style.css";
import TicketToken from "../../../ethereum/TicketToken";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  margin: auto;
  margin-top: 3%;
  padding-top: 1%;
  width: 600px;
  height: 700px;
  left: calc(50% - 530px / 2);

  /* White */
  border: 1px solid black;
  background: #ffffff;
  border-radius: 4px;
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
`;

const Tickets = styled.div`
  background-image: url(${Ticket});
  width: 180px;
  height: 180px;
  margin: auto;
  margin-top: 20px;
  border-radius: 4px;
`;

const Forum = styled.div`
  padding: 0 5%;
  text-align: left;
  margin-left: 10%;
`;

const TicketId = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  padding: 10px;
  /* identical to box height, or 100% */
`;

const Redeem = styled.button``;

const RedeemNFT = ({ account }) => {
  const [user, setUser] = useState({
    fullName: "",
    displayName: "",
    email: "",
  });

  const { id } = useParams();
  const tid = id;

  const onBurn = async (tokenId) => {
    // await saveData();
    try {
      console.log("Burning the ticket");
      const burnWalletAddress = "0x000000000000000000000000000000000000dEaD";
      // "0x0000000000000000000000000000000000000000";

      console.log("token id in hex: ", BigInt(tokenId).toString(16));

      console.log("token id to burn: ", tokenId);
      const result = await TicketToken.methods
        .safeTransferFrom(account, burnWalletAddress, tokenId, 1, "0x0")
        // .burn(account, tokenId, 1)
        .send({ from: account });

      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const saveData = async () => {
    const url = "https://eth-barcelona.kraznikunderverse.com/users";
    const data = {
      name: user.fullName,
      optionalName: user.displayName,
      email: user.email,
    };
    await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        validate: "alpha romeo tango",
      },
    });
  };

  return (
    <>
      <Container>
        <Title>Redeem NFT</Title>
        <Description>
          Redeem your NFTicket to get a QR code to enter the event
        </Description>
        <Forum>
          <label className="text">Full Name</label>
          <br />
          <input
            type="text"
            placeholder="Add your full name"
            className="input"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          ></input>
          <br />

          <label className="text">Display Name</label>
          <br />
          <input
            type="text"
            placeholder="How do you want to be called"
            className="input"
            value={user.displayName}
            onChange={(e) => setUser({ ...user, displayName: e.target.value })}
          ></input>
          <br />

          <label className="text">Email</label>
          <br />
          <input
            type="text"
            placeholder="name@email.com"
            className="input"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <br />
        </Forum>
        <Tickets></Tickets>
        <TicketId> NFTicket ${tid.slice(-2)}</TicketId>
        <Redeem onClick={() => onBurn(tid)}>Redeem Now</Redeem>
        {/* <Link onClick={() => onBurn(tid)} to={`/tickets/${tid}/qrcode`}>
          RedeemNFT
        </Link> */}
      </Container>
    </>
  );
};

export default RedeemNFT;
