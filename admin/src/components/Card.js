import React, { PureComponent } from "react";
import "../styles/card.css";

class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { openId, parentId } = this.props;
    return (
      <div className="card gap">
        <div className="card-header d-flex flex-row justify-content-between">
          {/* <h2 className="mb-0"> */}
          <button
            className="btn btn-link  "
            type="button"
            data-toggle="collapse"
            data-target={"#" + openId}
            aria-expanded="false"
            aria-controls={openId}
          >
            {this.props.name}
          </button>
          <div className="update ">
            <p>编辑</p>
          </div>
          {/* </h2> */}
        </div>

        <div
          id={openId}
          className="collapse"
          aria-labelledby={openId}
          data-parent={`#${parentId}`}
        />
      </div>
    );
  }
}

export default Card;
