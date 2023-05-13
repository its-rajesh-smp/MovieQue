import React from "react";
import "./HomeVideoDetails.css";

function HomeVideoDetails(props) {
  return (
    <div className=" HomeVideoDetails-div ">
      <h1>AVATAR</h1>
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
        <button>Watch Now</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default HomeVideoDetails;
