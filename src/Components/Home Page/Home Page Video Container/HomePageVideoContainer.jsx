import React from "react";
import "./HomePageVideoContainer.css";
import myvideo from "../../../assets/myvideo.mp4";

function HomePageVideoContainer(props) {
  return (
    <div className=" HomePageVideoContainer-div ">
      <div className="groundGraidiant"></div>
      <video src={myvideo} autoPlay muted loop></video>
    </div>
  );
}

export default HomePageVideoContainer;
