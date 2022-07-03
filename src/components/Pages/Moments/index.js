import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RedeemOut, Redeem, Title, Description } from "../Redeem";
import "./style.css";
import Header from "../../../assets/circle.png";
import DoinGud from "../../../assets/ETH-BCN.svg";
import Twitter from "../../../assets/ETH-Twitter.svg";
import Instagram from "../../../assets/ETH-Insta.svg";
import Logo from "../../../assets/ETH-BCN-Moments.svg";
import Upload from "../../../assets/Upload.svg";

import { useWeb3React } from "@web3-react/core";

import { useUploadArtwork, Claim } from "./functions";
const { uploadFile } = useUploadArtwork();

export const Activity = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;

  color: #2b2b2b;
  display: inline-block;
  line-height: 17px;
  /* identical to box height, or 140% */
  /* Grey 1 */
`;

export const LeaderboardBox = styled.div`
  background: #ffffff;
  border: 1px solid #c8ccd0;
  border-radius: 4px;
  height: 40px;
  margin: 10px 0 0 0;
`;
export const Info = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;

  color: #2b2b2b;
  margin: 10px 8% 0 2%;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  justify-content: space-between;
  display: inline-block;
  /* Black */
  color: black;
`;

export const LeaderboardContainer = styled.div`
margin: 25px 0 0 0;
padding: 0 20px;
`;

const Container = styled.div`
  background: #354b37;
`;
const ImgContainer = styled.div`
  justify-items: center;
  img {
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
  }
`;

export const Footer = styled.div`
  height: 119.3px;

  width: 100%;
  padding: 30px 24px 30px 22px;
  margin: 10px 0 0 0;
  background: #354b37;
`;

const Forum = styled.div`
  @media (max-width: 800px) {
  }
`;

const Flex = styled.div`
  @media (max-width: 800px) {
    padding: 0;
    margin: 10% 0 5% 25%;
  }
`;

const Hero = styled.div``;

const Title2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 56px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffd731;
`;

const Title3 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 47px;
  line-height: 56px;
  /* identical to box height, or 119% */

  text-align: center;

  color: #ffd731;
`;

const Description2 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  /* or 115% */
  padding: 0 47px;
  margin: 31px 0 43px 0;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffd731;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 765px;
  background: #ffd731;
`;

export const Titles = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;

  color: #989898;

  display: inline-block;
  text-transform: uppercase;
  color: #989898;
  margin: 0 9% 0 0;
`;

