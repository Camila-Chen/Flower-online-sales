import React, { PureComponent } from "react";
import "../styles/product.css";
import Zmage from "react-zmage";

class Product extends PureComponent {
  constructor(props) {
    super(props);
  }

  addClick = () => {
    this.props.addOrder(this.props.item, this.props.categoryName);
    // console.log(this.props.Index);
  };

  reduceClick = () => {
    // debugger;

    this.props.reduceOrder(this.props.item);
  };
  handleChange = e => {
    this.props.changeOrder(this.props.item, e.target.value);
  };

  render() {
    // debugger;
    var found = this.props.orderItems.find(element => {
      return element.id === this.props.item.id;
    });
    var number = found !== undefined ? found.number : 0;

    return (
      <div className="card mb-3 ">
        <div className="row no-gutters">
          <div className="col-sm-4 col-4 suit ">
            <Zmage
              className="rosepic "
              src={process.env.REACT_APP_BASE_URL + this.props.picture}
              alt="加载中..."
            />
          </div>
          <div className="col-sm-7 col-7 ">
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
              <p className="stock ">库存{this.props.item.stock}扎</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 d-flex justify-content-center ">
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
              style={{ width: 40 }}
              onChange={this.handleChange}
              value={number}
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

export default Product;
