import React, { PureComponent } from "react";
import "../styles/cartCard.css";

class CartCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card-head">
          <p className="card-text">南非花材：</p>
        </div>
        <div className="card-contain d-flex justify-content-end">
          <div className="cart-number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">新娘花白色</p>
            </div>
            <div className="row-stock">
              <p className="stock text-danger">¥ 100.00</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 ">
            <input type="button" className="button" value="-" />
            <input type="button" className="button" value="0" />

            <input type="button" className="button" value="+" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartCard;
