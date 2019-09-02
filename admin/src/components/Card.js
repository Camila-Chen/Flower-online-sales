import React, { PureComponent } from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import CategoriesDelete from "./CategoriesDelete";

class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card gap">
          <div className="card-header d-flex flex-row">
            <div className="nameId col-sm-8 col-8">
              <button className="btn btn-link " type="button">
                {this.props.name}
              </button>
            </div>
            <div className="operate col-sm-4 col-4">
              <div className="update">
                <Link to={"/categories/update/" + this.props.openId}>编辑</Link>
              </div>
              <div className="delete">
                <CategoriesDelete deleteId={this.props.openId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
