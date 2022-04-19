import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import "./style.css"

const Container = styled.div`
background: #424242;
padding: 5% 10% ;

`
const Title = styled.div`
/* Headline 3 Bold */

font-family: 'Dahlia';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 64px;
/* or 100% */
display: flex;
align-items: center;
padding-bottom:2%;
color: #D1ABAD;
`

const FAQ = () => {
  return (
    <>
    <Container>
      <Title>FAQS</Title>
    <Accordion>

  <Accordion.Item eventKey="0" className='Box' >
    <Accordion.Header className='question' >Accordion Item #1</Accordion.Header>
    <Accordion.Body className='answer'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1" className='Box' >
    <Accordion.Header className='question' >Accordion Item #1</Accordion.Header>
    <Accordion.Body className='answer'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
</Container>
    </>
  )
}

export default FAQ