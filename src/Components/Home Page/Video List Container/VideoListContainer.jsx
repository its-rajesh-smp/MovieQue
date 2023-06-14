import React, { useRef } from "react";
import "./VideoListContainer.css";
import VideoPhoto from "../../UI/VideoPhoto/VideoPhoto";

function VideoListContainer(props) {
  const containerRef = useRef(null);

  const onClickNextBtn = () => {
    const box = containerRef.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft + width,
      behavior: "smooth",
    });
  };

  const onClickPrevBtn = () => {
    const box = containerRef.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft - width,
      behavior: "smooth",
    });
  };

  return (
    <div className=" VideoListContainer-div ">
      <h3>Latest & Trending</h3>
      <div className="VideoListContainer-div_btn_VideoContainer">
        <button onClick={onClickPrevBtn} className="swiperBtnPrev">
          {"<"}
        </button>
        <div ref={containerRef} className="VideoListContainer-div__container">
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
        <button onClick={onClickNextBtn} className="swiperBtnNext">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default VideoListContainer;
