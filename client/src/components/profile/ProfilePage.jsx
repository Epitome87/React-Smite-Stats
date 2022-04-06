import React from 'react';
import "./ProfilePage.css";
import PlayerStats from "./playerbar/PlayerStats"
import ClassStats from "./classbar/ClassStats"
import PlayerGods from "./godsbar/PlayerGods"

function ProfilePage({setHeader}) {
  setHeader("Profile");
  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Here will be the Profile page for a player. It will feature a panel with
        Player Stats
      </p>
        <PlayerStats />
      {/*
      {/* PLAYTIME BY QUEUE - A COMPONENT?? */}
      <div className="playtime">
        <h2>PLAYTIME BY QUEUE</h2>
        <p>
          This is where some fancy graph goes. It will probably be a bonus
          feature, if we learn to use some third party graphing library
        </p>
        <p>Line 2</p>
      </div>
      <PlayerGods />

      <ClassStats />
    </div>
  );
}

export default ProfilePage;
