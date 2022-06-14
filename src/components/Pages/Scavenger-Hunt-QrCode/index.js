import React from "react";
import {
  Container,
  Banner,
  Title1,
  Title2,
  Footer,
  InputContainer,
  Title3,
  Description2,
  Input,
  Submit,
  TikcetContainer,
} from "../../Pages/Speaker-Cards";
import styled from "styled-components";
import NFT from "../../../assets/NFT.svg";
import Logo from "../../../assets/NftLogo.svg";

const ImageContainer = styled.div`
width: 343px;
height: 402px;
background: #FFFFFF;
margin: 25px auto;
`

const Name = styled.div`
font-family: 'GT';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 130%;
/* identical to box height, or 26px */
text-align:left;
margin-top:8px;
margin-left:16px;
letter-spacing: -0.04em;
text-align:left;

color: #2B2B2B;
`

const Creator = styled.div`
display:inline-block;

`

const QrCodeScvengerHunt = () => {
  return (
    <>
      <Container>
        <Banner></Banner>

        <Title1>DoGood</Title1>
        <Title2>SCAVENGER HUNT</Title2>

        <ImageContainer>
            <img src={NFT}></img>
            <Name>Mother Earths Renewal</Name>
            {/* <Creator>
            <img src={Logo}></img>
            <Name>@creatorname</Name>
            </Creator> */}

        </ImageContainer>

        <InputContainer>
        <Title1>NFT 1 of 9</Title1>
          <TikcetContainer>
            <Input>
              <br />
              <input
                type="number"
                placeholder="TicketID"
                className="ticketidinput"
              ></input>
              <br />
            </Input>
            <Submit>Claim NFT</Submit>
          </TikcetContainer>
        </InputContainer>

        <Footer></Footer>
      </Container>
    </>
  );
};

export default QrCodeScvengerHunt;
