import React from "react";
import moment from "moment";
import ReactPlayer from "react-player/lazy";
import { useSelector } from "react-redux";
import styles from "./Player.module.css";

function Player() {

  const videoPlayer = useSelector((state) => state.videoPlayerItem);
  const date = moment(videoPlayer?.snippet?.publishedAt).format("LL");
  
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoPlayer?.id?.videoId}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
        className="react-player"
        playing
        width="100%"
        height="400px"
        controls={true}
      />
      {/* details */}
      <div className={styles.details}>
        <h5>{videoPlayer?.snippet?.title}</h5>
        <p>{`${date}`}</p>
        <hr />
        <img
          src={videoPlayer?.snippet?.thumbnails?.default?.url}
          className={styles.imgDetails}
          alt="player"
        />
        <span className="ml-1">
          {videoPlayer?.snippet?.channelTitle} &#119136;
        </span>
        <hr />
      </div>
    </>
  );
}

export default Player;
