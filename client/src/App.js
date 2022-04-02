import logo from './logo.svg';
import './App.css';
import MatchSummary from "./components/match_summary/MatchSummary.js"
import game from "./components/game.json"

function App() {
  return (
    <div className='App'>
      <MatchSummary game={game}/>
    </div>
  );
}

export default App;
