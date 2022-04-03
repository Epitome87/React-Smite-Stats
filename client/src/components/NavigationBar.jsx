import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
      <ul>
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
    </div>
  );
}

export default NavigationBar;
