import React from "react";
import PropTypes from "prop-types";
import VideoItem from "../VideoItem/VideoItem";
import { useSelector } from "react-redux";
import styles from "./VideoList.module.css";

function VideoList() {
  const allVideos = useSelector((state) => state.videos);

  const list = allVideos.map((video) => {
    return <VideoItem video={video} key={video.id.videoId} />;
  });

  return (
    <>
      {allVideos.length ? (
        <div>
          <p className={styles.next}>Next</p>
          <hr />
        </div>
      ) : null}
      {list}
    </>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
};
export default VideoList;
