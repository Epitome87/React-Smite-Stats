import React from 'react';
import { Link } from 'react-router-dom';

function MatchesPage({setHeader}) {
  setHeader("Matches");
  return (
    <div>
      <h1>Matches Page</h1>
      <p>
        Here we will find a list of MatchSummary components. Each one will have
        a 'View Match' button which will take us to a new Page that shows a
        summary of that individual match
      </p>
      <Link to='0'>View Match ID 0</Link>
      <Link to='1'>View Match ID 1</Link>
    </div>
  );
}

export default MatchesPage;
