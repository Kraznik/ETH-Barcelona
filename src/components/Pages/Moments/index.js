import React from 'react'; 
import styled from 'styled-components';
import {RedeemOut, Redeem, Title, Description} from "../Redeem";
import "./style.css";

const Container = styled.div`
background: #F5C34B;
padding: 5% 30% 10% 30%;

@media (max-width: 800px) {
    padding: 10% 10px 100% 10px;
    margin: 0px 0 0 0;
  }


`

const InputContainer = styled.div`
background:white;
border: 1px solid black;
padding:2% 0;
@media (max-width: 800px) {
    padding: 0;
    margin: 0px 0 0 0;
  }

`


const Forum = styled.div`
padding : 0 0 5% 0;

@media (max-width: 800px) {
    padding: 0 0 30px 0;
    margin: 0px 0 0 0;
  }

`


const Flex = styled.div`
margin: 2% 0 4% 25% ;
@media (max-width: 800px) {
    padding: 0;
    margin: 10% 0 5% 25% ;
  }




`



const Moments = () => {
  return (
      <>
      <Container>
          <InputContainer>
          <Title> Create a Moment </Title>
          <Description>Take a selfie or a normal photo and upload it onchain to remember this moment onchain.</Description>

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
            <input multiple
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
            ></input>

          </Flex>

          <RedeemOut>
            <Redeem>Mint a Moment</Redeem>
          </RedeemOut>

          </Forum>
          
          </InputContainer>
      </Container>
      
      </>
  )
}

export default Moments