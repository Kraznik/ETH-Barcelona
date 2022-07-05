import React, { useState, useEffect } from "react";
import { Banner, Title2, Container, Submit, Title3 } from ".";
import { Footer, Description2, Question } from "../Scavenger-Play";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import { Title1 } from "../Scavenger-Play";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import Upload from "../../../assets/Upload.svg";
import { type } from "os-browserify";
import DGBanner from "../../../assets/DG-Moments-Banner.png";
import { useUploadArtwork } from "./functions";
const { uploadFile } = useUploadArtwork();
import { config } from "../../../config/config";
import axios from "axios";

const ImgContainer = styled.div`
  display: grid;
  justify-items: center;
  img {
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
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

export const LeaderboardContainer = styled.div`
  margin: 25px 0 0 0;
  padding: 0 20px;
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

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const Mint = () => {
  const [AccessToken, setAccessToken] = useState();
  const [file, setFile] = useState();
  const [momentsData, setMomentsData] = useState({
    title: "",
    description: "",
    ticketIds: [],
  });
  const [ticketIds, setTicketIds] = useState();
  const [nftTypeId, setNftTypeId] = useState();
  const [validTicketIds, setValidTicketIds] = useState([]);
  const [invalidTicketIds, setInvalidTicketIds] = useState([]);

  const [popup, setPopup] = useState(false);
  const [minting, setMinting] = useState(false);

  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  const [leaderboard, setLeaderboard] = useState([]);

  const getAccessToken = async () => {
    const configOptions = {
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
      const url = `${config.dgApiBaseUrl}/authentication/authentication`;
      const res = await axios.post(url, data, configOptions);
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

    e.preventDefault();
  };

  const addMomentsData = async (ticketIds) => {
    try {
      const url = `${config.apiBaseUrl}/dgMoments`;
      const patch_data = {
        data: ticketIds,
      };
      await axios.patch(url, patch_data, options);
    } catch (err) {
      console.error(err);
    }
  };

  const mintAMoment = async () => {
    setError(false);
    console.log("minting..");
    setMinting(true);
    try {
      if (file && AccessToken) {
        var nftTypeId = await uploadFile(file, AccessToken, momentsData);
        await addMomentsData(momentsData.ticketIds);
        setMinting(false);
      }
      setSuccess(true);
      setNftTypeId(nftTypeId);
    } catch (err) {
      setMinting(false);
      setError(true);
      console.error(err);
    }
  };

  const getListOfTicketIds = async (ticketIds) => {
    try {
      console.log(ticketIds);
      let ticketIdList = ticketIds.split(",").map((id) => {
        if (id === "" || id === " ") return null;
        return parseInt(id);
      }); // split(/,|, /);

      ticketIdList = ticketIdList.filter((id) => id !== null);
      console.log("ticket ids: ", ticketIdList);

      let validOnes = [],
        invalidOnes = [];

      for (let i = 0; i < ticketIdList.length; i++) {
        const url = `${config.apiBaseUrl}/verifyTicket/${ticketIdList[i]}`;
        const { data } = await axios.get(url, options);
        console.log("ticket validation: ", data);
        if (data.message === "Valid") {
          const card = renderValidTicketIds(ticketIdList[i], i);
          validOnes.push(card);
        } else {
          const card = renderInvalidTicketIds(ticketIdList[i], i);
          invalidOnes.push(card);
        }
      }

      setValidTicketIds(validOnes);
      setInvalidTicketIds(invalidOnes);

      // console.log("valid: ", validOnes);
      // console.log("invalid: ", invalidOnes);

      setMomentsData({ ...momentsData, ticketIds: ticketIdList });
    } catch (err) {
      console.error(err);
    }
  };

  const renderValidTicketIds = (ticketId, i) => {
    return (
      <div className="correct" key={i}>
        {ticketId}
      </div>
    );
  };

  const renderInvalidTicketIds = (ticketId, i) => {
    return (
      <div className="incorrect" key={i}>
        {ticketId}
      </div>
    );
  };

  const getLeaderboardDetails = async () => {
    try {
      const url = `${config.apiBaseUrl}/dgMomentsLeaderboard`;
      const { data } = await axios.get(url, options);
      // console.log(data);
      let listOfCards = [];
      // var putAtLast = true;
      // var ownIndex = data.rank[ticketId];
      // if (data.rank[ticketId] < 9) {
      //   putAtLast = false;
      // }
      data.map((row, index) => {
        const currentDate = new Date();
        const lastActivity = new Date(row.updatedAt);
        const getSeconds = Math.floor((currentDate - lastActivity) / 1000);
        const getMinutes = Math.floor(getSeconds / 60);
        const getHours = Math.floor(getMinutes / 60);
        const getDays = Math.floor(getHours / 24);

        if (getDays > 0) {
          var lastActivityTime = getDays + " days ago";
        } else if (getHours > 0) {
          var lastActivityTime = getHours + " hours ago";
        } else if (getMinutes > 0) {
          var lastActivityTime = getMinutes + " minutes ago";
        } else {
          var lastActivityTime = getSeconds + " seconds ago";
        }

        // console.log("currentDate: ", currentDate);
        // console.log("lastActivity: ", lastActivity);
        // console.log("timeAgo: ", getMinutes);

        if (index < 9 && row.count > 0) {
          const card = renderLeaderboardRow(
            index,
            // index === ownIndex,
            row.ticketId,
            row.count,
            lastActivityTime
          );
          listOfCards.push(card);
        } else {
          return;
        }
      });
      // if (putAtLast) {
      //   const OwnCard = renderLeaderboardRow(
      //     ownIndex,
      //     true,
      //     ticketId,
      //     data?.data[ownIndex]?.data || 0,
      //     "Not started yet"
      //   );
      //   listOfCards.push(OwnCard);
      // }
      setLeaderboard(listOfCards);
    } catch (err) {
      console.error(err);
    }
  };

  const renderLeaderboardRow = (
    index,
    // you,
    ticketId,
    count,
    lastActivity
  ) => {
    return (
      <LeaderboardBox
        // style={{ backgroundColor: you ? "yellow" : "white" }}
        key={index}
      >
        <Info style={{ width: "10vw" }}>{index + 1} </Info>
        <Info style={{ width: "10vw" }}>{ticketId}</Info>
        <Info style={{ width: "10vw" }}>{count}</Info>
        <Activity style={{ width: "20vw" }}>{lastActivity}</Activity>
      </LeaderboardBox>
    );
  };

  useEffect(() => {
    getLeaderboardDetails();
  }, []);

  return (
    <>
      <ImgContainer>
        <img src={DGBanner} width="100%" height="111px"></img>
      </ImgContainer>

      <Title1>DoGud</Title1>
      <Title2>Momentos</Title2>
      <Container>
        <Description2>
          Submit your moments of kidness and share with the community how to
          build a better world based on LOVE.
        </Description2>
      </Container>

      <Title3>dogud challenge submission</Title3>
      <select
        className="drop"
        value={momentsData.title}
        onChange={(e) => {
          console.log("Title: ", e.target.value);
          setMomentsData({ ...momentsData, title: e.target.value });
        }}
      >
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="Pick up trash today" className="dropdown">
          Pick up trash today
        </option>
        <option value="Smile at everyone you see today" className="dropdown">
          Smile at everyone you see today
        </option>
        <option value="Pay for a strangers meal" className="dropdown">
          Pay for a strangers meal
        </option>
        <option value="Do something kind for a stranger" className="dropdown">
          Do something kind for a stranger
        </option>
        <option value="Compliment 5 people today" className="dropdown">
          Compliment 5 people today
        </option>
        <option
          value="Let someone go ahead of you in line"
          className="dropdown"
        >
          Let someone go ahead of you in line
        </option>
        <option value="Offer help to someone in need" className="dropdown">
          Offer help to someone in need
        </option>
        <option value="Get to know someone new" className="dropdown">
          Get to know someone new
        </option>
        <option value="Hold the door for 7 people today" className="dropdown">
          Hold the door for 7 people today
        </option>
        <option value=" Give 3 strangers a hug" className="dropdown">
          Give 3 strangers a hug
        </option>
        <option
          value="Follow an Impact Organization on Social Media"
          className="dropdown"
        >
          Follow an Impact Organization on Social Media
        </option>
        <option value=" Carry someones bag" className="dropdown">
          Carry someones bag
        </option>
        <option value="Donate to a local charity" className="dropdown">
          Donate to a local charity
        </option>
        <option
          value="Educate a local merchant on accepting crypto"
          className="dropdown"
        >
          Educate a local merchant on accepting crypto
        </option>
        <option value="Tell someone you love them" className="dropdown">
          Tell someone you love them
        </option>
      </select>

      <Title3>DESCRIPTION</Title3>
      <textarea
        type="text"
        placeholder="Add your full name"
        className="des"
        value={momentsData.description}
        onChange={(e) => {
          setMomentsData({ ...momentsData, description: e.target.value });
        }}
      ></textarea>

      <Title3>TICKET ID</Title3>
      {/* <input type="number" placeholder="NFTicket ID" className="drop"></input> */}

      <input
        multiple
        type="text"
        placeholder="NFTicket ID"
        className="drop"
        value={ticketIds}
        onChange={(e) => {
          getListOfTicketIds(e.target.value);
          setTicketIds(e.target.value);
        }}
      ></input>
      <p className="taggingInfo">Ex. 456 , 78 , 1 , 1265 (seprated by comma)</p>

      {/* <img src={Upload} className="dgupload"></img> */}
      <div style={{ height: "30px" }}></div>

      <input
        type="file"
        className="file-upload"
        name="data"
        onChange={retrieveFile}
      ></input>

      {/* <input type="file" className=""></input> */}

      <Submit
        onClick={() => {
          setPopup(true);
          setError(false);
          setSuccess(false);
        }}
        style={{
          // disable: minting ? true : false
          pointerEvents: popup ? "none" : null,
        }}
      >
        Mint Challenge
      </Submit>

      <LeaderboardContainer>
        <Titles style={{ width: "10vw" }}>RANK</Titles>
        <Titles style={{ width: "10vw" }}>TicketID</Titles>
        <Titles style={{ width: "15vw" }}>Moments</Titles>
        <Titles style={{ width: "20vw" }}>LAST Activity</Titles>

        {leaderboard}
      </LeaderboardContainer>

      {popup ? (
        <div>
          <div className="box-third">
            <div style={{ color: "white" }} onClick={() => setPopup(false)}>
              Close
            </div>

            <div className="title">
              Please Confirm the NFTicket ID Before Minting
            </div>

            {validTicketIds}

            {invalidTicketIds.length > 0 ? (
              <>
                <div className="invalid">
                  Invalid NFTicket ID (Please input again)
                </div>
                <div className="yy">{invalidTicketIds}</div>
              </>
            ) : null}

            <button
              className="mintmoment"
              disabled={
                invalidTicketIds.length > 0 || minting || success ? true : false
              }
              onClick={mintAMoment}
            >
              {minting ? <span>Minting...</span> : <span>Mint My Moment</span>}
            </button>

            {minting ? (
              <Description style={{ color: "white" }}>
                Please have patience...it's minting...
              </Description>
            ) : null}

            {success ? (
              <>
                <Description style={{ color: "white" }}>
                  Successfully minted!!
                </Description>
                {nftTypeId ? (
                  <Description>
                    <a
                      href={`${config.dgAppBaseUrl}/creation/${nftTypeId}`}
                      target={"_blank"}
                      style={{ color: "white" }}
                    >
                      View your moment here ->
                    </a>
                  </Description>
                ) : null}
              </>
            ) : null}

            {Error ? (
              <Description style={{ color: "white" }}>
                Got some Error!!
              </Description>
            ) : null}
          </div>
        </div>
      ) : null}

      <Footer>
        <div className="ft">
          <a href="/dgmoments">
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
    </>
  );
};

export default Mint;
