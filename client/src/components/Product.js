import React, { PureComponent } from "react";
import "../styles/product.css";

class Product extends PureComponent {
  constructor(props) {
    super(props);
  }

  addClick = () => {
    // debugger;
    this.props.addOrder(this.props);
  };

  reduceClick = () => {
    this.props.reduceOrder(this.props);
  };
  handleChange = e => {
    this.props.changeOrder(this.props, e.target.value);
  };

  render() {
    const { n = 0 } = this.props;
    return (
      <div className="card mb-3 ">
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
              <h5 className="card-title ">{this.props.item.name}</h5>
              <p className="intro">{this.props.item.brief}</p>
            </div>
          </div>
        </div>
        <div className="buy d-flex justify-content-end">
          <div className="number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">¥ {this.props.item.price}</p>
            </div>
            <div className="row-stock">
              <p className="stock ">库存{this.props.item.stock}件</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 ">
            <button
              type="button"
              className="button"
              onClick={this.reduceClick}
              disabled={n <= 0}
            >
              -
            </button>
            <input
              type="number"
              className="button-input"
              onChange={this.handleChange}
              value={n <= this.props.item.stock ? n : this.props.item.stock}
            />

            <button
              type="button"
              className="button"
              onClick={this.addClick}
              disabled={n >= this.props.item.stock}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
