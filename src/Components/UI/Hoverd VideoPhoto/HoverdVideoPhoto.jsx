import React from "react";
import "./HoverdVideoPhoto.css";

function HoverdVideoPhoto(props) {
  return (
    <div
      style={{
        left: `${props.left ? 0 : "auto"}`,
        right: `${props.right ? 0 : "auto"}`,
      }}
      onMouseLeave={props.onMouseOutHandeler}
      className=" HoverdVideoPhoto-div "
    >
      <img
        src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1418/1511418-v-f8338368d30d"
        alt=""
      />

      <div className="HoverdVideoPhoto-div__container">
        <div className="btnGroup">
          <button>Watch Now</button>
          <button>+</button>
        </div>
        <p>2023 | Tamil | Drama</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          eius ab facilis illum maiores assumenda inventore aliquid tenetur
          dolore saepe.
        </p>
      </div>
      <div className="gradiant"></div>
    </div>
  );
}

export default HoverdVideoPhoto;
