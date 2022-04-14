import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar({header}) {
  return (
    <div className="nav_bar">
      <div className="nav_side_bar">
          <NavLink to='/' className="nav_link">Home</NavLink>
          <NavLink to='/profile/1' className="nav_link">Profile</NavLink>
          <NavLink to='/matches' className="nav_link">Matches</NavLink>
      </div>
      <div className="nav_main_bar">
        <h1>{header}</h1>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
        </form>
      </div>
    </div>
  );
}

export default NavigationBar;
