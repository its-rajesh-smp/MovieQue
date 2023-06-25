import React, { useState } from "react";
import "./VideoPhoto.css";
import HoverdVideoPhoto from "../Hoverd VideoPhoto/HoverdVideoPhoto";
import { ShowOnDesktop } from "../../../Styles/Media";
import { TMDB_POSTER_HIGH } from "../../../Firebase/API_URL";

function VideoPhoto(props) {
  const [hovered, setHovered] = useState(false);

  const onMouseInHandeler = () => {
    setHovered(true);
  };
  const onMouseOutHandeler = () => {
    setHovered(false);
  };

  return (
    <>
      <div className=" VideoPhoto-div ">
        <img
          className="VideoPhoto-div__img"
          onMouseEnter={onMouseInHandeler}
          src={`${TMDB_POSTER_HIGH}${props.data.poster_path}`}
          alt=""
        />
        <ShowOnDesktop>
          {hovered && (
            <HoverdVideoPhoto
              data={props.data}
              left={props.left}
              right={props.right}
              onMouseOutHandeler={onMouseOutHandeler}
            />
          )}
        </ShowOnDesktop>
      </div>
    </>
  );
}

export default VideoPhoto;
