import React,{useEffect, useState,useCallback} from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import{FETCH_VIDEOS} from "../../redux/youTube/youTubeActionCreactors";
import {useDispatch} from "react-redux"
import styles from "../Search/Search.module.css";

function Search() {
  const[value, setValue]=useState("")
  const dispatch=useDispatch()

  const handler=()=>{
    dispatch(FETCH_VIDEOS(value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(debounce(handler, 3000), [value]);

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [value,delayedQuery])
  
  return (
    <>
      <div className={`row ${styles.logo}`}>
        <div className={styles.holder}>
          <img
            className={styles.imgLogo}
            src="https://ucarecdn.com/3360c17f-9a61-402b-9529-c0d514c75ed5/yt_logo_rgb_light.png"
            alt=""
          />
        </div>
        <div className={styles.input}>
          <input
            className="form-control mt-2 h-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event)=>{event.preventDefault();setValue(event.target.value)}}
          />
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  handleValue: PropTypes.func,
};
export default Search;
