import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";
import Ticket1 from "../../assets/Ticket1.png";
import Ticket2 from "../../assets/Ticket2.png";

import { useNavigate } from "react-router-dom";

import { Scrollchor } from "react-scrollchor";

import "./style.css";

const Container = styled.div`
  background: #f4f4f5;
  overflow-y: auto;
  height: 900px;
  position: relative;
`;

const Right = styled.div`
  width: 646px;
  display: inline-block;
  float: right;
  position: relative;
`;
/* background-image: url(${imageUrlOut}); */

const OuterContainer = styled.div`
  /* background-image: url(${Event1}); */
  height: 900px;
  padding: 15%;
  top: 0px;
  right: 0px;
  position: sticky;
  margin-top: -68px;
  z-index: 100 !important;
`;

const ImageRight = styled.img`
  height: 800px;
  /* padding: 15%; */
  /* top: 0px;
  right: 0px;
  position: sticky; */
`;

/* background-image: url(${imageUrlIn}); */

const ImageContainer = styled.div`
  /* background-image: url(${Event2}); */
  height: 613px;
`;

const OuterContainer2 = styled.div`
  /* background-image: url(${Ticket1}); */
  height: 900px;
  padding: 15%;
  z-index: 1000 !important;
  position: sticky;
  margin-top: 68px;
`;
const TextContainer = styled.div`
  width: 518px;
  padding: 5%;
  background: #f4f4f5; ;
`;

const ImageContainer2 = styled.div`
  /* background-image: url(${Ticket2}); */
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
  /* position: relative; */
`;

const Navbar = styled.div`
  background: #424242;
  height: 48px;
  width: 300px;
  margin: 20px 0% 0% 0%;
  border-radius: 100px;
  top: 20px;
  left: 100px;
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

const SectionContainer1 = styled(SectionContainer)`
  /* top: 0px;
  position: sticky; */
`;
const SectionContainer2 = styled(SectionContainer)`
  /* position: sticky; */
`;

const onScroll = () => {
  var currentHash = "#initial_hash";
  document.scroll(function () {
    ".anchor_tags".each(function () {
      var top = window.pageYOffset;
      var distance = top - this.offset().top;
      var hash = this.attr("href");
      // 30 is an arbitrary padding choice,
      // if you want a precise check then use distance===0
      if (distance < 30 && distance > -30 && currentHash != hash) {
        window.location.hash = hash;
        currentHash = hash;
      }
    });
  });
};

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

  return (
    <>
      <Container>
        <Navbar
          style={{
            display: "flex",
            padding: "10px 50px",
            gap: "40px",
          }}
        >
          {/* <a
            href="/section#section1"
            //   onClick={() => {
            //     navigate("/section#section1");
            //     window.location.reload();
            //   }}
          >
            Section1
          </a>
          <a
            href="/section#section2"
            //   onClick={() => {
            //     navigate("/section#section2");
            //     window.location.reload();
            //   }}
          >
            Section2
          </a> */}
          <Scrollchor to="#section1">Section1</Scrollchor>
          <Scrollchor to="#section2">Section2</Scrollchor>
        </Navbar>
        <Right>
          {/* <OuterContainer className="outimg outimg1">
            <ImageRight src={Event1} />
          </OuterContainer> */}
          <OuterContainer className="outimg outimg1">
            <TextContainer>
              <ImageContainer className="inimg inimg1"></ImageContainer>
              <Heading>Barcelona . Spain</Heading>
            </TextContainer>
          </OuterContainer>

          <OuterContainer2 className="outimg outimg2">
            <TextContainer>
              <ImageContainer2 className="inimg inimg2"></ImageContainer2>
              <a href="#claim">
                <Heading>Claim your NFT</Heading>
              </a>
            </TextContainer>
          </OuterContainer2>
          {/* <OuterContainer>
            <TextContainer>
              <ImageContainer></ImageContainer>
              <Heading>Barcelona . Spain</Heading>
            </TextContainer>
          </OuterContainer> */}
          {/* <OuterContainer2>
            <TextContainer>
              <ImageContainer2></ImageContainer2>
              <a href="#claim">
                <Heading>Claim your NFT</Heading>
              </a>
            </TextContainer>
          </OuterContainer2> */}
        </Right>

        <Left>
          <SectionContainer1 id="section1">
            <TextBox>
              <Title>Join us in sunny </Title>
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
