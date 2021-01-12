import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"
import PreviouslyVisitedItem from "../PreviouslyVisitedItem/PreviouslyVisetedItem";


function PreviouslyVisitedVideos() {

  const previouslyVideos=useSelector((state)=>state.previouslyVisetedVideo)
  let history = previouslyVideos.map((item) => {
    return (
      <PreviouslyVisitedItem
        key={item.id.videoId}
        item={item}
      />
    );
  });
  
  return (
    <>
      {previouslyVideos.length > 0 ? (
        <div>
          <h5>Previous</h5>
          <hr className="w-25" />
        </div>
      ) : null}
      {/* <div className="row"> */}
      {history}
      {/* </div> */}
     
    </>
  );
}

PreviouslyVisitedVideos.propTypes={
previouslyVideos:PropTypes.array,
selectedVideo:PropTypes.func,

}
export default PreviouslyVisitedVideos;
