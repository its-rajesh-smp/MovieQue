import React from "react";
import "./NavLinks.css";

function NavLinks(props) {
  return (
    <div className=" NavLinks-div ">
      <ul>
        <li>
          <i className="bx bx-user-circle"></i>
        </li>
        <li>
          <i className="bx bx-search"></i>
        </li>
        <li>
          <i className="bx bx-home-alt"></i>
        </li>
        <li>
          <i className="bx bxs-tv"></i>
        </li>
        <li>
          <i className="bx bx-home-alt"></i>
        </li>
        <li>
          <i className="bx bx-timer"></i>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
