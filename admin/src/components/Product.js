import React, { PureComponent } from "react";
import "../styles/product.css";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-sm-3 col-3 suit">
            <img
              className="rosepic img-fluid"
              src={require("../image/rose1.jpeg")}
              alt="加载中..."
            />
          </div>
          <div className="col-sm-8 col-8 ">
            <div className="card-body">
              <h5 className="card-title ">粉红</h5>
              <p className="card-text intro">杆长60cm，20支/扎</p>
            </div>
          </div>
        </div>
        <div className="buy d-flex justify-content-end">
          <div className="number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">¥ 30.00</p>
            </div>
            <div className="row-stock">
              <p className="stock ">库存10件</p>
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

export default Product;
