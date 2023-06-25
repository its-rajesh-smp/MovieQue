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
      <VideoListContainer categoryId="28" />
      <VideoListContainer categoryId="10752" />
      <VideoListContainer categoryId="27" />
      <VideoListContainer categoryId="10749" />
    </div>
  );
}

export default HomePage;
