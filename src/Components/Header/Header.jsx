import React from "react";
import "./Header.css";
import Brand from "../UI/Header/Brand/Brand";
import NavLinks from "../UI/Header/NavLinks/NavLinks";

function Header(props) {
  return (
    <header className=" Header-div ">
      <nav className="Header-div__nav">
        {/* <Brand /> */}
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;
