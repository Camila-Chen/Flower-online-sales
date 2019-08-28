import React, { PureComponent } from "react";
import "../styles/cartCard.css";

class CartCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addClick = () => {
    this.props.addOrder(this.props);
  };
  reduceClick = () => {
    this.props.reduceOrder(this.props);
  };

  handleChange = e => {
    // debugger;
    this.props.changeOrder(this.props, e.target.value);
  };
  render() {
    return (
      <div>
        <div className="card-head">
          <p className="card-text">{this.props.categoryName}：</p>
        </div>
        <div className="card-contain d-flex justify-content-end">
          <div className="cart-number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">{this.props.name}</p>
            </div>
            <div className="row-stock">
              <p className="stock text-danger">¥ {this.props.price}</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 ">
            <button
              type="button"
              className="button"
              onClick={this.reduceClick}
              disabled={this.props.n <= 0}
            >
              -
            </button>

            <input
              type="number"
              className="button-input"
              onChange={this.handleChange}
              max={this.props.stock}
              value={this.props.n}
            />

            <button
              type="button"
              className="button"
              onClick={this.addClick}
              disabled={this.props.n >= this.props.stock}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartCard;
