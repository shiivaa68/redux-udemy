import {selectSong} from './actions'
import './App.css';
import SongList from './com/SongList'
import SongDetails from './com/SongDetails'

function App() {
  return (
<div className="ui container grid">
  <div className="ui row">
  <div className="column eight wide" >
     <SongList/>
  
    </div>
    <div className="column eight wide">
    <SongDetails/>
    </div>
  </div>
</div>

  
  );
}

export default App;
