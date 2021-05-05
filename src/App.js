import './App.css';
import SongList from './com/SongList'
import SongDetails from './com/SongDetails'
import PostList from './com/PostList'


function App() {
  return (
<div className="ui container grid">
  <div className="ui row">
  <div className="column eight wide" >
     <SongList/>
       <hr/>
       <br/>
       <br/>
       <PostList/>
    </div>
    <div className="column eight wide">
    <SongDetails/>
    <hr/>
    </div> 
  </div>
 
</div>

  
  );
}

export default App;
