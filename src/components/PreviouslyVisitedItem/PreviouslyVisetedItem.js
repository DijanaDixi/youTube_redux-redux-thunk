import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { PREVIOUSLY_VIDEO_ACTION } from "../../redux/youTube/youTubeActionCreactors";
import styles from "./PreviouslyVisetedItem.module.css";

function PreviouslyVisetedItem({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles.videoCard}
        onClick={() => {
          dispatch(PREVIOUSLY_VIDEO_ACTION(item));
        }}
      >
        <div className={styles.image}>
          <img src={item.snippet.thumbnails.medium.url} alt="img" />
        </div>
        <div className={styles.about}>
          <h6>{item.snippet.title.substring(0, 40)}</h6>
          <p className="mt-1 ml-1">{item?.snippet?.channelTitle} &#119136;</p>
        </div>
      </div>
    </>
  );
}
PreviouslyVisetedItem.propTypes = {
  item: PropTypes.object,
  selectedVideo: PropTypes.func.isRequired,
};
export default PreviouslyVisetedItem;
