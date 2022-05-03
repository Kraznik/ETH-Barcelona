import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";
import Ticket1 from "../../assets/Ticket1.png";
import Ticket2 from "../../assets/Ticket2.png";

import { useNavigate } from "react-router-dom";

// import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";

const Container = styled.div`
  background: #f4f4f5;
`;
const Right = styled.div`
  width: 646px;
  display: inline-block;
  float: right;
`;

const OuterContainer2 = styled.div`
  background-image: url(${Ticket1});
  height: 900px;
  padding: 15%;
`;
const TextContainer = styled.div`
  width: 518px;
  padding: 5%;
  background: #f4f4f5; ;
`;

const ImageContainer2 = styled.div`
  background-image: url(${Ticket2});
  height: 613px;
`;

const Heading = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #424242;
  padding: 2%;

  margin-top: 5%;
`;

const Left = styled.div`
  display: inline-block;
  height: 900px;
  /* overflow-y: auto; */
  position: relative;
`;

const Title2 = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  text-align: right;
  line-height: 78px;
  /* or 100% */
  letter-spacing: -0.02em;

  color: #424242;
`;

const Title3 = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  text-align: right;
  line-height: 78px;
  /* or 100% */

  letter-spacing: -0.02em;

  color: #424242;
`;

const Title = styled.div`
  font-family: "Dahlia-normal";
  font-style: normal;
  font-weight: 400;
  font-size: 78px;
  padding: 0%;
  width: 700px;
  text-align: center;
  line-height: 78px;
  color: #424242;
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */
  text-align: left;
  display: flex;
  align-items: left;

  color: #424242;

  color: #424242;

  margin: 0% 0 0 43%;
`;

const TextBox = styled.div`
  margin: 10% 10% 10% 0%;
`;

const Button = styled.div`
  border: 0.8px solid #354b37;
  box-sizing: border-box;
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 5% 5% 5% 45%;
  line-height: 20px;
  justify-content: center;
  border-radius: 50%;

  background: #f4f4f5;

  padding: 2%;
  align-items: flex-end;
  text-align: center;
  width: 100px;
  color: #354b37;
`;

const SectionContainer = styled.div`
  width: 700px;
  display: grid;
  align-content: center;

  @media (max-width: 800px) {
    /* display: none; */
  }
`;

const SectionContainer1 = styled(SectionContainer)``;
const SectionContainer2 = styled(SectionContainer)``;

const Hero = ({ isMobile }) => {
  const [imageUrlOut, setImageUrlOut] = useState("");
  const [imageUrlIn, setImageUrlIn] = useState("");
  const [section2, setSection2] = useState(false);

  const location = window.location.hash;
  let navigate = useNavigate();

  useEffect(() => {
    setImageUrlOut(Event1);
    setImageUrlIn(Event2);

    console.log(location);
    if (location.slice(-1) === "2") {
      setImageUrlOut(Ticket1);
      setImageUrlIn(Ticket2);
      setSection2(true);
    }
  }, [location]);

  const Navbar = styled.div`
    background: #424242;
    height: 68px;
    width: 250px;
    border-radius: 100px;
    top: 20px;
    left: 0px;
    margin: 20% 10% 10% -20%;
    z-index: 20;
    display: flex;
    position: relative;
    padding: 10px 10px;
    gap: 10px;

    a {
      text-decoration: none;
      padding: 0px 20px;
      border-radius: 100px;
      font-family: "Dahlia";
      font-size: 100%;
      text-align: center;
      justify-content: center;
      text-transform: capitalize;
      color: #424242;
    }

    @media (max-width: 800px) {
      display: none;
      position: none;
      background: red;
    }
  `;

  const OuterContainer = styled.div`
    background-image: url(${imageUrlOut});
    height: 900px;
    padding: 15%;
  `;

  const ImageContainer = styled.div`
    background-image: url(${imageUrlIn});
    height: 613px;
  `;
  return (
    <>
      <Container>
        {isMobile ? (
          <>
            <OuterContainer>
              <TextContainer>
                <ImageContainer></ImageContainer>
                <Heading>Barcelona . Spain</Heading>
              </TextContainer>
            </OuterContainer>
            <TextBox>
              <Title>Join us in sunny </Title>
              <Title2>Barcelona </Title2>
            </TextBox>
            <Description>
              We bring together over 4000 makers, developers, and blockchain{" "}
              enthusiasts for a three-day<br></br> conference. You can learn
              from the<br></br> best in the crypto scene, and finally <br></br>{" "}
              put those networking skills to use.
            </Description>
            <Button>Join us</Button>{" "}
            <OuterContainer2>
              <TextContainer>
                <ImageContainer2></ImageContainer2>
                <Heading>Claim your NFTickets</Heading>
              </TextContainer>
            </OuterContainer2>
            <TextBox>
              <Title3>NFTickets are going fast…</Title3>
              <Title3>Claim your at DoinGud</Title3>
            </TextBox>
            <Description>
              On the days leading up to the event, your NFTs will <br></br> be
              redeemed to check-in on our website.<br></br> After, you will
              receive a QR-code that grants you <br></br>access to the
              ETHBarcelona conference.
            </Description>
          </>
        ) : (
          <>
            <Right>
              <OuterContainer>
                <TextContainer>
                  <ImageContainer></ImageContainer>
                  {section2 ? (
                    <Heading>Claim your NFTickets</Heading>
                  ) : (
                    <Heading>Barcelona . Spain</Heading>
                  )}
                </TextContainer>
              </OuterContainer>
            </Right>

            <Left id="section">
              <Navbar>
                <a
                  href="/section#section1"
                  onClick={() => {
                    navigate("/section#section1");
                    window.location.reload();
                  }}
                  style={{
                    backgroundColor: !section2 ? "white" : "none",
                    color: !section2 ? "#424242" : "white",
                    fontSize: "25px",
                  }}
                >
                  Event
                </a>
                <a
                  href="/section#section2"
                  onClick={() => {
                    navigate("/section#section2");
                    window.location.reload();
                  }}
                  style={{
                    backgroundColor: section2 ? "white" : "#424242;",
                    color: section2 ? "#424242" : "white",
                    fontSize: "25px",
                  }}
                >
                  Tickets
                </a>
              </Navbar>
              {!section2 ? (
                <SectionContainer1 id="section1">
                  <TextBox>
                    <Title>Join us in sunny </Title>
                    <Title2>Barcelona </Title2>
                  </TextBox>
                  <Description>
                    We bring together over 4000 makers, developers, and
                    blockchain enthusiasts for a three-day<br></br> conference.
                    You can learn from the<br></br> best in the crypto scene,
                    and finally <br></br> put those networking skills to use.
                  </Description>
                  <Button>Join us</Button>{" "}
                </SectionContainer1>
              ) : (
                <SectionContainer2 id="section2">
                  <TextBox>
                    <Title3>NFTickets are going fast…</Title3>
                    <Title3>Claim your at DoinGud</Title3>
                  </TextBox>
                  <Description>
                    On the days leading up to the event, your NFTs will{" "}
                    <br></br> be redeemed to check-in on our website.<br></br>{" "}
                    After, you will receive a QR-code that grants you <br></br>
                    access to the ETHBarcelona conference.
                  </Description>
                </SectionContainer2>
              )}
            </Left>
          </>
        )}
      </Container>
    </>
  );
};

export default Hero;
