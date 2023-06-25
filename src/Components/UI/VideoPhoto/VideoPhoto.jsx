import React, { useRef, useState } from "react";
import "./VideoPhoto.css";
import HoverdVideoPhoto from "../Hoverd VideoPhoto/HoverdVideoPhoto";
import { ShowOnDesktop } from "../../../Styles/Media";
import { TMDB_POSTER_HIGH } from "../../../Firebase/API_URL";

function VideoPhoto(props) {
  const hoverTimeoutRef = useRef(null);

  const onMouseInHandler = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      props.setCurrentHover(props.data.id);
    }, 200);
  };

  const onMouseOutHandler = () => {
    props.setCurrentHover(null);
    clearTimeout(hoverTimeoutRef.current);
  };

  return (
    <>
      <div className=" VideoPhoto-div ">
        <img
          className="VideoPhoto-div__img"
          onMouseEnter={onMouseInHandler}
          src={`${TMDB_POSTER_HIGH}${props.data.poster_path}`}
          alt=""
        />
        <ShowOnDesktop>
          {props.currentHover === props.data.id && (
            <HoverdVideoPhoto
              data={props.data}
              left={props.left}
              right={props.right}
              onMouseOutHandeler={onMouseOutHandler}
            />
          )}
        </ShowOnDesktop>
      </div>
    </>
  );
}

export default VideoPhoto;
