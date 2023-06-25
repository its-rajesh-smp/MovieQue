import React from "react";
import "./HomeVideoSlider.css";
import { TMDB_POSTER_SMALL } from "../../../../Firebase/API_URL";
import DATA from "../../../../Firebase/DATA";

function HomeVideoSlider(props) {
  // On Click Movie Image
  const onClickChangeMovie = (id) => {
    localStorage.setItem('movie', id)
    props.setCurrentVideo(id);
  };

  return (
    <div className=" HomeVideoSlider-div ">
      <div className="HomeVideoSlider-div__container">
        {DATA.map((movie) => {
          return (
            <img
              style={
                props.currentVideo === movie.id
                  ? { scale: "1.5" }
                  : { scale: "unset" }
              }
              onClick={(e) => onClickChangeMovie(movie.id)}
              key={movie.id}
              src={`${TMDB_POSTER_SMALL}/${movie.poster}`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeVideoSlider;
