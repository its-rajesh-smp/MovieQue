import React, { useRef } from "react";
import "./VideoListContainer.css";
import VideoPhoto from "../../UI/VideoPhoto/VideoPhoto";
import useFetch from "../../../Hooks/useFetch";
import { TMDB_BY_CATEGORY } from "../../../Firebase/API_URL";

function VideoListContainer(props) {
  const containerRef = useRef(null);

  const { results: movieList } = useFetch(
    `${TMDB_BY_CATEGORY}${props.categoryId}`
  );

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
    movieList && (
      <div className=" VideoListContainer-div ">
        <h3>Latest & Trending</h3>
        <div className="VideoListContainer-div_btn_VideoContainer">
          <button onClick={onClickPrevBtn} className="swiperBtnPrev">
            {"<"}
          </button>
          <div ref={containerRef} className="VideoListContainer-div__container">
            {movieList.map((movie, index) => {
              const left = index === 0 && true;
              const right = index === movieList.length - 1 && true;
              return (
                <VideoPhoto
                  left={left}
                  right={right}
                  data={movie}
                  key={movie.id}
                  currentHover={props.currentHover}
                  setCurrentHover={props.setCurrentHover}
                />
              );
            })}
          </div>
          <button onClick={onClickNextBtn} className="swiperBtnNext">
            {">"}
          </button>
        </div>
      </div>
    )
  );
}

export default VideoListContainer;
