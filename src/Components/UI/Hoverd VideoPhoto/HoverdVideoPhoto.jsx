import React from "react";
import "./HoverdVideoPhoto.css";
import { TMDB_POSTER_HIGH } from "../../../Firebase/API_URL";

function HoverdVideoPhoto(props) {
  return (
    <div
      style={{
        left: `${props.left ? 0 : "auto"}`,
        right: `${props.right ? 0 : "auto"}`,
      }}
      onMouseLeave={props.onMouseOutHandeler}
      className=" HoverdVideoPhoto-div "
    >
      <img src={`${TMDB_POSTER_HIGH}${props.data.poster_path}`} alt="" />

      <div className="HoverdVideoPhoto-div__container">
        <div className="btnGroup">
          <button>Watch Now</button>
          <button>+</button>
        </div>
        <p>{props.data.original_title}</p>
        <p className="overView">{props.data.overview}</p>
      </div>
      <div className="gradiant"></div>
    </div>
  );
}

export default HoverdVideoPhoto;
