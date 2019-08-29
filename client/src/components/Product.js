import React, { PureComponent } from "react";
import "../styles/product.css";

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      found: ""
    };
  }

  addClick = () => {
    this.props.addOrder(this.props.item, this.props.categoryName);
  };

  reduceClick = () => {
    this.props.reduceOrder(this.props);
  };
  handleChange = e => {
    this.props.changeOrder(this.props, e.target.value);
  };

  render() {
    // debugger;
    const { n = 0 } = this.props;
    var found = this.props.orderItems.find(element => {
      return element.id === this.props.item.id;
    });
    var number = found !== undefined ? found.number : 0;

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
              disabled={number <= 0}
            >
              -
            </button>
            <input
              type="number"
              className="button-input"
              onChange={this.handleChange}
              value={
                number <= this.props.item.stock ? number : this.props.item.stock
              }
            />

            <button
              type="button"
              className="button"
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

export default Product;
