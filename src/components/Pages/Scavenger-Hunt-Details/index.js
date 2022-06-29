import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title1, Title2, Footer, Question, Banner } from "../Scavenger-Play";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import H1 from "../../../assets/Hunt1.png";
import H2 from "../../../assets/Hunt2.png";
import H3 from "../../../assets/Hunt3.png";
import H4 from "../../../assets/Hunt4.png";
import H5 from "../../../assets/Hunt5.png";
import H6 from "../../../assets/Hunt6.png";
import H7 from "../../../assets/Hunt7.png";
import H8 from "../../../assets/Hunt8.png";
import H9 from "../../../assets/H9.png";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import R1 from "../../../assets/R1.svg";
import R2 from "../../../assets/R2.svg";
import R3 from "../../../assets/R3.svg";
import ClipLoader from "react-spinners/ClipLoader";
import SyncLoader from "react-spinners/SyncLoader";

const Heart = styled.div`
  /* display: grid; */
  /* margin: 80px 0 20px 0; */
  padding: 40px 0 20px 0;
`;

const PopupContainer = styled.div`
  background: #2b2b2b;
  height: 380px;
  width: 350px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 60px;
  /* or 120% */
  padding: 33px 32px;

  text-align: center;
  letter-spacing: -0.05em;

  color: #ffffff;
`;

const Clue = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  padding: 5px 32px;

  text-align: center;

  color: #ffffff;
`;

const Close = styled.button`
  background: #ffffff;
  border-radius: 100px;
  text-decoration: none;
  border: none;
  width: 103px;
  height: 50px;
  margin: 33px 123px;
`;

const LineContainer = styled.div``;

const GrayImage = styled.img`
  filter: grayscale(100%);
`;

export const RewardContainer = styled.div`
  disaply: inline-block;
  margin: 20px 0 0 0;
`;

export const RewardImage = styled.div`
  disaply: inline-block;
  position: absolute;
`;

export const RewardDescription = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  position: relative;
  font-size: 18px;
  margin: 0 0 0 60px;
  line-height: 26px;
`;

export const LeaderboardContainer = styled.div``;

export const Titles = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  justify-content: space-between;
  line-height: 18px;
  display: inline-block;
  text-transform: uppercase;
  color: #667079;
  margin: 0 10% 0 0;
`;

export const LeaderboardBox = styled.div`
  background: #ffffff;
  border: 1px solid #c8ccd0;
  border-radius: 4px;
  height: 40px;
  margin: 10px 0 0 0;
`;

export const Info = styled.div`
  font-family: "GTD";
  font-style: normal;
  margin: 10px 13% 0 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  justify-content: space-between;
  display: inline-block;
  /* Black */

  color: #2b2b2b;
