import React from "react";
import "./HomePage.css";
import HomePageVideoContainer from "../../Components/Home Page/Home Page Video Container/HomePageVideoContainer";
import VideoListContainer from "../../Components/Home Page/Video List Container/VideoListContainer";
import HomePageVideoDetails from "../../Components/Home Page/Home Page Video Details/HomePageVideoDetails";

function HomePage(props) {
  return (
    <div className=" HomePage-div remove_header ">
      <HomePageVideoContainer />
      <HomePageVideoDetails />
      <VideoListContainer />
      <VideoListContainer />
      <VideoListContainer />
      <VideoListContainer />
    </div>
  );
}

export default HomePage;
