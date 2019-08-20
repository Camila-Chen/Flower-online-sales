import React, { PureComponent } from "react";
import "../styles/card.css";
import Product from "./Product";

class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { openId, parentId } = this.props;
    return (
      <div className="card gap">
        <div className="card-header">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={"#" + openId}
              aria-expanded="false"
              aria-controls={openId}
            >
              {this.props.name}
            </button>
          </h2>
        </div>

        <div
          id={openId}
          className="collapse"
          aria-labelledby={openId}
          data-parent={`#${parentId}`}
        >
          <div className="card-body">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
