import React from "react";
import "./VideoListContainer.css";
import VideoPhoto from "../../UI/VideoPhoto/VideoPhoto";

function VideoListContainer(props) {
  return (
    <div className=" VideoListContainer-div ">
      <h3>Latest & Trending</h3>
      <div className="VideoListContainer-div__container">
        <VideoPhoto left={true} />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto />
        <VideoPhoto right={true} />
      </div>
    </div>
  );
}

export default VideoListContainer;
