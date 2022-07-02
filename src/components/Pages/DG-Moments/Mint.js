import React from "react";
import { Banner, Title2, Container, Submit, Title3 } from ".";
import { Footer, Description2, Question } from "../Scavenger-Play";
import DoinGud from "../../../assets/FooterDG.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Insta.svg";
import { Title1 } from "../Scavenger-Play";
import Dropdown from "react-bootstrap/Dropdown";
import Upload from "../../../assets/Upload.svg";
import { type } from "os-browserify";

const Mint = () => {
  return (
    <>
      <Banner />
      <Title1>DoGud</Title1>
      <Title2>Momentos</Title2>
      <Container>
        <Description2>
          Submit your moments of kidness and share with the community how to
          build a better world based on LOVE.
        </Description2>
      </Container>

      <Title3>dogud challenge submission</Title3>
      <select className="drop">
        <option value="1" className="dropdown">
          Pick up trash today
        </option>
        <option value="2" className="dropdown">
          Smile at everyone you see today
        </option>
        <option value="3" className="dropdown">
          Pay for a strangers meal
        </option>
        <option value="4" className="dropdown">
          Do something kind for a stranger
        </option>
        <option value="5" className="dropdown">
          Compliment 5 people today
        </option>
        <option value="volvo" className="dropdown">
          Let someone go ahead of you in line
        </option>
        <option value="volvo" className="dropdown">
          Offer help to someone in need
        </option>
        <option value="volvo" className="dropdown">
          Get to know someone new
        </option>
        <option value="volvo" className="dropdown">
          Hold the door for 7 people today
        </option>
        <option value="volvo" className="dropdown">
          Give 3 strangers a hug
        </option>
        <option value="volvo" className="dropdown">
          Follow an Impact Organization on Social Media
        </option>
        <option value="volvo" className="dropdown">
          Carry someones bag
        </option>
        <option value="volvo" className="dropdown">
          Donate to a local charity
        </option>
        <option value="volvo" className="dropdown">
          Educate a local merchant on accepting crypto
        </option>
        <option value="volvo" className="dropdown">
          Tell someone you love them
        </option>
      </select>

      <Title3>DESCRIPTION</Title3>
      <input
        type="text"
        placeholder="Add your full name"
        className="des"
      ></input>

      <Title3>TICKET ID</Title3>
      <input type="number" placeholder="NFTicket ID" className="drop"></input>


        <img src={Upload}></img>


      <Submit>Mint Challenge</Submit>

      <Footer>
        <div className="ft">
          <a href="/dgmoments">
            <img src={DoinGud} className="dg"></img>
          </a>
          <a href="https://www.instagram.com/ethbarcelona/">
            {" "}
            <img src={Instagram} className="social"></img>
          </a>

          <a href="https://twitter.com/eth_barcelona">
            {" "}
            <img src={Twitter} className="social"></img>
          </a>
        </div>
        <p className="rights"> © DoinGud. All Right Reserved. </p>
      </Footer>
    </>
  );
};

export default Mint;
