import React from 'react';
import "./ProfilePage.css";
import PlayerStats from "./playerbar/PlayerStats"
import ClassStats from "./classbar/ClassStats"
import PlayerGods from "./godsbar/PlayerGods"

function ProfilePage({ setHeader }) {
  setHeader("Profile");
  return (
    <div className="profile_page">
      <h1>Profile Page</h1>
      <p>
        Here will be the Profile page for a player. It will feature a panel with
        Player Stats
      </p>
      <div className="profile_page_main">
        <PlayerStats />
        <PlayerGods />
        <ClassStats />
      </div>
    </div>
  );
}

export default ProfilePage;
