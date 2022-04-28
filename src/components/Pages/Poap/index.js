import React from 'react';
import PoapImage from "../../../assets/Poap.png";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
width: 530px;
margin-top:5%;
height: 618.2px;
left: calc(50% - 530px/2);
background: white;
border: 1px solid black;
border-radius: 4px;`;

const Heading = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
color: #354B37;
`;

const Description = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding: 2% 15% 1% 15%;
line-height: 20px;
/* or 125% */
text-align: center;
/* Green Leaf */
color: #354B37;
margin: 24px 0px;`;

const Image = styled.div`
background-image: url(${PoapImage});
border-radius: 4px;
width: 252px;
height: 252px;
`;

const Check = styled.div`
font-family: 'Dahlia';
font-style: normal;
color: #354B37;
margin: 10% 0 `;


const Poap = () => {
  return (
    <>
    <Container id='Poap'>
        <Heading>Thanks for coming!</Heading>
        <Description>We have send you an NFT to your wallet. You can check it in your DoinGud profile.</Description>
        <Image></Image>
        <Check>Check it in DoinGud</Check>

    </Container>
    </>
  )
}

export default Poap