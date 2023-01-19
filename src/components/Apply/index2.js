import React from "react";
import styled from "styled-components";
import Desktop from "../../../src/assets/ApplyBackground.svg";
import MObile from "../../assets/ApplyMobile.svg";

const ImageContainer = styled.div`
  background-image: url(${Desktop});
  /* width: 1440px; */

  /* height: 415px; */
  width: 100vw;
  height: 415px;

  @media (max-width: 800px) {
    background-image: url(${MObile});
    height: 592px;
    width: 100%;
  }
`;

const Heading1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  padding: 72px 626px 0 626px;

  @media (max-width: 800px) {
    padding: 0;
    padding: 82px 0px 0 0px;
  }
`;

const Heading2 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  font-color: transparent;
  line-height: 64px;
  color: transparent;
  margin: 12px 0 0 0;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #354b37;
  text-transform: uppercase;

  @media (max-width: 800px) {
    padding: 0;
    margin: 12px 0 0 0;
    font-family: "Dahlia";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    /* or 100% */

    text-align: center;
    text-transform: uppercase;
  }
`;

const Heading3 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 64px;
  /* or 100% */
  color: #354b37;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 800px) {
    padding: 0;
    font-family: "Dahlia";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    /* or 100% */

    text-align: center;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 48px;
  }
`;

const Heading4 = styled.div`
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #354b37;
  display: inline-block;
  width: 156px;
  margin: 48px 106px 0 0;

  a {
    text-decoration: none;
    color: #354b37;
  }

  &:hover {
    border-bottom: 1px solid #354b37;
  }

  @media (max-width: 800px) {
    padding: 8px 0 0 0;
    margin: 0;
    display: block;
    height: 52px;
    width: 301px;
  }
`;

const ApplyContainer = styled.div`
  display: inline-block;
  margin-left: 100px;

  @media (max-width: 800px) {
    padding: 0;
    margin: 0;
  }
`;

const Apply = () => {
  return (
    <>
      <ImageContainer>
        <Heading1>WE WILL BE TOGETHER SOON</Heading1>
        <Heading2>APPLY &</Heading2>
        <Heading3> JOIN THE PARTY</Heading3>
        <ApplyContainer>
          <Heading4>
            <a href="https://form.typeform.com/to/Ivc5Yhnw">Apply as a Speaker</a>
          </Heading4>
          <Heading4>
            <a href="https://form.typeform.com/to/W9ZJTLHR">Apply as a Media Partner</a>
          </Heading4>
          <Heading4>
            <a href="https://form.typeform.com/to/ZV1XCNdh">Apply as a Volunteer</a>
          </Heading4>
          <Heading4>
            <a href="https://form.typeform.com/to/JPmR5t3l">Apply as a Sponsor</a>
          </Heading4>
          <Heading4>
            <a href="https://form.typeform.com/to/Ms67e4Cl">
              Student Ticket Application
            </a>
          </Heading4>
        </ApplyContainer>
      </ImageContainer>
    </>
  );
};

export default Apply;
