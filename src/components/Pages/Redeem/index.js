import React from 'react'; 
import Ticket from "../../../assets/RedeemTicket.png";
import styled from "styled-components";
import "./style.css";


const Container = styled.div`
margin:auto;
margin-top:3%;
padding-top:1%;
width: 600px;
height: 700px;
left: calc(50% - 530px/2);

/* White */
border:1px solid black;
background: #FFFFFF;
border-radius: 4px;
`;

const Title = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 24px;
/* identical to box height, or 100% */

align-items: center;
text-align: center;

/* Green Leaf */

color: #354B37;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;`;

const Description = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 20px;
padding:0 16%;
line-height: 20px;
/* or 125% */

text-align: center;

/* Green Leaf */

color: #354B37;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;`;

const Tickets = styled.div`
background-image: url(${Ticket});
width: 180px;
height:180px;
margin:auto;
margin-top:20px;
border-radius:4px;
`;

const Forum = styled.div`
padding:0 5%;
text-align:left;
margin-left:10%;
`;

const TicketId = styled.div`
font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
padding:10px;
/* identical to box height, or 100% */
`;

const Redeem = styled.button``;

const RedeemNFT = () => {
  return (
    <>
    <Container>
        <Title>Redeem NFT</Title>
        <Description>Redeem your NFTicket to get a QR code to enter the event</Description>
        <Forum>
        <label className='text'>
          Full Name
        </label><br/>
        <input type="text" placeholder='Add your full name' className='input'></input>
        <br/>

        <label className='text'>
          Display Name
        </label><br/>
        <input type="text" placeholder='How do you want to be called' className='input'></input>
        <br/>

        <label className='text'>
          Email
        </label><br/>
        <input type="text" placeholder='name@email.com' className='input' ></input>
        <br/>

        </Forum>
        <Tickets></Tickets>
        <TicketId> NFTicket 69</TicketId>
        <Redeem>Redeem Now</Redeem>
    </Container>

    </>
  )
}

export default RedeemNFT