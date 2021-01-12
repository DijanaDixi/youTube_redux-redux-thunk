import React from "react";
import Player from "./components/Player/Player";
import Search from "./components/Search/Search";
import PreviouslyVisitedVideos from "./components/PreviouslyVisetedVideos/PreviouslyVisetedVideos";
import VideoList from "./components/VideoList/VideoList";
import {useSelector} from "react-redux"

function App() {

  const videos=useSelector((state)=>state.videos)
  console.log(videos)
  return (
   
      <div className="container">
        <Search />
        <div className="row">
          <div className="col-md-8">
            
            {videos.length>0?<Player />:null}
            <PreviouslyVisitedVideos />
          </div>
          <div className="col-md-4">
            <VideoList />
          </div>
        </div>
      </div>
  
  );
}

export default App;
