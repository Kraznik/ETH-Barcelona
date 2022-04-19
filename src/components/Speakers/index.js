import React from 'react'; 
import styled from 'styled-components';
import Speaker from "../../assets/Speaker1.png"

const Container = styled.div`
background:#E5E5E5;
padding-top:2%;

`; 

const Title = styled.div`


font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 100px;
text-align:left;
padding:20px;
margin: 0% 10%;
border-bottom: 1px solid #354B37;
color: #354B37;

@media (max-width: 600px) {
    font-weight: 400;
font-size: 56px;
line-height: 56px;
  }

`; 

const Box = styled.div`background:#E5E5E5;
width:max;`

const SpeakerContainer = styled.div`
padding-top:4%; 
float:left;
background:#E5E5E5;
margin: 0 0 0 8%;
`; 

const IndividualSpeakerContainer = styled.div`
height:300px;
width:300px;
display:inline-block;
filter: grayscale(100%);


&:hover{
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    filter: grayscale(0%);

 
}
`; 


const SpeakerImage = styled.div`
display:inline-block;

`; 

const SpeakerCompany = styled.div`
transform: rotate(270deg);
font-weight: 400;
margin: -35px 0 0 270px;
font-size: 16px;
line-height: 20px;

`

const SpeakerName = styled.div`
posotion:relative;
display:inline-block;
margin-top:25px;
text-align:center;
font-weight: 700;
font-size: 24px;
line-height: 24px;
`;


const Speakers = () => {
  return (
    <>
    <Container>
        <Title>Judges & Speakers</Title>
        <Box>
        <SpeakerContainer>
            <IndividualSpeakerContainer>
                <SpeakerImage> <img src={Speaker}></img></SpeakerImage>
                <SpeakerCompany>DoinGud</SpeakerCompany>
                <SpeakerName>Sanchit </SpeakerName>
            </IndividualSpeakerContainer>
            <IndividualSpeakerContainer>
                <SpeakerImage> <img src={Speaker}></img></SpeakerImage>
                <SpeakerCompany>DoinGud</SpeakerCompany>
                <SpeakerName>Sanchit </SpeakerName>
            </IndividualSpeakerContainer>
            <IndividualSpeakerContainer>
                <SpeakerImage> <img src={Speaker}></img></SpeakerImage>
                <SpeakerCompany>DoinGud</SpeakerCompany>
                <SpeakerName>Sanchit </SpeakerName>
            </IndividualSpeakerContainer>
            <IndividualSpeakerContainer>
                <SpeakerImage> <img src={Speaker}></img></SpeakerImage>
                <SpeakerCompany>DoinGud</SpeakerCompany>
                <SpeakerName>Sanchit </SpeakerName>
            </IndividualSpeakerContainer>
        </SpeakerContainer>

        </Box>

    </Container>
    
    </>
  )
}

export default Speakers