import React from "react";
import styled from "styled-components";
import { Title1, Title2, Footer, Question } from "../Speaker-Cards";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import H1 from "../../../assets/Hunt1.svg";
import H2 from "../../../assets/Hunt2.svg";
import H3 from "../../../assets/Hunt3.svg";
import H4 from "../../../assets/Hunt4.svg";
import H5 from "../../../assets/Hunt5.png";
import H6 from "../../../assets/Hunt6.svg";
import H7 from "../../../assets/Hunt7.svg";
import H8 from "../../../assets/Hunt8.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./style.css";

const Heart = styled.div`
  margin: 40px 0 20px 0;
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
  text--decoration: none;
  border: none;
  width: 103px;
  height: 50px;
  margin: 33px 123px;
`;

const LineContainer = styled.div``;

const ScavengerHuntDetails = () => {
  return (
    <>
      <Title1>DoGood</Title1>
      <Title2>SCAVENGER HUNT</Title2>

      <Heart>
        <LineContainer>
          <Popup trigger={<img src={H1}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #1</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 1111
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>

          <Popup trigger={<img src={H2}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #2</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 1111
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>

          <Popup trigger={<img src={H3}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #3</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 1111
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>
        </LineContainer>

        <LineContainer>
          <Popup trigger={<img src={H4}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #4</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 1111
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>

          <Popup trigger={<img src={H5}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #5</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 1111
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>

          <Popup trigger={<img src={H6}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #6</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 333
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>
        </LineContainer>

        <LineContainer>
          <Popup trigger={<img src={H7}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #7</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 333
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>

          <Popup trigger={<img src={H8}></img>} className="popup">
            <PopupContainer>
              <Title>Clue #8</Title>
              <Clue>
                “You need food to keep your body running. Go to the place where
                you go to get it!" <br />
                <br />
                NFTs Editions: 333
              </Clue>
              <Close>Close</Close>
            </PopupContainer>
          </Popup>
        </LineContainer>
      </Heart>

      <Accordion>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header className="">
            <Question>Rewards </Question>
          </Accordion.Header>
          <Accordion.Body className="reward">
            In addition to the talks, discussions, and networking opportunities,
            we'll be having art installations, musical performances, and special
            events to maximize the fun during your time at ETHBarcelona.
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

      <Footer></Footer>
    </>
  );
};

export default ScavengerHuntDetails;
