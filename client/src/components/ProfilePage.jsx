import React from 'react';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Here will be the Profile page for a player. It will feature a panel with
        Player Stats
      </p>
      {/* Player Stats Panel -- Probably a Component! */}
      <article>
        <h2>Player Stats</h2>
        {/* This div will essentially be re-used 4x -- Component? */}
        <div>
          <h3>MATCHES</h3>
          <p>Played - 5,027</p>
          <p>Won - 3,105</p>
          <p>Lost - 1,922</p>
        </div>
        <div>
          <h3>PLAYER KILLS</h3>
          <p>KDA - 2.28</p>
          <p>Kills - 26,516</p>
          <p>Deaths - 28,386</p>
          <p>Assists 76,587</p>
        </div>
        <div>
          <h3>OBJECTIVES</h3>
          <p>CPM - 266</p>
          <p>Credits - 15,535,418</p>
          <p>Objective Time - 8,119m 7s</p>
        </div>
        <div>
          <h3>DAMAGE</h3>
          <p>Player - 205,127,938</p>
          <p>Team Healing - 145,833,076</p>
          <p>Self Healing - 47,405,325</p>
          <p>Weapon - 175,301,322</p>
          <p>Shielding - 130,313,579</p>
          <p>Taken - 301,803,191</p>
        </div>
      </article>

      {/* PLAYTIME BY QUEUE - A COMPONENT?? */}
      <article>
        <h2>PLAYTIME BY QUEUE</h2>
        <p>
          This is where some fancy graph goes. It will probably be a bonus
          feature, if we learn to use some third party graphing library
        </p>
      </article>

      {/* MOST PLAYED CHAMPSIONS - A COMPONENT?? */}
      <article>
        <h2>MOST PLAYED CHAMPIONS</h2>
        {/* This div would most likely be its own component as well */}
        <div>
          <div>Picture</div>
          <div>Champion / Role</div>
          <div>Some Stats</div>
          <div>Win - Loss (%) / Playtime</div>
        </div>
      </article>

      {/* STATS BY CLASS - A Component? Probably not its own component, but each of its children should be*/}
      <article>
        {/* This div is re-usable component */}
        <div>
          <div>Class Header, has picture, # of games, # of wins</div>
          <div>A LOT of bars with stat data -- probably its own component!</div>
        </div>
      </article>
    </div>
  );
}

export default ProfilePage;
