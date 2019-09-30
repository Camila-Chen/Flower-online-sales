import React, { PureComponent } from "react";
import "../styles/product.css";
import Zmage from "react-zmage";

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card mb-3 ">
        <div className="row no-gutters">
          <div className="col-sm-4 col-4 suit ">
            <img
              className="rosepic"
              browsing={false}
              src={
                process.env.REACT_APP_THUMB_URL + this.props.picture + ".jpg"
              }
              alt="加载中..."
              onClick={() =>
                Zmage.browsing({
                  src: process.env.REACT_APP_ORIGIN_URL + this.props.picture,
                  alt: "加载中..."
                })
              }
            />
          </div>
          <div className="col-sm-7 col-7 ">
            <div className="card-body">
              <h5 className="card-title ">{this.props.item.name}</h5>
              <p className="intro">{this.props.item.brief}</p>
            </div>
          </div>
        </div>
        <div className="buy ">
          <div className="number d-flex flex-row justify-content-around ">
            <div className="row-price">
              <p className="price">¥ {this.props.item.price}</p>
            </div>
            <div className="row-stock">
              <p className="stock ">库存{this.props.item.stock}扎</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
