import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";

const Container = styled.div`
  background: #424242;
  padding: 5% 10% 1% 10%;
  @media (max-width: 700px) {
    padding-top: 25%;
    padding-bottom: 20%;
  }
`;
const Title = styled.div`
  /* Headline 3 Bold */

  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  /* or 100% */
  display: flex;
  align-items: center;
  padding-bottom: 2%;
  color: #d1abad;

  @media (max-width: 700px) {
    padding-bottom: 10%;
  }
`;

const FAQ = () => {
  return (
    <>
      <Container id="faq">
        <Title>FAQS</Title>
        <Accordion>
          <Accordion.Item eventKey="0" className="Box">
            <Accordion.Header className="question">
              {" "}
              What is ETHBarcelona
            </Accordion.Header>
            <Accordion.Body className="answer">
            ETHBarcelona is a community-led passion project about the Ethereum blockchain, cryptocurrency and decentralization that celebrates the community and its values. It focuses on education, innovation, art, and creating positive social impact. <br></br>The goal is to give people the tools they need to further their knowledge in blockchain technology, as well as learn how to build projects that can make an impact on society.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="Box">
            <Accordion.Header className="question">
            What events, outside of crypto talks, will be there 
            </Accordion.Header>
            <Accordion.Body className="answer">
            In addition to the talks, discussions, and networking opportunities, we'll be having art installations, musical performances, and special events to maximize the fun during your time at ETHBarcelona.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="Box">
            <Accordion.Header className="question">
              {" "}
              Who Can Participate?
            </Accordion.Header>
            <Accordion.Body className="answer">Anyone who is passionate about decentralization and web3 is welcome to attend ETHBarcelona.
</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="Box">
            <Accordion.Header className="question">
              {" "}
              What is the Code of Conduct?
            </Accordion.Header>
            <Accordion.Body className="answer">We are committed to creating a safe and inclusive environment. We are also committed to protecting the safety of everyone in attendance at our event, including staff and volunteers. We know that the event will be much more enjoyable for everyone if we all follow these simple rules:
<br></br>- Any form of harassment—in person or online—is not permitted
<br></br>- Abusive comments or behavior towards others will not be tolerated</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="Box">
            <Accordion.Header className="question">
              {" "}
              I have a question not listed here, who can I talk to?
            </Accordion.Header>
            <Accordion.Body className="answer">Please reach out directly to info@ethbarcelona.com </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className="Box">
            <Accordion.Header className="question">
              {" "}
              What are the current corona restrictions?
            </Accordion.Header>
            <Accordion.Body className="answer">As of April 20th, 2022, people are no longer required to wear masks indoors. This means that all attendees will now be able to enter ETHBarcelona without being required to wear a face mask. Please refer to the most current information from Spain’s official tourism website for the latest details about potential traveling restrictions.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQ;
