import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title1, Title2, Footer, Question, Banner } from "../Scavenger-Play";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import H1 from "../../../assets/Hunt1.svg";
import H2 from "../../../assets/Hunt2.svg";
import H3 from "../../../assets/Hunt3.svg";
import H4 from "../../../assets/Hunt4.jpeg";
import H5 from "../../../assets/Hunt5.png";
import H6 from "../../../assets/Hunt6.svg";
import H7 from "../../../assets/Hunt7.svg";
import H8 from "../../../assets/Hunt8.svg";
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
  /* margin: 40px 0 20px 0; */
`;

const PopupContainer = styled.div`
  background: #2b2b2b;
  height: 400px;
  width: 350px;
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

const RewardContainer = styled.div`
  disaply: inline-block;
  margin: 20px 0 0 0;
`;

const RewardImage = styled.div`
  disaply: inline-block;
  position: absolute;
`;

const RewardDescription = styled.div`
  font-family: "GTD";
  font-style: normal;
  font-weight: 300;
  position: relative;
  font-size: 18px;
  margin: 0 0 0 60px;
  line-height: 26px;
`;

export const LeaderboardContainer = styled.div``

export const Titles = styled.div`
font-family: 'GTD';
font-style: normal;
font-weight: 300;
font-size: 10px;justify-content: space-between;
line-height: 18px;
display:inline-block;
text-transform: uppercase;
color: #667079;
margin: 0 10% 0 0 ;
`

export const LeaderboardBox = styled.div`
background: #FFFFFF;
border: 1px solid #C8CCD0;
border-radius: 4px;
height:40px;
margin: 10px 0 0 0 ;
`

export const Info = styled.div`
font-family: 'GTD';
font-style: normal;
margin: 10px 13% 0 0 ;
font-weight: 300;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */
justify-content: space-between;
display:inline-block;
/* Black */

color: #2B2B2B;
`

export const Activity = styled.div`
font-family: 'GTD';
font-style: normal;
font-weight: 300;
font-size: 12px;
display:inline-block;
line-height: 17px;
/* identical to box height, or 140% */


/* Grey 1 */

color: #C8CCD0;
`

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
  });

  const fetchDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/hunts/${ticketId}`;
      const { data } = await axios.get(url, options);
      if (data?.message === "TicketId Not found") return;
      console.log(data?.data);
      const { part1, part2, part3, part4, part5, part6, part7, part8 } =
        data?.data;
      setHuntData({ part1, part2, part3, part4, part5, part6, part7, part8 });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const  [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  setTimeout(() =>{
    setLoading(false)
  },2000)

},[])

  return (
    <>
      <Banner></Banner>
      <Title1>DoGood</Title1>
      <Title2>SCAVENGER HUNT</Title2>

      {/* <Heart>TicketId: #{ticketId}</Heart> */}


      {
          loading ?   <SyncLoader className="loader" size={10} />:
          <Heart>
          {/* {huntData.part1 === "true" ? <div>1 Yes</div> : <div>1 No</div>}
          {huntData.part2 === "true" ? <div>2 Yes</div> : <div>2 No</div>}
          {huntData.part3 === "true" ? <div>3 Yes</div> : <div>3 No</div>}
          {huntData.part4 === "true" ? <div>4 Yes</div> : <div>4 No</div>}
          {huntData.part5 === "true" ? <div>5 Yes</div> : <div>5 No</div>}
          {huntData.part6 === "true" ? <div>6 Yes</div> : <div>6 No</div>}
          {huntData.part7 === "true" ? <div>7 Yes</div> : <div>7 No</div>}
          {huntData.part8 === "true" ? <div>8 Yes</div> : <div>8 No</div>} */}
  
  
          <LineContainer>
            {huntData.part1 === "true" ? (
              <img src={H1} />
            ) : (
              <Popup trigger={<GrayImage src={H1} />}>
                <PopupContainer className="popup">
                  <Title>Clue #1</Title>
                  <Clue>
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <a
                    style={{
                      cursor: "pointer",
                      float: "right",
                    }}
                    onClick={close}
                  >
                    &times;
                    <Close>Close</Close>
                  </a>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
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
                    “You need food to keep your body running. Go to the place
                    where you go to get it!" <br />
                    <br />
                    NFTs Editions: 1111
                  </Clue>
                  <Close>Close</Close>
                </PopupContainer>
              </Popup>
            )}
          </LineContainer>
        </Heart>
      }

    

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
              <LeaderboardBox>
                <Info>1  </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>

              <LeaderboardBox>
                <Info>1  </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>

              <LeaderboardBox>
                <Info>1  </Info>
                <Info>165</Info>
                <Info>5/9</Info>
                <Activity>one minute ago</Activity>
              </LeaderboardBox>
            </LeaderboardContainer>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header className="">
            <Question>Rewards </Question>
          </Accordion.Header>
          <Accordion.Body className="reward">
            <div className="r">Come and claim your rewards at the DoinGud’s Booth!</div>

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
          <img src={Instagram} className="social"></img>
          <img src={Twitter} className="social"></img>
        </div>
        <p className="rights"> © DoinGud. All Right Reserved. </p>
      </Footer>
    </>
  );
};

export default ScavengerHuntDetails;
