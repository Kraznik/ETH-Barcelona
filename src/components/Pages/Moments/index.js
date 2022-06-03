import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RedeemOut, Redeem, Title, Description } from "../Redeem";
import "./style.css";

import { useUploadArtwork } from "./functions";
const { uploadFile } = useUploadArtwork();

const Container = styled.div`
  background: #f5c34b;
  padding: 5% 30% 10% 30%;

  @media (max-width: 800px) {
    padding: 10% 10px 100% 10px;
    margin: 0px 0 0 0;
  }
`;

const InputContainer = styled.div`
  background: white;
  border: 1px solid black;
  padding: 2% 0;
  @media (max-width: 800px) {
    padding: 0;
    margin: 0px 0 0 0;
  }
`;

const Forum = styled.div`
  padding: 0 0 5% 0;

  @media (max-width: 800px) {
    padding: 0 0 30px 0;
    margin: 0px 0 0 0;
  }
`;

const Flex = styled.div`
  margin: 2% 0 4% 25%;
  @media (max-width: 800px) {
    padding: 0;
    margin: 10% 0 5% 25%;
  }
`;

const Moments = () => {
  const [AccessToken, setAccessToken] = useState();
  const [file, setFile] = useState();

  const getAccessToken = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      userId:
        "did:3:kjzl6cwe1jw147s91dkr97820ds79es6vrbewrf1fx2a2hipoipceigloxw69u6",
      proof: {
        payload:
          "eyJkaWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0N3M5MWRrcjk3ODIwZHM3OWVzNnZyYmV3cmYxZngyYTJoaXBvaXBjZWlnbG94dzY5dTYifQ",
        signatures: [
          {
            protected:
              "eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0N3M5MWRrcjk3ODIwZHM3OWVzNnZyYmV3cmYxZngyYTJoaXBvaXBjZWlnbG94dzY5dTY_dmVyc2lvbi1pZD0wI3NVTnJXMkFwTm1rNGRiOSIsImFsZyI6IkVTMjU2SyJ9",
            signature:
              "N6x7XrqyUeBEWjWuFCJpdAKsbJv7KTWpKbfMKCYrq4i8yn6kbNTby0GsZMaoziJQTl1zyd8xqVYLnYwAQpUazQ",
          },
        ],
      },
    };
    try {
      const url = `https://api-main.doingud.work/authentication/authentication`;
      const res = await axios.post(url, data, config);
      console.log(res.data);
      setAccessToken(res.data.accessToken);
    } catch (err) {}
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // setTokenData({ ...tokenData, imageIpfsHash: "" });
    console.log("file data: ", data);
    setFile(data);
    // setFileName(data.name);

    // const reader = new window.FileReader();
    // reader.readAsArrayBuffer(data);
    // reader.onloadend = () => {
    //   setFile(Buffer(reader.result));
    //   console.log("file: ", Buffer(reader.result));
    // };

    // console.log("file: ", Buffer(reader.result));

    e.preventDefault();
  };

  const getUploadLink = async () => {
    try {
      if (file && AccessToken) {
        await uploadFile(file, AccessToken);
      }
    } catch {}
  };

  return (
    <>
      <Container>
        <InputContainer>
          <Title> Create a Moment </Title>
          <Description>
            Take a selfie or a normal photo and upload it onchain to remember
            this moment onchain.
          </Description>

          <Forum>
            <label className="text">Title</label>
            <br />
            <input
              type=""
              placeholder="Add a title to your moment"
              className="input"
            ></input>
            <br />

            <label className="text">Description</label>
            <br />
            <input
              type=""
              placeholder="Add a description to your moment"
              className="input"
            ></input>
            <br />

            <label className="text">NFT ID's</label>
            <br />
            <input
              multiple
              type="number"
              placeholder="Add NFTickets IDs separated by a comma to the moment to receive a copy"
              className="input"
            ></input>

            <Flex>
              <input
                type="file"
                className=""
                name="data"
                placeholder="NFT"
                onChange={retrieveFile}
              ></input>
            </Flex>

            <RedeemOut>
              <Redeem onClick={getUploadLink}>Upload Link</Redeem>
            </RedeemOut>

            <RedeemOut>
              <Redeem>Mint a Moment</Redeem>
            </RedeemOut>
          </Forum>
        </InputContainer>
      </Container>
    </>
  );
};

export default Moments;
