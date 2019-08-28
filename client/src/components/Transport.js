import React, { PureComponent } from "react";
import "../styles/transport.css";

class Transport extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input check-select"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              顺丰特惠陆运到付
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              顺丰标快空运到付
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              汽运
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              空运
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              闪送
            </label>
          </div>
        </li>
      </ul>
    );
  }
}

export default Transport;
