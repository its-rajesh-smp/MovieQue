import React, { useState } from "react";
import "./HomePage.css";
import HomePageVideoContainer from "../../Components/Home Page/Home Page Video Container/HomePageVideoContainer";
import VideoListContainer from "../../Components/Home Page/Video List Container/VideoListContainer";
import HomePageVideoDetails from "../../Components/Home Page/Home Page Video Details/HomePageVideoDetails";

function HomePage(props) {
  const [currentHover, setCurrentHover] = useState(null);
  return (
    <div className=" HomePage-div remove_header ">
      <HomePageVideoContainer />
      <HomePageVideoDetails />
      <VideoListContainer
        currentHover={currentHover}
        setCurrentHover={setCurrentHover}
        categoryId="28"
      />
      <VideoListContainer
        currentHover={currentHover}
        setCurrentHover={setCurrentHover}
        categoryId="10752"
      />
      <VideoListContainer
        currentHover={currentHover}
        setCurrentHover={setCurrentHover}
        categoryId="27"
      />
      <VideoListContainer
        currentHover={currentHover}
        setCurrentHover={setCurrentHover}
        categoryId="10749"
      />
    </div>
  );
}

export default HomePage;
