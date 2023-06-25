import React from "react";
import "./HomeVideoSlider.css";
import { TMDB_POSTER_SMALL } from "../../../../Firebase/API_URL";
import DATA from "../../../../Firebase/DATA";

function HomeVideoSlider(props) {
  return (
    <div className=" HomeVideoSlider-div ">
      <div className="HomeVideoSlider-div__container">
        {DATA.map((movie) => {
          return (
            <img
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
