import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPlayerPage from "../Pages/VideoPlayerPage/VideoPlayerPage";

function App(props) {
  return (
    <div className=" App-div ">
      {/* <Header /> */}
      {/* <HomePage /> */}
      <VideoPlayerPage />
    </div>
  );
}

export default App;
