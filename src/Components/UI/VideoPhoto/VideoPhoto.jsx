import React, { useEffect, useRef, useState } from "react";
import "./VideoPhoto.css";
import HoverdVideoPhoto from "../Hoverd VideoPhoto/HoverdVideoPhoto";
import { ShowOnDesktop } from "../../../Styles/Media";
import { TMDB_IMG, TMDB_POSTER_HIGH, TMDB_POSTER_VERY_SMALL } from "../../../Firebase/API_URL";
import { useNavigate } from "react-router-dom";

function VideoPhoto(props) {
  const navigate = useNavigate();

  // Navigate To Player
  const onClickWatchNow = (e) => {
    navigate(`/player/${props.generatedMovieId}`);
  };

  // On Mouse In Show Hover Movie Photo
  const onMouseInHandler = () => {
    props.setCurrentHover(props.data.id);

  };

  // On Mouse Out Off Hover Movie Photo
  const onMouseOutHandler = () => {
    props.setCurrentHover(null);
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
