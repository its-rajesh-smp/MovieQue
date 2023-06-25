import React from "react";
import "./HomePageVideoDetails.css";
import HomeVideoDetails from "../../UI/Home Page/Home Video Details/HomeVideoDetails";
import HomeVideoSlider from "../../UI/Home Page/Home Video Slider/HomeVideoSlider";

function HomePageVideoDetails(props) {
  return (
    <div className=" HomePageVideoDetails-div ">
      <HomeVideoDetails currentVideo={props.currentVideo} />
      <HomeVideoSlider
        currentVideo={props.currentVideo}
        setCurrentVideo={props.setCurrentVideo}
      />
    </div>
  );
}

export default HomePageVideoDetails;
