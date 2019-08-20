import React from "react";
import "../styles/head.css";

function Head() {
  return (
    <div className="head-container">
      <img
        className="headpic"
        src={require("../image/head-picture.jpeg")}
        alt="back"
      />
    </div>
  );
}
export default Head;
