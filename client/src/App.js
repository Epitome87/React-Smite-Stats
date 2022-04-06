import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState} from "react";
import './App.css';
import MatchSummary from './components/match_summary/MatchSummary.js';
import MatchesPage from './components/matches/MatchesPage';
import ProfilePage from './components/profile/ProfilePage';
import HomePage from './components/home_page/HomePage';
import NavigationBar from './components/NavigationBar';
import React from 'react';

/*  
  setHeader is passed to each page component and updated when the link is accesses
  header is fed into the navigation bar so that it can be displayed in the nav bar
  Must be updated at each link visited or it wont be current
*/
function App() {
  const [header, setHeader] = new useState("Homepage");

  return (
    <div className='App'>
      <Router>
        <header>
          <NavigationBar header={header}/>
        </header>
        <Routes>
          <Route path='/' element={<HomePage setHeader={setHeader}/>} />
          <Route path='/profile/:id' element={<ProfilePage setHeader={setHeader}/>} />
          <Route path='/matches' element={<MatchesPage setHeader={setHeader}/>} />
          <Route path='/matches/:id' element={<MatchSummary setHeader={setHeader}/>} />
        </Routes>
        {/* Some sort of Footer */}
      </Router>
    </div>
  );
}

export default App;
