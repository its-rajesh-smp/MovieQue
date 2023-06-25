import React, { useEffect, useRef, useState } from "react";
import "./VideoPhoto.css";
import HoverdVideoPhoto from "../Hoverd VideoPhoto/HoverdVideoPhoto";
import { ShowOnDesktop } from "../../../Styles/Media";
import { TMDB_POSTER_HIGH } from "../../../Firebase/API_URL";
import { useNavigate } from "react-router-dom";

function VideoPhoto(props) {

  const onMouseInHandler = () => {
    props.setCurrentHover(props.data.id);

  };

  const onMouseOutHandler = () => {
    props.setCurrentHover(null);
  };

  const navigate = useNavigate();
  const onClickWatchNow = (e) => {
    navigate(`/player/${props.generatedMovieId}`);
  };




  return (
    <>
      <div className=" VideoPhoto-div ">
        <img
          onClick={onClickWatchNow}
          className="VideoPhoto-div__img"
          onMouseEnter={onMouseInHandler}
          src={`${TMDB_POSTER_HIGH}${props.data.poster_path}`}
          alt=""
        />
        <ShowOnDesktop>

          {props.currentHover === props.data.id && (

            <HoverdVideoPhoto
              generatedMovieId={props.generatedMovieId}
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
