import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MatchSummary from './components/match_summary/MatchSummary.js';
import MatchesPage from './components/MatchesPage';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/:id' element={<ProfilePage />} />
          <Route path='/matches' element={<MatchesPage />} />
          <Route path='/matches/:id' element={<MatchSummary />} />
        </Routes>
        {/* Some sort of Footer */}
      </Router>
    </div>
  );
}

export default App;
