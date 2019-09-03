import React, { PureComponent } from "react";
import "../styles/cartCard.css";

class CartCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addClick = () => {
    // debugger;
    // console.log(this.props.item.number);

    this.props.addOrder(this.props.item);
  };
  reduceClick = () => {
    this.props.reduceOrder(this.props.item, this.props.productIndex);
  };

  handleChange = e => {
    this.props.changeOrder(this.props.item, e.target.value);
  };
  render() {
    // debugger;
    // console.log(this.props.orderItems);
    var found = this.props.orderItems.find(element => {
      return element.id === this.props.item.id;
    });
    var number = found !== undefined ? found.number : 0;

    // debugger;
    return (
      <div>
        {this.props.item.categoryName && (
          <div className="card-head">
            <p className="card-text">{this.props.item.categoryName}：</p>
          </div>
        )}

        <div className="card-contain d-flex justify-content-end">
          <div className="cart-number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">{this.props.item.name}</p>
            </div>
            <div className="row-stock">
              <p className="stock text-danger">¥ {this.props.item.price}</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 ">
            <button
              type="button"
              className="button action-button"
              onClick={this.reduceClick}
              disabled={number <= 0}
            >
              -
            </button>

            <input
              type="number"
              className="button-input"
              onChange={this.handleChange}
              // max={this.props.item.stock}
              value={
                number <= this.props.item.stock ? number : this.props.item.stock
              }
            />
            <button
              type="button"
              className="button action-button"
              onClick={this.addClick}
              disabled={number >= this.props.item.stock}
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
