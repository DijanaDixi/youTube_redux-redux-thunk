import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {PREVIOUSLY_VIDEO_ACTION} from "../../redux/youTube/youTubeActionCreactors"
import styles from "./VideoItem.module.css";

function VideoItem({ video }) {
  const dispatch=useDispatch()
  return (
    <div className={styles.card} onClick={()=>{dispatch(PREVIOUSLY_VIDEO_ACTION(video))}}>
      <div className={styles.image}>
      <img src={video.snippet.thumbnails.medium.url} alt="video" />
      </div>
      <div className={styles.about}>
        <h6>{video.snippet.title.substring(0, 40)}</h6>
        <p className="mt-1 ml-1 medium">
          {video?.snippet?.channelTitle} &#119136;
        </p>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object,
  selectedVideo: PropTypes.func,
};
export default VideoItem;
