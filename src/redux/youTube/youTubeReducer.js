import initState from "./initiState";
import * as actionTypes from "./youTubeActionTypes";

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEOS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.payload.videos,
        videoPlayerItem: action.payload.videos[0],
      };
    case actionTypes.PREVIOUSLY_VIDEOS:
      const history = [state.videoPlayerItem, ...state.previouslyVisetedVideo];
      const filter = [...history].filter(
        (v) => v.id.videoId !== action.payload.video.id.videoId
      );
      return {
        ...state,
        videoPlayerItem: action.payload.video,
        previouslyVisetedVideo: filter,
      };
    default:
      return state;
  }
};

export default accountReducer;
