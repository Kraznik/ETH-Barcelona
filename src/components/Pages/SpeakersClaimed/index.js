import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const options = {
  headers: {
    validate: process.env.REACT_APP_VALIDATE_TOKEN,
  },
};

const SpeakersClaimed = () => {
  const { ticketId } = useParams();
  const [listSpeakers, setListSpeakers] = useState([]);

  const fetchUserSpeakerDetails = async () => {
    try {
      const url = `https://eth-barcelona.kraznikunderverse.com/speakers/${ticketId}`;
      const { data } = await axios.get(url, options);
      const speakers = data.data;

      let listCards = [];
      speakers.map((speaker) => {
        const card = renderCard(speaker);
        listCards.push(card);
      });
      setListSpeakers(listCards);
    } catch (err) {
      console.error(err);
    }
  };

  const renderCard = (speakerId) => {
    return (
      <>
        <h1>{speakerId}</h1>
      </>
    );
  };

  useEffect(() => {
    fetchUserSpeakerDetails();
  }, []);

  return (
    <>
      <div>Speakers Claimed for ticket id ${ticketId}</div>
      {listSpeakers}
    </>
  );
};

export default SpeakersClaimed;
