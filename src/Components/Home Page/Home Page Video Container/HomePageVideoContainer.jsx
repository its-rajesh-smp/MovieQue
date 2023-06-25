import React, { useEffect, useRef, useState } from "react";
import "./HomePageVideoContainer.css";

function HomePageVideoContainer(props) {
  const videoRef = useRef();
  const [videoOpacity, setVideoOpacity] = useState(10);

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

  return (
    <div
      style={{ opacity: videoOpacity }}
      className=" HomePageVideoContainer-div "
    >
      <div className="groundGraidiant"></div>
      <video
        ref={videoRef}
        src={
          "https://firebasestorage.googleapis.com/v0/b/movieque-fc953.appspot.com/o/myvideo.mp4?alt=media&token=38f986d3-03e3-4b1f-806b-102b3f456da3"
        }
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default HomePageVideoContainer;
