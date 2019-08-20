import React from "react";
import "../styles/local.css";
// class CategoryLocal extends React.Component {
//   constructor(props) {
//     super();
//   }
//   render() {
function Local() {
  return (
    <div className="Local-Category">
      <hr className="dotted-line" />
      <img
        className="local-img"
        src={require("../image/local1.jpg")}
        alt="加载中..."
      />
    </div>
  );
}
//   }
// }

export default Local;
