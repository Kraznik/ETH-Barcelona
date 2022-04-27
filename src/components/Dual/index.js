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

// const OuterContainer2 = styled.div`
//   background-image: url(${Ticket1});
//   height: 900px;
//   padding: 15%;
// `;
const TextContainer = styled.div`
  width: 518px;
  padding: 5%;
  background: #f4f4f5; ;
`;

// const ImageContainer2 = styled.div`
//   background-image: url(${Ticket2});
//   height: 613px;
// `;

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
  overflow-y: auto;
  position: relative;
`;

const Navbar = styled.div`
  background: #424242;
  height: 48px;
  width: 300px;
  margin: 20px 0% 0% 0%;
  border-radius: 100px;
  top: 20px;
  left: 0px;
  position: sticky;
  z-index: 20;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Title2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
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
  width: 300px;
  margin: -5% 0 0 20%;
`;

const TextBox = styled.div`
  margin: 30% 10% 10% 0%;
`;

const Button = styled.div`
  border: 0.8px solid #354b37;
  box-sizing: border-box;
  transform: rotate(-6.41deg);
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 5% 5% 5% 18%;
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
  height: 900px;
  display: grid;
  align-content: center;
  padding-bottom: 200px;
`;

const SectionContainer1 = styled(SectionContainer)``;
const SectionContainer2 = styled(SectionContainer)``;

const Hero = () => {
  const [imageUrlOut, setImageUrlOut] = useState("");
  const [imageUrlIn, setImageUrlIn] = useState("");

  const location = window.location.hash;
  let navigate = useNavigate();

  useEffect(() => {
    setImageUrlOut(Event1);
    setImageUrlIn(Event2);

    console.log(location);
    if (location.slice(-1) === "2") {
      setImageUrlOut(Ticket1);
      setImageUrlIn(Ticket2);
    }
  }, [location]);

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
        <Right>
          <OuterContainer>
            <TextContainer>
              <ImageContainer></ImageContainer>
              <Heading>Barcelona . Spain</Heading>
            </TextContainer>
          </OuterContainer>
        </Right>

        <Left id="section">
          <Navbar
            style={{
              display: "flex",
              padding: "10px 50px",
              gap: "40px",
            }}
          >
            {/* <ScrollableLink href="/section1">
              <a> Go to section 1 </a>
            </ScrollableLink>

            <ScrollableLink href="/section2">
              <a> Go to section 2 </a>
            </ScrollableLink> */}

            <a
              href="/section#section1"
              onClick={() => {
                navigate("/section#section1");
                window.location.reload();
              }}
            >
              Section1
            </a>
            <a
              href="/section#section2"
              onClick={() => {
                navigate("/section#section2");
                window.location.reload();
              }}
            >
              Section2
            </a>
          </Navbar>
          <SectionContainer1 id="section1">
            <TextBox>
              <Title>Join us in suuny </Title>
              <Title2>Barcelona </Title2>
            </TextBox>
            <Description>
              We bring together over 4000 makers, developers, and blockchain{" "}
              <br></br>enthusiasts for a three-day<br></br> conference. You can
              learn from the<br></br> best in the crypto scene, and finally{" "}
              <br></br> put those networking skills to use.
            </Description>
            <Button>Join us</Button>{" "}
          </SectionContainer1>

          <SectionContainer2 id="section2">
            <TextBox>
              <Title>NFTickets are going fast…</Title>
              <Title>Claim your at</Title>
              <Title2>DoinGud </Title2>
            </TextBox>
            <Description>
              On the days leading up to the event, your NFTs will <br></br> be
              redeemed to check-in on our website.<br></br> After, you will
              receive a QR-code that grants you <br></br>access to the
              ETHBarcelona conference.
            </Description>
          </SectionContainer2>
        </Left>
      </Container>

      {/* <Container id="section2">
        <Right>
          <OuterContainer2>
            <TextContainer>
              <ImageContainer2></ImageContainer2>
              <a href="#claim">
                <Heading>Claim your NFT</Heading>
              </a>
            </TextContainer>
          </OuterContainer2>
        </Right>

        <Left>
          <Navbar></Navbar>
          <TextBox>
            <Title>NFTickets are going fast…</Title>
            <Title>Claim your at</Title>
            <Title2>DoinGud </Title2>
          </TextBox>
          <Description>
            On the days leading up to the event, your NFTs will <br></br> be
            redeemed to check-in on our website.<br></br> After, you will
            receive a QR-code that grants you <br></br>access to the
            ETHBarcelona conference.
          </Description>
        </Left>
      </Container> */}
    </>
  );
};

export default Hero;
