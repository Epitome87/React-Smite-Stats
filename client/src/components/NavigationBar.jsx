import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar({header}) {
  return (
    <div className="nav_bar">
      <ul className="side_bar">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/profile/1'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/matches'>Matches</NavLink>
        </li>
      </ul>
      <div className="main_bar">
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
