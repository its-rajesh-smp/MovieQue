import React, { useState } from "react";
import "./VideoPhoto.css";
import HoverdVideoPhoto from "../Hoverd VideoPhoto/HoverdVideoPhoto";
import { ShowOnDesktop } from "../../../Styles/Media";

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
          src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1418/1511418-v-f8338368d30d"
          alt=""
        />
        <ShowOnDesktop>
          {hovered && (
            <HoverdVideoPhoto
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
