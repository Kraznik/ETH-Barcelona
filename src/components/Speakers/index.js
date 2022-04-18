import React from 'react'; 
import styled from 'styled-components';
import Speaker from "../../assets/Speaker1.png"

const Container = styled.div``; 

const Title = styled.div``; 

const SpeakerContainer = styled.div``; 

const IndividualSpeakerContainer = styled.div`
display:inline-block;
position:relative;
position:relative;`; 


const SpeakerImage = styled.div`


@media (max-width: 700px) {

  }
`; 

const SpeakerCompany = styled.div`
transform: rotate(90deg);
background-color:red;
display:inline-block;
margin: 
`

const SpeakerName = styled.div`
background:blue;`;


const Speakers = () => {
  return (
    <>
    <Container>
        <Title>Judges & Speakers</Title>
        <SpeakerContainer>
            <IndividualSpeakerContainer>
                <SpeakerImage> <img src={Speaker}></img></SpeakerImage>
                <SpeakerCompany>DoinGud</SpeakerCompany>
                <SpeakerName>Sanchit </SpeakerName>
            </IndividualSpeakerContainer>
        </SpeakerContainer>
    </Container>
    
    </>
  )
}

export default Speakers