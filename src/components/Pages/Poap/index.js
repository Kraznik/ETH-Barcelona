import React, { useState, useEffect } from "react";
import PoapImage from "../../../assets/Poap.png";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 530px;
  margin-top: 5%;
  height: 618.2px;
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
  color: #354b37;
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 2% 15% 1% 15%;
  line-height: 20px;
  /* or 125% */
  text-align: center;
  /* Green Leaf */
  color: #354b37;
  margin: 24px 0px;
`;

const Image = styled.div`
  background-image: url(${PoapImage});
  border-radius: 4px;
  width: 252px;
  height: 252px;
`;

const Check = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  color: #354b37;
  margin: 10% 0;

  a {
    text-decoration: none;
    color: #354b37;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Poap = ({ account }) => {
  const [isPoapminted, setIsPoapMinted] = useState(false);
  const { id } = useParams();

  const getIfTokenScanned = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/event/${id}`;
      const res = await axios.get(url, {
        headers: {
          validate: process.env.REACT_APP_VALIDATE_TOKEN,
        },
      });
      console.log(res.data?.data);
      if (res?.data?.data?.isPoapMinted) {
        setIsPoapMinted(res?.data?.data?.isPoapMinted);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getIfTokenScanned();
  }, [account]);

  return (
    <>
      <Container id="Poap">
        <Heading>Thanks for coming!</Heading>
        <Description>
          We{" "}
          {isPoapminted ? <span>have sent </span> : <span>are sending </span>}
          you an NFT to your wallet. You can check it in your DoinGud profile.
        </Description>
        <Image></Image>

        <Check>
          <a
            href={`https://main.doingud.work/creation/0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000008?edition=`}
            target={"_blank"}
          >
            Check it in DoinGud
          </a>
        </Check>
      </Container>
    </>
  );
};

export default Poap;
