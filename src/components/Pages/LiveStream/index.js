import React from "react";
import Navbars from "../../Navbar";
import styled from "styled-components";
import "./style.css";

const Container = styled.div`
  padding: 0 154px 114px 154px;
  @media (max-width: 800px) {
    padding: 0 22px 109px 22px;
  }
`;

const Title = styled.div`
  font-family: "Dahliadd";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  margin-top: 50px;
  line-height: 100px;
  text-align: left;
  color: #354b37;
  @media (max-width: 800px) {
    font-size: 56px;
  }
`;

const Title2 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-top: 80px;
  display: flex;
  color: #354b37;
`;

const Video = styled.div`
  margin-top: 24px;
  height: 571px;
  width: 1108px;
  border-radius: 20px;
  @media (max-width: 800px) {
    height: 401px;
    width: 342px;
  }
`;

const LiveStream = () => {
  return (
    <>
      <Container>
        <Title> Live Streaming</Title>

        <Title2>Live now · Streaming 1</Title2>
        <Video className="youTubeContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/l7wmz46PAuo"
            title="ETH Bcn Forest Stage Live Stream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>

        <Title2>Live now · Streaming 2</Title2>
        <Video className="youTubeContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eyAcJb7O7K8"
            title="Eth Bcn Sky stage Live Stream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>
      </Container>
    </>
  );
};

export default LiveStream;
