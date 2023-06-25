import React from "react";
import "./HomeVideoDetails.css";
import DATA from "../../../../Firebase/DATA";
import { useNavigate } from "react-router-dom";

function HomeVideoDetails(props) {
  const [currentVideo] = DATA.filter((movie) => {
    return movie.id === props.currentVideo;
  });

  const navigate = useNavigate();
  const onClickWatchNow = () => {
    navigate(`/player/${currentVideo.id}`);
  };

  return (
    <div className=" HomeVideoDetails-div ">
      <h1>{currentVideo.name}</h1>
      <h3>
        <span>2023</span> | <span>1 Season</span> | <span>7 Languages</span>
      </h3>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat
        porro soluta doloremque tempore minima magni architecto incidunt
        reiciendis sapiente.
      </h3>
      <h3>Drama | Action</h3>
      <div className="btnGroup">
        <button onClick={onClickWatchNow}>Watch Now</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default HomeVideoDetails;
