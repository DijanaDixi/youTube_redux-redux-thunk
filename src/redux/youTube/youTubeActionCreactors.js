import * as actionTypes from "./youTubeActionTypes"
import axios from "axios"

// Fetch videos
export const FETCH_VIDEOS=(val)=>{
    return function(dispatch){
        dispatch(FETCH_VIDEOS_REQUEST_ACTION())
        axios.get('https://www.googleapis.com/youtube/v3/search',{
           params:{
            q:val ,
            maxResults: 10,
            part: "snippet",
            key:"AIzaSyC9oJalWv7Jd-bq4VhuuZ_sPBG19PvS3Ao",
            type: "video", 
           }

        })
        .then(function(resp){
            dispatch(FETCH_VIDEOS_SUCCESS_ACTION(resp.data.items))
        })
    }

}
export const FETCH_VIDEOS_REQUEST_ACTION=()=>{
    return{
        type:actionTypes.FETCH_VIDEOS_REQUEST,
        
    }
}
export const FETCH_VIDEOS_SUCCESS_ACTION=(videos)=>{
    return{
        type:actionTypes.FETCH_VIDEOS_SUCCESS,
        payload:{
            videos:videos,
        }
        
    }
}

export const PREVIOUSLY_VIDEO_ACTION=(video)=>{
    return{
        type:actionTypes.PREVIOUSLY_VIDEOS,
        payload:{
            video:video
        }
    }

}
