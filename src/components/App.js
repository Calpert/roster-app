import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerData'
import Player from './Player'

console.log('pd', playerData)
function App() {
  return (
  <div className="container">
    <Welcome />
    <Player />
  </div>
  );
}

export default App;
