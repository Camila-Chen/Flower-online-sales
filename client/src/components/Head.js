import React from "react";
import "../styles/head.css";

function Head() {
  return (
    <div className="head-container d-flex justify-content-center">
      <img
        className="headpic"
        src={require("../image/head-picture.jpeg")}
        alt="back"
      />
    </div>
  );
}
export default Head;
