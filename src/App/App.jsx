import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import MyRoutes from "../Routes/MyRoutes";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
