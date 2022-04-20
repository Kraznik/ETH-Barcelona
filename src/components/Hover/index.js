import React from 'react'; 
import styled from "styled-components";

const Container = styled.div`
background: #F4F4F5;
display:inline-block;

`;

const LeftBox = styled.div`
background:red;
display:inline-block;

`;

const Nav = styled.div``;
const TextBox = styled.div``;
const Title1 =styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 400;
font-size: 78px;
line-height: 78px;
/* or 100% */
color: #424242;`;

const Title2 = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 78px;
line-height: 78px;
/* or 100% */
letter-spacing: -0.02em;
color: #424242;`;

const Description = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* or 125% */
align-items: center;
color: #424242;`;

const Button = styled.div``;
const RightBox = styled.div`
background:blue;
`;


const Hover = () => {
    return (
        <>
        <Container>
            <LeftBox>
                <Nav></Nav>
                <TextBox>
                <Title1>Join us in sunny</Title1>
                <Title2>Barcelona</Title2>
                <Description>We bring together over 4000 makers, developers, and blockchain enthusiasts for a three-day conference. You can learn from the best in the crypto scene, and finally put those networking skills to use.</Description>
                <Button>Join us</Button>
                </TextBox>
            </LeftBox>
            
            <RightBox>
                Sanchit

            </RightBox>

        </Container>
        </>
    )
}

export default Hover
