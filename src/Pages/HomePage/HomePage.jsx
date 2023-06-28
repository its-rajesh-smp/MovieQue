import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import HomePageVideoContainer from "../../Components/Home Page/Home Page Video Container/HomePageVideoContainer";
import VideoListContainer from "../../Components/Home Page/Video List Container/VideoListContainer";
import HomePageVideoDetails from "../../Components/Home Page/Home Page Video Details/HomePageVideoDetails";
import { GENRES } from "../../Firebase/DATA";



function HomePage(props) {

  const [currentVideo, setCurrentVideo] = useState(localStorage.getItem("movie") ? Number(localStorage.getItem("movie")) : 0);
  const containerRef = useRef()
  const [page, setPage] = useState(3)



  // Infinite Scroll
  const handelScroll = () => {
    const container = containerRef.current
    const totalHeight = container.scrollHeight
    const innerHeight = window.innerHeight
    const scrollHeight = window.scrollY

    console.log(`TOTAL ${totalHeight}  PLUS ${innerHeight + scrollHeight}`);
    if (innerHeight + scrollHeight + 10 >= totalHeight) {
      setPage(p => p + 1)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handelScroll)
    return () => {
      window.removeEventListener("scroll", handelScroll)
    }
  }, [])




  return (
    <div ref={containerRef} className=" HomePage-div remove_header ">
      <HomePageVideoContainer
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
      />
      <HomePageVideoDetails
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />


      {
        GENRES.map((genres) => {
          return <VideoListContainer
            categoryId={genres.id}
            categoryName={genres.name}
            key={genres.id}
          />
        }).slice(0, page)
      }


    </div>
  );
}

export default HomePage;
