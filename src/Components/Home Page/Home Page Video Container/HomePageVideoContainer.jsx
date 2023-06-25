import React, { useEffect, useRef, useState } from "react";
import "./HomePageVideoContainer.css";
import DATA from "../../../Firebase/DATA";
import { TMDB_IMG } from "../../../Firebase/API_URL";

function HomePageVideoContainer(props) {
  const videoRef = useRef();
  const [videoOpacity, setVideoOpacity] = useState(10);
  const [showVideo, setShowVideo] = useState(true);
  const [currentVideo] = DATA.filter((movie) => {
    return movie.id === props.currentVideo;
  });

  // On Scroll Effect Video Pause and Opacity Drop
  useEffect(() => {
    const handleScroll = () => {
      const distance = 450;
      const windowY = window.scrollY;
      const newOpacity = 1 - windowY / distance;
      setVideoOpacity(newOpacity >= 0 ? newOpacity : 0);
      if (windowY < distance) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // If The Video Timing Left 5 then changing the video
  const changeVideoOnRemainFiveSecond = () => {
    if (videoRef.current.duration - videoRef.current.currentTime <= 5) {
      props.setCurrentVideo((p) => {
        if (p === 3) {
          return 0;
        } else {
          return p + 1;
        }
      });
    }
  };

  return (
    <div
      style={{ opacity: videoOpacity }}
      className=" HomePageVideoContainer-div "
    >
      <div className="groundGraidiant"></div>

      {showVideo && <img src={`${TMDB_IMG}${currentVideo.backdrop}`} />}
      <video
        onTimeUpdate={changeVideoOnRemainFiveSecond}
        ref={videoRef}
        src={currentVideo.videoLink}
        autoPlay
        muted
        loop
        onLoadStart={() => {
          setShowVideo(true);
        }}
        onLoadedData={() => {
          setShowVideo(false);
        }}
      />
    </div>
  );
}

export default HomePageVideoContainer;
