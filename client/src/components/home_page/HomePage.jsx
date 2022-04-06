import React from 'react';
import MatchSummary from "../match_summary/MatchSummary"
import "./HomePage.css"
import TopBuilds from "./TopBuilds"

function HomePage({setHeader}) {
  setHeader("Smite Stats Website");

  return (
    <article>
      <h1>Homepage</h1>
      <p>
        Maybe a nice looking landing page with a call-to-action button to
        explore stats
      </p>
      <p>
        Or maybe just mimic what palandins.guru does and present the recent top
        players or some recent matches
      </p>
      <TopBuilds />
    </article>

  );
}

export default HomePage;
