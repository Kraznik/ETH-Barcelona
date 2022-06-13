import React, { useEffect, useState } from "react";
import Ticket from "../../../assets/RedeemImage.svg";
import styled from "styled-components";
import "./style.css";
import TicketToken from "../../../ethereum/TicketToken";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorPage from "../../ErrorPage";
import web3 from "../../../ethereum/web3";
import { useWeb3React } from "@web3-react/core";

const Box = styled.div`
  background: #f5c34b;
  padding: 2% 0;
`;

const Container = styled.div`
  margin: auto;
  padding: 0px 0 20px 0;
  width: 600px;
  margin-bottom: 43px;

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

export const Title = styled.div`
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

export const Description = styled.div`
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

export const Forum = styled.form`
  padding: 0 5%;
  text-align: left;
  /* margin-left: 10%; */
  margin-top: 24px;
  margin-bottom: 43px;

  display: grid;
  align-items: center;
  justify-content: center;

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

export const RedeemOut = styled.div`
  width: 156.7px;
  height: 50px;
  border-radius: 50%;
  border: 0.8px solid #354b37;
  transform: rotate(-3.12deg);
  margin: 30px auto 10px auto;

  &:hover {
    transform: rotate(+3.12deg);
  }

  @media (max-width: 800px) {
    width: 156.7px;
    height: 50px;
    margin: 10px auto;
  }
`;

export const Redeem = styled.button`
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
  const { library } = useWeb3React();

  useEffect(() => {
    console.log("setting provider: ", library?._provider);
    web3.setProvider(library?._provider);
  }, [account]);

  const [user, setUser] = useState({
    fullName: "",
    displayName: "",
    email: "",
  });

  const [loading, setLoading] = useState({
    isUpdating: false,
    isBurning: false,
    gotError: false,
    Error: "",
  });

  const [tokenOwned, setTokenOwned] = useState(false);

  const [ticketId, setTicketId] = useState();

  const { id } = useParams();
  const tid = id;

  const navigate = useNavigate();

  const onBurn = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, isUpdating: true });
    await saveData();
    try {
      console.log("Burning the ticket");
      const burnWalletAddress = "0x000000000000000000000000000000000000dEaD";
      // "0x0000000000000000000000000000000000000000";

      console.log("token id in dec: ", id);

      setLoading({ ...loading, isBurning: true });

      // Loading page
      const result = await TicketToken.methods
        .safeTransferFrom(account, burnWalletAddress, id, 1, "0x0")
        // .burn(account, tokenId, 1)
        .send({ from: account, gasLimit: "3000000" });

      console.log(result);

      navigate(`/tickets/${id}/qrcode`);
    } catch (err) {
      setLoading({ ...loading, gotError: true, Error: JSON.stringify(err) });
      console.error(err);
    }
  };

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
      return ticketId;
    } catch (err) {
      console.error(err);
    }
  };

  const saveData = async () => {
    const ticketId = await calTicketId();
    const url = "https://eth-barcelona.kraznikunderverse.com/users";
    const post_data = {
      name: user.fullName,
      optionalName: user.displayName,
      email: user.email,
      walletAddress: account,
      tokenId: id,
      ticketId,
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
    calTicketId();
  }, [account]);

  return (
    <>
      {tokenOwned ? (
        <Box>
          <Container>
            <Title>Redeem NFT</Title>
            <Description>
              Redeem your NFTicket to get a QR code to enter the event
            </Description>

            <TicketBox>
              <Tickets></Tickets>
              <TicketId>
                {/* #{parseInt(BigInt(tid).toString(16).slice(-5), 16)} */}#
                {ticketId}
              </TicketId>
            </TicketBox>

            <Forum onSubmit={onBurn}>
              <div>
                <label className="text">Full Name</label>
                <br />
                <input
                  required
                  type="text"
                  placeholder="Add your name as in your passport"
                  className="input"
                  value={user.fullName}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
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
                  required
                  type="email"
                  placeholder="Add your email for sending you notifications"
                  className="input"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                ></input>
                <br />
              </div>

              <RedeemOut>
                <Redeem type="submit">
                  {loading.isUpdating || loading.isBurning ? (
                    <span>Redeeming...</span>
                  ) : (
                    <span>Redeem Now</span>
                  )}
                </Redeem>
              </RedeemOut>
              <div style={{ textAlign: "center" }}>
                {loading.isUpdating ? (
                  <span>Updating...</span>
                ) : loading.isBurning ? (
                  <span>Burning...</span>
                ) : loading.gotError ? (
                  <>
                    <span style={{ color: "red" }}>Error while burning...</span>
                    <br />
                    <div style={{ width: "80vw", margin: "auto" }}>
                      {loading.Error}
                    </div>
                  </>
                ) : null}
              </div>
            </Forum>

            {/* <Link onClick={() => onBurn(tid)} to={`/tickets/${tid}/qrcode`}>
          RedeemNFT
        </Link> */}
          </Container>
        </Box>
      ) : (
        <ErrorPage text={""} />
      )}
    </>
  );
};

export default RedeemNFT;
