import React, { useEffect, useRef, useState } from "react";
import "./VideoListContainer.css";
import VideoPhoto from "../../UI/VideoPhoto/VideoPhoto";
import useFetch from "../../../Hooks/useFetch";

function VideoListContainer(props) {
  const containerRef = useRef(null);
  const [currentHover, setCurrentHover] = useState(null);

  // Maintaning useRef using this i am handeling the scroll event
  // There is some ui problem that why i am getting not fixed width of the container
  // After hiting the scroll pin making the ref is false and when data fetch is done make it back true
  const isFetched = useRef(true)
  const [loading, setLoading] = useState(false)


  // Fetching Movies
  const [movieList, setPage] = useFetch(props.categoryId, isFetched, setLoading);

  // On Click Next Button
  const onClickNextBtn = () => {
    const box = containerRef.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: Math.ceil(box.scrollLeft) + Math.ceil(width),
      behavior: "smooth",
    });
  };

  // On Click Previous Button
  const onClickPrevBtn = () => {
    const box = containerRef.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: Math.ceil(box.scrollLeft) - Math.ceil(width),
      behavior: "smooth",
    });
  };


  // Fetching Data on Scroll
  const handleScroll = () => {
    const box = containerRef.current;
    const totalWidth = box.scrollWidth;
    const width = box.clientWidth;
    const scrollLeft = box.scrollLeft;

    if (Math.ceil(width) + Math.ceil(scrollLeft) + 500 >= totalWidth && isFetched.current) {
      console.log(isFetched.current);
      isFetched.current = false
      setLoading(true)
      setPage((p) => p + 1);
    }
  };


  // Adding Scroll Handeler
  useEffect(() => {
    const box = containerRef.current;
    box.addEventListener("scroll", handleScroll);
    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    movieList && (
      <div className=" VideoListContainer-div ">
        <h3 className="categoryName">{props.categoryName}</h3>
        <div className="VideoListContainer-div_btn_VideoContainer">
          <button onClick={onClickPrevBtn} className="swiperBtnPrev">
            <i className='bx bx-caret-left'></i>
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
                  generatedMovieId={index % 4} // Because I Dont have more video stored
                  currentHover={currentHover}
                  setCurrentHover={setCurrentHover}
                />
              );
            })}
          </div>
          <button onClick={onClickNextBtn} className="swiperBtnNext">
            {loading ? <i className='bx bx-loader-circle bx-spin' ></i> : <i className='bx bx-caret-right'></i>}
          </button>
        </div>
      </div>
    )
  );
}

export default VideoListContainer;
