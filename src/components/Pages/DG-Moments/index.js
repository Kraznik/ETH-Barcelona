import React from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/Dgmoments.svg";
import { Footer, Description2, Question } from "../Scavenger-Play";
import { Title1 } from "../Scavenger-Play";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import PostIt from "../../../assets/Post.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";

export const Banner = styled.div`
  background-image: url(${HeaderImage});
  width: 120%;
  height: 111px;
`;

const Test = styled.div`
  gap: 10px;
`;

export const Title2 = styled.div`
  font-family: "GT";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  text-align: left;
  line-height: 100%;
  margin-left: 20px;
  color: #2b2b2b;
`;

export const Container = styled.div`
  padding: 0 22px;
  margin: 0 0 30px 0;
`;

const Post = styled.div`
  background-image: url(${PostIt});
  width: 108px;
  margin: 5px 3px;
  display: inline-block;
  height: 106px;
`;

export const Submit = styled.button`
  background: #2b2b2b;
  border-radius: 100px;
  margin: 62px auto;
  border: none;
  width: 250px;
  height: 48px;
  font-family: "GT";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  /* Grey 3 */

  color: #f6f7fb;
`;

const Task = styled.div`
  font-family: "GT";
  font-style: normal;
  padding: 20px 11px;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  /* or 108% */

  color: #ffffff;
`;

const DgMoments = () => {
  return (
    <>
      <Banner />

      <Title1>DoGud</Title1>
      <Title2>Momentos</Title2>
      <Container>
        <Description2>
          Did you know that your acts of kindness can become NFTs?!
          <br />
          <br /> At DoinGud, we believe in recognizing and celebrating acts of
          kindness, spreading that love to the world. We invite the ETHBarcelona
          community to complete “DoGud” challenges, capture them, and transform
          them into NFTs.
          <br />
          <br /> If you do, you can win a prize!{" "}
        </Description2>
      </Container>
      <Accordion>
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header className="">
            <Question>How to play?</Question>
          </Accordion.Header>
          <Accordion.Body className="instructions">
            1. Go to landing page url here. <br />
            2. Choose any DoGud challenge and complete it.
            <br />
            3. Describe how you did it.
            <br /> 4. Upload a photo of yourself completing the challenge.
            <br /> 5. Mint it!
            <br /> 6. Once you’ve completed 5 DoGud challenges, you can claim
            your reward in DoinGud’s booth.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header className="">
            <Question>DoGud Challenges</Question>
          </Accordion.Header>
          <Accordion.Body className="post">
            <Post>
              <Task>Pick up trash today</Task>
            </Post>
            <Post>
              <Task>Smile at everyone you see today</Task>
            </Post>

            <Post>
              <Task>Pay for a strangers meal</Task>
            </Post>
            <Post>
              <Task>Do something kind for a stranger</Task>
            </Post>
            <Post>
              <Task>Compliment 5 people today</Task>
            </Post>
            <Post>
              <Task>Let someone go ahead of you in line</Task>
            </Post>
            <Post>
              <Task>Offer help to someone in need</Task>
            </Post>
            <Post>
              <Task>Get to know someone new</Task>
            </Post>
            <Post>
              <Task>Hold the door for 7 people today</Task>
            </Post>
            <Post>
              <Task>Give 3 strangers a hug</Task>
            </Post>
            <Post>
              <Task>Follow an Impact Organization on Social Media</Task>
            </Post>
            <Post>
              <Task>Carry someones bag</Task>
            </Post>
            <Post>
              <Task>Donate to a local charity</Task>
            </Post>
            <Post>
              <Task>Educate a local merchant on accepting crypto</Task>
            </Post>
            <Post>
              <Task>Tell someone you love them</Task>
            </Post>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <a href="/dgmint">
        <Submit>Submit your challenges</Submit>
      </a>

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

export default DgMoments;