const Moments = () => {
  const { library, account } = useWeb3React();
  const [AccessToken, setAccessToken] = useState();
  const [file, setFile] = useState();
  const [momentsData, setMomentsData] = useState({
    title: "",
    description: "",
    ticketIds: [],
  });
  const [minting, setMinting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  const getAccessToken = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      userId:
        "did:3:kjzl6cwe1jw147s91dkr97820ds79es6vrbewrf1fx2a2hipoipceigloxw69u6",
      proof: {
        payload:
          "eyJkaWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0N3M5MWRrcjk3ODIwZHM3OWVzNnZyYmV3cmYxZngyYTJoaXBvaXBjZWlnbG94dzY5dTYifQ",
        signatures: [
          {
            protected:
              "eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0N3M5MWRrcjk3ODIwZHM3OWVzNnZyYmV3cmYxZngyYTJoaXBvaXBjZWlnbG94dzY5dTY_dmVyc2lvbi1pZD0wI3NVTnJXMkFwTm1rNGRiOSIsImFsZyI6IkVTMjU2SyJ9",
            signature:
              "N6x7XrqyUeBEWjWuFCJpdAKsbJv7KTWpKbfMKCYrq4i8yn6kbNTby0GsZMaoziJQTl1zyd8xqVYLnYwAQpUazQ",
          },
        ],
      },
    };
    try {
      const url = `https://api-main.doingud.work/authentication/authentication`;
      const res = await axios.post(url, data, config);
      console.log(res.data);
      setAccessToken(res.data.accessToken);
    } catch (err) {}
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  // pass this file to our backend api
  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // setTokenData({ ...tokenData, imageIpfsHash: "" });
    console.log("file data: ", data);
    setFile(data);
    // setFileName(data.name);

    // const reader = new window.FileReader();
    // reader.readAsArrayBuffer(data);
    // reader.onloadend = () => {
    //   setFile(Buffer(reader.result));
    //   console.log("file: ", Buffer(reader.result));
    // };

    // console.log("file: ", Buffer(reader.result));

    e.preventDefault();
  };

  const mintAMoment = async () => {
    setMinting(true);
    try {
      if (file && AccessToken) {
        await uploadFile(
          file,
          AccessToken,
          library,
          momentsData.title,
          momentsData.description
        );
        setMinting(false);
      }
      setSuccess(true);
    } catch (err) {
      setMinting(false);
      setError(true);
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={Header} width="100%"></img>
        </ImgContainer>

        <Hero>
          <img
            src={Logo}
            width="21.35px"
            height="29.06px"
            className="eth-bcn-moments"
          ></img>
          <Title2>Moments</Title2>
          <Title3>ETHBarcelona</Title3>
          <Description2>
            Let your experience live on the blockchain by sharing your best
            moments at ETHBarcelona.
          </Description2>
        </Hero>
        <InputContainer>
          <Forum>
            <label className="text-moments">Title</label>
            <br />
            <input
              type=""
              placeholder="Add a title to your moment"
              className="input"
              value={momentsData.title}
              onChange={(e) => {
                setMomentsData({ ...momentsData, title: e.target.value });
              }}
            ></input>
            <br />

            <label className="text-moments">Description</label>
            <br />
            <textarea
              type=""
              placeholder="Add a description to your moment"
              className="input-description"
              value={momentsData.description}
              onChange={(e) => {
                setMomentsData({ ...momentsData, description: e.target.value });
              }}
            ></textarea>
            <br />

            <label className="text-moments">NFTicket ID's</label>
            <br />
            <input
              multiple
              type="number"
              placeholder="Tag Yourself and your friends"
              className="input"
            ></input>
            <p className="taggingInfo">Ex. 456 , 78 , 1 , 1265</p>
     

            <Flex>
              {/* <img src={Upload} name="data" onClick={retrieveFile}></img> */}

              <input
                type="file"
                className="file-upload"
                name="data"
                onChange={retrieveFile}

              ></input>
            </Flex>

            <RedeemOut>
              <Redeem onClick={mintAMoment}>
                {minting ? <span>Minting...</span> : <span>Mint a Moment</span>}
              </Redeem>
            </RedeemOut>

            {success ? <Description>Successfully minted!!</Description> : null}
            {Error ? <Description>Got some Error!!</Description> : null}
          </Forum>
        </InputContainer>

        <Title3 className="top-10">Top 10</Title3>
        <LeaderboardContainer>
          <Titles>RANK </Titles>
          <Titles>Speaker </Titles>
          <Titles>NFTS </Titles>
          <Titles>LAST Activity</Titles>
          <LeaderboardBox>
            <Info>1 </Info>
            <Info>Scott More</Info>
            <Info>55</Info>
            <Activity>one minute ago</Activity>
          </LeaderboardBox>
          <LeaderboardBox>
            <Info>44 </Info>
            <Info>Scott More</Info>
            <Info>3</Info>
            <Activity>one minute ago</Activity>
          </LeaderboardBox>
          <LeaderboardBox>
            <Info>33 </Info>
            <Info>Scott More</Info>
            <Info>55</Info>
            <Activity>three minute ago</Activity>
          </LeaderboardBox>
        </LeaderboardContainer>

        <Footer>
          <div className="ft">
            <a href="/speakerHomePage">
              <img src={DoinGud} className="dg"></img>
            </a>
            <a href="https://www.instagram.com/ethbarcelona/">
              <img src={Instagram} className="social"></img>
            </a>
            <a href="https://twitter.com/eth_barcelona">
              <img src={Twitter} className="social"></img>
            </a>
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default Moments;