`;

export const Activity = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  display: inline-block;
  line-height: 17px;
  /* identical to box height, or 140% */

  /* Grey 1 */

  color: #c8ccd0;
`;

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const ScavengerHuntDetails = () => {
  const { ticketId } = useParams();
  const [huntData, setHuntData] = useState({
    part1: false,
    part2: false,
    part3: false,
    part4: false,
    part5: false,
    part6: false,
    part7: false,
    part8: false,
    data: 0,
  });

  const fetchDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/hunts/${ticketId}`;
      const { data } = await axios.get(url, options);
      if (data?.message === "TicketId Not found") return;
      console.log(data?.data);
      const { part1, part2, part3, part4, part5, part6, part7, part8 } =
        data?.data;
      setHuntData({
        part1,
        part2,
        part3,
        part4,
        part5,
        part6,
        part7,
        part8,
        data: data?.data?.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const [loading, setLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getLeaderboardDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/leaderboard`;
      const { data } = await axios.get(url, options);
      console.log(data);
      let listOfCards = [];
      var putAtLast = true;
      var ownIndex = data.rank[ticketId];
      if (data.rank[ticketId] < 9) {
        putAtLast = false;
      }
      data.data.map((row, index) => {
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

        if (index < 9) {
          const card = renderLeaderboardRow(
            index,
            index === ownIndex,
            row.ticketId,
            row.data,
            lastActivityTime
          );
          listOfCards.push(card);
        } else {
          return;
        }
      });
      if (putAtLast) {
        const OwnCard = renderLeaderboardRow(
          ownIndex,
          true,
          ticketId,
          data?.data[ownIndex]?.data || 0,
          "Not started yet"
        );
        listOfCards.push(OwnCard);
      }
      setLeaderboard(listOfCards);
    } catch (err) {
      console.error(err);
    }
  };

  const renderLeaderboardRow = (
    index,
    you,
    ticketId,
    dataPoints,
    lastActivity
  ) => {
    return (
      <LeaderboardBox
        style={{ backgroundColor: you ? "yellow" : "white" }}
        key={index}
      >
        <Info>{index + 1} </Info>
        <Info>{ticketId}</Info>
        {/* {dataPoints === 8 ? <Info>9/9</Info> : <Info>{dataPoints}/9</Info>} */}
        <Info>{dataPoints}/9</Info>
        <Activity>{lastActivity}</Activity>
      </LeaderboardBox>
    );
  };

  useEffect(() => {
    getLeaderboardDetails();
  }, []);

  return (
    <>
      <Banner></Banner>
      <Title1>DoGood</Title1>
      <Title2>SCAVENGER HUNT</Title2>

      {loading ? (
        <SyncLoader className="loader" size={10} />
      ) : (
        <Heart>
          <LineContainer>
            {huntData.part1 === "true" ? (
              <img src={H1} />
            ) : (
              <Popup trigger={<GrayImage src={H1} />}>
                <PopupContainer className="popup">
                  <Title>Clue #1</Title>
                  <Clue>
                    “It’s a beautiful, mysterious element that connects all
                    countries and all people across the globe. If you go to the
                    highest point of the venue you will find it! " <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  {/* <a
                    style={{
                      cursor: "pointer",
                      float: "right",
                    }}
                    onClick={close}
                  >
                    &times;
                    <Close>Close</Close>
                  </a> */}
                </PopupContainer>
              </Popup>
            )}
            {huntData.part2 === "true" ? (
              <img src={H2} />
            ) : (
              <Popup trigger={<GrayImage src={H2} />}>
                <PopupContainer className="popup">
                  <Title>Clue #2</Title>
                  <Clue>
                    “We depend on it for our survival, from the air we breathe
                    to the wood we use. Find a place to check what this
                    wonderful brings us! " <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
            {huntData.part3 === "true" ? (
              <img src={H3} />
            ) : (
              <Popup trigger={<GrayImage src={H3} />}>
                <PopupContainer className="popup">
                  <Title>Clue #3</Title>
                  <Clue>
                    “The largest canvas, painted with bright colors. During the
                    day we catch a glimpse of abstract shapes on it; at night,
                    we see flashes of lights. Find the place where art and
                    canvas meet! " <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
          </LineContainer>
          <LineContainer>
            {huntData.part4 === "true" ? (
              <img src={H4} />
            ) : (
              <Popup trigger={<GrayImage src={H4} />}>
                <PopupContainer className="popup">
                  <Title>Clue #4</Title>
                  <Clue>
                    “The only way you can truly experience happiness, peace and
                    joy is to live it. Find the place where the present becomes
                    a memory! " <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
            {huntData.part5 === "true" ? (
              <img src={H5} />
            ) : (
              <Popup trigger={<GrayImage src={H5} />}>
                <PopupContainer className="popup">
                  <Title>Clue #5</Title>
                  <Clue>
                    “Promotes creativity, encourages the search for new
                    information and perspectives, and leads to breakthrough
                    innovations. Find the place where diversity meets!!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
            {huntData.part6 === "true" ? (
              <img src={H6} />
            ) : (
              <Popup trigger={<GrayImage src={H6} />}>
                <PopupContainer className="popup">
                  <Title>Clue #6</Title>
                  <Clue>
                    “It makes everyone different in the world because they
                    create the stage on which all of us perform. Find the place
                    where big things happen! " <br />
                    <br />
                    NFTs Editions: 333
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
          </LineContainer>
          <LineContainer>
            {huntData.part7 === "true" ? (
              <img src={H7} />
            ) : (
              <Popup trigger={<GrayImage src={H7} />}>
                <PopupContainer className="popup">
                  <Title>Clue #7</Title>
                  <Clue>
                    “It enables us to come up with new ideas and solve problems
                    in innovative ways. You will find it where technology and
                    design meet! " <br />
                    <br />
                    NFTs Editions: 333
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
            {huntData.part8 === "true" ? (
              <img src={H8} />
            ) : (
              <Popup trigger={<GrayImage src={H8} />}>
                <PopupContainer className="popup">
                  <Title>Clue #8</Title>
                  <Clue>
                    “It’s what others see when they look at you. Sometimes it is
                    still; other times, it may be in motion. Find the place
                    where you can feel it!" <br />
                    <br />
                    NFTs Editions: 333
                  </Clue>
                  {/* <Close>Close</Close> */}
                </PopupContainer>
              </Popup>
            )}
          </LineContainer>
        </Heart>
      )}

      {huntData.data === 9 ? (
        <div className="winner">
          <img src={H9}></img>
        </div>
      ) : null}

      <Accordion>
        <Accordion.Item eventKey="" className="">
          <Accordion.Header className="">
            <Question>Leaderboard </Question>
          </Accordion.Header>
          <Accordion.Body className="leaderboard">
            <LeaderboardContainer>
              <Titles>RANK </Titles>
              <Titles>TicketID </Titles>
              <Titles>NFTS </Titles>
              <Titles>LAST Activity</Titles>
              {/* <LeaderboardBox>
                <Info>1 </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox> */}

              {leaderboard}
            </LeaderboardContainer>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header className="">
            <Question>Rewards </Question>
          </Accordion.Header>
          <Accordion.Body className="reward">
            <div className="r">
              Come and claim your rewards at the DoinGud’s Booth!
            </div>

            <RewardContainer>
              <RewardImage>
                <img src={R1}></img>
              </RewardImage>
              <RewardDescription>
                3 NFTs claimed + follow @DoinGudHQ on Social Media to win:
                Stickers Pack **Only 400**
              </RewardDescription>
            </RewardContainer>

            <RewardContainer>
              <RewardImage>
                <img src={R2}></img>
              </RewardImage>
              <RewardDescription>
                5 NFTs claimed + Join our DoinGud Discord to win: DoinGud
                T-shirt **Only 150**
              </RewardDescription>
            </RewardContainer>

            <RewardContainer>
              <RewardImage>
                <img src={R3}></img>
              </RewardImage>
              <RewardDescription>
                8 NFTs claimed + Answering a question in our booth to win: Swag
                kit and experiences! **Only 9**
              </RewardDescription>
            </RewardContainer>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header className="">
            <Question>How to play? </Question>
          </Accordion.Header>
          <Accordion.Body className="reward">
            1. Enter your Ticket ID. <br></br>2. Tap each heart piece to get a
            clue. <br></br>3. Find the QR Code around the venue.<br></br> 4.
            Scan the QR anc claim your NFT.<br></br> 5. Collect and get rewards.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Footer>
        <div className="ft">
          <img src={DoinGud} className="dg"></img>
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

export default ScavengerHuntDetails;
