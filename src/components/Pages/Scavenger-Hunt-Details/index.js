import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title1, Title2, Footer, Question, Banner } from "../Speaker-Cards";
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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return (
    <>
      <Banner></Banner>
      <Title1>DoGood</Title1>
      <Title2>SCAVENGER HUNT</Title2>

      {/* <Heart>TicketId: #{ticketId}</Heart> */}

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
              <PopupContainer>
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
          {huntData.part2 === "true" ? (
            <img src={H2} />
          ) : (
            <Popup trigger={<GrayImage src={H2} />}>
              <PopupContainer>
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
          {huntData.part3 === "true" ? (
            <img src={H3} />
          ) : (
            <Popup trigger={<GrayImage src={H3} />}>
              <PopupContainer>
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
        </LineContainer>
        <LineContainer>
          {huntData.part4 === "true" ? (
            <img src={H4} />
          ) : (
            <Popup trigger={<GrayImage src={H4} />}>
              <PopupContainer>
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
              <PopupContainer>
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
          {huntData.part6 === "true" ? (
            <img src={H6} />
          ) : (
            <Popup trigger={<GrayImage src={H6} />}>
              <PopupContainer>
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
        </LineContainer>
        <LineContainer>
          {huntData.part7 === "true" ? (
            <img src={H7} />
          ) : (
            <Popup trigger={<GrayImage src={H7} />}>
              <PopupContainer>
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
          {huntData.part8 === "true" ? (
            <img src={H8} />
          ) : (
            <Popup trigger={<GrayImage src={H8} />}>
              <PopupContainer>
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
        </LineContainer>

        {/* <img src={H1}></img>
        <img src={H2}></img>
        <img src={H3}></img>
        <img src={H4}></img>
        <img src={H5}></img>
        <img src={H6}></img>
        <img src={H7}></img>
        <img src={H8}></img> */}
        {/* <LineContainer>
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
        </LineContainer> */}
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
