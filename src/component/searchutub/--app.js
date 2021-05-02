import { Component, useEffect, useState } from 'react';
// import './App.css';
import SearchBar from './component/searchutub/SearchBar'
import youtube from './component/searchutub/api/Youtube'
import VideoList from './component/searchutub/VideoList'
import VideoDetail from  './component/searchutub/VideoDetail'



const App =()=>{
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] =useState(null)


  useEffect(()=>{
    onTermSubmit('buildings')
    },[])

    const onTermSubmit =async (term)=>{
      const response = await youtube.get('/search',{
        params:{
          q:term
        }
      });
        
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    
     };

     
const onVideoSelect = (video) => {
  setSelectedVideo(video)
  
  };
  

  return(
    <div className="ui container" style={{marginTop:'20px'}}>
    <SearchBar onFormSubmit ={onTermSubmit}/>
  <div className="ui grid">
<div className="ui row">

 <div className="eleven wide column">
 <VideoDetail video={ selectedVideo}/>
 </div>

 <div className="five wide column">
 <VideoList onVideoSelect={onVideoSelect}  videos ={videos}/>

 </div>
  </div>
  </div>
    </div>

  )
}

export default App;


