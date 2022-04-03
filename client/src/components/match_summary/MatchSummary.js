import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MatchSummary.css';
import TeamList from './TeamList.js';
import TeamCard from './TeamCard.js';
import axios from 'axios';

function MatchSummary({ game }) {
  //   const team1 = game.teams[0];
  //   const team2 = game.teams[1];
  //   const team1players = team1.players;
  //   const team2players = team2.players;
  //   const gamemode = game.gamemode;
  //   const duration = game.duration;
  //   const time = game.time;
  const { id: matchID } = useParams();
  const [mockGame, setMockGame] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/matches/${matchID}`)
      .then((response) => response.data)
      .then((data) => setMockGame(data));
  }, []);

  if (!mockGame) {
    return <div>Fetching Game...</div>;
  }

  return (
    <div className='match_summary'>
      <div className='game_description'>
        <TeamCard team={mockGame.teams[0]} />
        <TeamCard team={mockGame.teams[1]} />
        <h1>{mockGame.gamemode}</h1>
        <h2>
          {mockGame.duration} - {mockGame.time}
        </h2>
      </div>
      <TeamList
        team={mockGame.teams[0].team}
        players={mockGame.teams[0].players}
      />
      <TeamList
        team={mockGame.teams[1].team}
        players={mockGame.teams[1].players}
      />
    </div>
  );
}

export default MatchSummary;
