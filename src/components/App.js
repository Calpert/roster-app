import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerData'
import Player from './Player'
import PlayerList from './PlayerList'

// console.log('pd', playerData)
function App() {
  return (
  <div className="container">
    <Welcome />
    <PlayerList
    players={playerData}
    team={'Astros'}
    favColor={'orange'}
    />
  </div>
  );
}

export default App;
