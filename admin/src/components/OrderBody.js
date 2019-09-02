import React, { PureComponent } from "react";

class OrderBody extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="order-body d-flex justify-content-around align-items-center">
        <h5 className="order-title col-sm-5 col-5 ">{this.props.name}</h5>
        <p className="order-price col-sm-5 col-5">¥ {this.props.price}.00</p>
        <p className="order-count col-sm-2 col-2">x {this.props.number}</p>
      </div>
    );
  }
}

export default OrderBody;
