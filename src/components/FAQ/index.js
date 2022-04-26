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
            <Accordion.Body className="answer"></Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="Box">
            <Accordion.Header className="question">
              Who can participate?
            </Accordion.Header>
            <Accordion.Body className="answer">
              Anyone 18 and over at the time of the event can apply to
              participate in the #BUIDLathon (see next section if you’re under
              18). Applications are based on interest in blockchain technology
              and demonstrated ability to code, design or otherwise meaningfully
              contribute to a project. Applications from any corner of the globe
              will be accepted. PLEASE NOTE that non-technical contributors are
              highly encouraged to participate (the best teams are well
              rounded). If you have something you think you can add to the
              ecosystem – whether it's a knack for crafting white papers to
              explain dApps, a creative or artistic perspective, or an
              entrepreneurial vision – we'd welcome your talents and skills on
              one of the #BUIDLathon teams.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="Box">
            <Accordion.Header className="question">
              {" "}
              How much does it cost to attend?
            </Accordion.Header>
            <Accordion.Body className="answer"></Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="Box">
            <Accordion.Header className="question">
              {" "}
              What are ETH Barcelona’s measure against the corona virus?
            </Accordion.Header>
            <Accordion.Body className="answer"></Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="Box">
            <Accordion.Header className="question">
              {" "}
              How do I get there?
            </Accordion.Header>
            <Accordion.Body className="answer"></Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className="Box">
            <Accordion.Header className="question">
              {" "}
              Code of Conduct
            </Accordion.Header>
            <Accordion.Body className="answer"></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQ;
